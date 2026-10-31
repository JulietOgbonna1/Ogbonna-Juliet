"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { site } from "@/lib/data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().max(30).optional(),
  subject: z.string().trim().min(3, "Please add a subject.").max(120),
  message: z.string().trim().min(10, "Tell me a little more (10+ characters).").max(5000),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof z.infer<typeof schema>, string>>;
  values?: Record<string, string>;
};

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field.
  if (formData.get("company")) return { status: "success", message: "Thanks! Your message has been sent." };

  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? "") || undefined,
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
  const values = Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, v ?? ""]));

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const errors: ContactState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof schema>;
      errors[key] ??= issue.message;
    }
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("SMTP_USER / SMTP_PASS are not set");
    return {
      status: "error",
      message: `Messaging is temporarily unavailable. Please email me directly at ${site.email}.`,
      values,
    };
  }

  const { name, email, phone, message } = parsed.data;
  // Strip line breaks so a visitor can't inject extra mail headers through the subject.
  const subject = parsed.data.subject.replace(/[\r\n]+/g, " ");
  const port = Number(SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465, // 465 = implicit TLS, 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  // The sender must be the authenticated mailbox, otherwise Gmail and most providers reject or spam-flag it.
  const from = { name: process.env.SMTP_FROM_NAME ?? "Juliet Ogbonna Portfolio", address: process.env.SMTP_FROM_EMAIL ?? SMTP_USER };
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 0;color:#888;width:110px;vertical-align:top">${label}</td><td style="padding:8px 0;color:#111;font-weight:600">${value}</td></tr>`;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: { name, address: email },
      subject: `New portfolio enquiry: ${subject}`,
      text: `Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}
` : ""}Subject: ${subject}

${message}`,
      html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;border:1px solid #eee;border-radius:14px;overflow:hidden">
        <div style="background:#0a0a0a;padding:22px 26px"><h2 style="margin:0;color:#ff6a00">New message from your portfolio</h2></div>
        <div style="padding:22px 26px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            ${row("Name", escape(name))}
            ${row("Email", `<a href="mailto:${escape(email)}" style="color:#ff6a00">${escape(email)}</a>`)}
            ${phone ? row("Phone", `<a href="tel:${escape(phone)}" style="color:#ff6a00">${escape(phone)}</a>`) : ""}
            ${row("Subject", escape(subject))}
          </table>
          <p style="margin:18px 0 6px;color:#888;font-size:14px">Message</p>
          <div style="white-space:pre-wrap;background:#fff7f0;border-left:3px solid #ff6a00;padding:14px;border-radius:6px;color:#111;font-size:14px">${escape(message)}</div>
          <p style="margin-top:22px;font-size:12px;color:#999">Just hit “Reply” to respond directly to ${escape(name)}.</p>
        </div>
      </div>`,
    });
  } catch (e) {
    console.error("SMTP send failed", e);
    return { status: "error", message: `Something went wrong. Please email me directly at ${site.email}.`, values };
  }

  // Confirmation to the visitor (set CONTACT_AUTO_REPLY=false to disable). Failure here shouldn't fail the form.
  if (process.env.CONTACT_AUTO_REPLY !== "false") {
    await transporter
      .sendMail({
        from,
        to: { name, address: email },
        replyTo: to,
        subject: "Thanks for reaching out | Juliet Ogbonna",
        text: `Hi ${name},

Thank you for your message about "${subject}". I've received it and will get back to you shortly.

Juliet Ogbonna
Frontend Developer & UI Designer`,
        html: `<div style="font-family:Arial,sans-serif;max-width:520px;margin:auto"><h2 style="color:#ff6a00">Hi ${escape(name)},</h2><p>Thank you for your message about “${escape(subject)}”. I’ve received it and will get back to you shortly.</p><p>Juliet Ogbonna<br/><span style="color:#888">Frontend Developer & UI Designer</span></p></div>`,
      })
      .catch((e) => console.error("Auto-reply failed", e));
  }

  return { status: "success", message: `Thanks ${name.split(" ")[0]}! Your message is on its way and I'll reply soon.` };
}
