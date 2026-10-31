import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { navLinks, services, site, skills } from "@/lib/data";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="no-print relative mt-24 overflow-hidden border-t border-line bg-surface">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />

      {/* Big CTA */}
      <div className="container-x relative py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Have a project in mind?</p>
        <Link
          href="/contact"
          className="group mt-4 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[clamp(2rem,9vw,3.75rem)] leading-tight font-semibold tracking-tight"
        >
          <span>
            Let&apos;s build it <span className="text-gradient">together</span>
          </span>
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform duration-500 group-hover:rotate-45 sm:size-16">
            <FiArrowUpRight className="size-6 sm:size-8" />
          </span>
        </Link>
      </div>

      <div className="container-x relative grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line py-14 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <Link href="/" className="text-xl font-bold">
            Juliet<span className="text-brand">.dev</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Frontend developer & UI designer crafting fast, responsive, beautiful web experiences. Based in {site.location}, working with teams worldwide.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <FooterCol title="Navigation">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-brand">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="/cv" target="_blank" rel="noopener noreferrer" className="hover:text-brand">
              Résumé / CV
            </a>
          </li>
        </FooterCol>

        <FooterCol title="Services">
          {services.map((s) => (
            <li key={s.title}>
              <Link href="/services" className="hover:text-brand">
                {s.title}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Tech Stack">
          {skills.slice(0, 8).map((s) => (
            <li key={s.key}>
              <Link href="/skills" className="hover:text-brand">
                {s.name}
              </Link>
            </li>
          ))}
        </FooterCol>
      </div>

      <div className="container-x flex flex-col items-center justify-between gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row">
        <p className="text-center">© 2026 {site.name}. All rights reserved.</p>
        <p className="text-center">
          Designed & built with <span className="text-brand">♥</span> using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-muted">{children}</ul>
    </div>
  );
}
