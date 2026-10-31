import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { SkillMarquee } from "@/components/SkillMarquee";
import { skillGroups, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Juliet Ogbonna's technical expertise: HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, Express.js, Tailwind CSS, MongoDB, Vercel, Git & GitHub.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <section className="container-x py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              as="h1"
              eyebrow="My Skills"
              title="Technical expertise & core skill set"
              intro="I build responsive, scalable, high-performing web applications with modern frontend and full-stack JavaScript tools. My focus is clean architecture, reusable components, performance optimisation and seamless user experiences."
            />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {skills.map((s, i) => (
              <SkillCard key={s.key} skill={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Tech stack" className="border-y border-line bg-surface/40 py-10">
        <SkillMarquee />
      </section>

      <section className="container-x py-24">
        <SectionHeading align="center" eyebrow="Toolbox" title="How I bring ideas to life" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90} className="h-full">
              <article className="h-full rounded-3xl border border-line bg-gradient-to-b from-surface to-surface-2 p-7 transition hover:border-brand/60">
                <h3 className="font-semibold text-brand">{g.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
