"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  // Remember which route the drawer was opened on: navigating closes it automatically
  // (routes stay mounted with Cache Components, so we can't rely on unmounting).
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="group flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-brand text-sm font-extrabold text-white shadow-[0_0_20px_-2px_var(--glow)] transition group-hover:rotate-6">
            JO
          </span>
          <span>
            Juliet<span className="text-brand">.dev</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-line bg-surface/60 p-1 backdrop-blur lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`relative block rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive(l.href) ? "bg-brand text-white shadow-[0_0_18px_-4px_var(--glow)]" : "text-muted hover:text-fg"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_22px_-4px_var(--glow)] transition hover:bg-brand-deep sm:inline-flex"
          >
            Hire Me <FiArrowUpRight />
          </Link>
          <button
            type="button"
            onClick={() => setOpenOn(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-line bg-surface lg:hidden"
          >
            {open ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] bg-bg/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="container-x flex h-full flex-col gap-2 overflow-y-auto pt-8 pb-10">
          {navLinks.map((l, i) => (
            <li
              key={l.href}
              className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}`}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`flex items-center justify-between border-b border-line py-4 text-xl font-semibold sm:text-2xl ${
                  isActive(l.href) ? "text-brand" : ""
                }`}
              >
                {l.label}
                <FiArrowUpRight className="text-brand" />
              </Link>
            </li>
          ))}
          <li className="pt-6">
            <Link href="/contact" className="block rounded-full bg-brand py-4 text-center font-semibold text-white">
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
