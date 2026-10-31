"use client";

import { useActionState } from "react";
import { FiCheck, FiSend } from "react-icons/fi";
import { sendMessage, type ContactState } from "@/app/(site)/contact/actions";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, initial);

  if (state.status === "success") {
    return (
      <div role="status" className="grid min-h-[420px] place-items-center rounded-3xl border border-line bg-surface p-10 text-center">
        <div>
          <span className="mx-auto grid size-16 animate-pulse-glow place-items-center rounded-full bg-brand text-white">
            <FiCheck className="size-8" />
          </span>
          <h3 className="mt-6 text-2xl font-semibold">Message sent!</h3>
          <p className="mt-2 text-muted">{state.message}</p>
        </div>
      </div>
    );
  }

  const v = state.values ?? {};
  const err = state.errors ?? {};

  return (
    <form action={action} noValidate className="glow-border space-y-5 rounded-3xl p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" defaultValue={v.name} error={err.name} required />
        <Field label="Email address" name="email" type="email" autoComplete="email" defaultValue={v.email} error={err.email} required />
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" defaultValue={v.phone} />
        <Field label="Subject" name="subject" defaultValue={v.subject} error={err.subject} required />
      </div>
      <Field label="Your message" name="message" textarea defaultValue={v.message} error={err.message} required />

      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-[0_0_30px_-6px_var(--glow)] transition hover:bg-brand-deep disabled:opacity-70 sm:w-auto"
      >
        {pending ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Sending…
          </>
        ) : (
          <>
            Send Message <FiSend />
          </>
        )}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  defaultValue?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({ label, name, type = "text", textarea, defaultValue, error, required, autoComplete }: FieldProps) {
  const id = `f-${name}`;
  const cls = `w-full rounded-xl border bg-surface-2/60 px-4 py-3.5 text-sm outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-4 focus:ring-brand/15 ${
    error ? "border-red-500/70" : "border-line"
  }`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      {textarea ? (
        <textarea id={id} name={name} rows={6} defaultValue={defaultValue} required={required} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} className={`${cls} resize-y`} />
      ) : (
        <input id={id} name={name} type={type} defaultValue={defaultValue} required={required} autoComplete={autoComplete} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} className={cls} />
      )}
      {error && (
        <p id={`${id}-e`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
