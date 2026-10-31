import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
import { services, workflow } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, UI/UX design to code, website maintenance and SEO & performance optimisation by Juliet Ogbonna.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-x py-20">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="My Services"
          title={
            <>
              Crafted for speed, <span className="text-gradient">built to convert</span>
            </>
          }
          intro="From a single landing page to a full web application, I deliver interfaces that look premium, load fast and work beautifully on every screen."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 120} className="h-full">
              <article className="glow-border group h-full rounded-3xl p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand text-2xl text-white shadow-[0_0_30px_-6px_var(--glow)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <span className="text-5xl font-bold text-fg/5">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-8 text-2xl font-semibold">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <SectionHeading eyebrow="Process" title="How I work" />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 100}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-7">
                <span className="text-sm font-bold text-brand">{p.step}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.body}</p>
                <span aria-hidden className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-brand to-transparent" />
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-14 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-[0_0_30px_-6px_var(--glow)] transition hover:bg-brand-deep">
            Start a project <FiArrowUpRight />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
