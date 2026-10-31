import type { Metadata } from "next";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Juliet Ogbonna for frontend development, UI implementation and website projects.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: FiMail },
  { label: "Phone", value: site.phonesDisplay[0], href: `tel:${site.phones[0]}`, Icon: FiPhone },
  { label: "Alt. Phone", value: site.phonesDisplay[1], href: `tel:${site.phones[1]}`, Icon: FiPhone },
  { label: "Location", value: `${site.location} · Remote worldwide`, href: null, Icon: FiMapPin },
];

const socials = [
  { label: "LinkedIn", href: site.socials.linkedin, Icon: FaLinkedinIn },
  { label: "GitHub", href: site.socials.github, Icon: FaGithub },
  { label: "Facebook", href: site.socials.facebook, Icon: FaFacebookF },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 size-[30rem] rounded-full bg-brand/15 blur-3xl" />
      <div className="container-x relative py-20">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s create something <span className="text-gradient">remarkable</span>
            </>
          }
          intro="Have a project, a role or an idea? Send a message and it lands straight in my inbox. I usually reply within 24 hours."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <Reveal>
              <div className="flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-4 text-sm">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
                </span>
                Open to full-time, contract & freelance opportunities
              </div>
            </Reveal>
            {channels.map(({ label, value, href, Icon }, i) => {
              const inner = (
                <>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-lg text-brand sm:size-12 transition group-hover:bg-brand group-hover:text-white">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-widest text-muted">{label}</span>
                    <span className="block text-sm font-semibold [overflow-wrap:anywhere] sm:text-base">{value}</span>
                  </span>
                  {href && <FiArrowUpRight className="ml-auto hidden shrink-0 text-muted min-[400px]:block transition group-hover:text-brand" />}
                </>
              );
              const cls = "group flex items-center gap-3 rounded-2xl border border-line bg-surface p-3.5 transition sm:gap-4 sm:p-4 hover:border-brand/60";
              return (
                <Reveal key={label} delay={i * 70}>
                  {href ? (
                    <a href={href} className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
            <Reveal delay={300}>
              <div className="rounded-2xl border border-line bg-surface p-5">
                <p className="text-xs uppercase tracking-widest text-muted">Find me online</p>
                <ul className="mt-4 grid grid-cols-3 gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 rounded-xl border border-line py-4 text-xs font-medium transition hover:-translate-y-1 hover:border-brand hover:text-brand"
                      >
                        <Icon className="size-5" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
