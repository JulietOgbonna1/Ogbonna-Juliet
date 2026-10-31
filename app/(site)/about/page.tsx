import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiBookOpen, FiBriefcase, FiEye } from "react-icons/fi";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { education, experience, site } from "@/lib/data";
import portrait from "@/public/images/juliet.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Juliet Ogbonna, a frontend developer from Enugu, Nigeria. Experience at Verbum Networks, B.Sc. Human Anatomy (UNN) and a passion for clean, responsive interfaces.",
  alternates: { canonical: "/about" },
};

const facts = [
  ["Name", site.name],
  ["Location", site.location],
  ["Experience", "Frontend Internship · 1 yr"],
  ["Email", site.email],
];

export default function AboutPage() {
  return (
    <>
      <section className="container-x py-20">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="mx-auto max-w-sm lg:sticky lg:top-28">
              <div className="glow animate-pulse-glow rounded-3xl p-2.5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src={portrait} alt="Juliet Ogbonna" fill preload placeholder="blur" sizes="(min-width: 1024px) 380px, 90vw" className="object-cover" />
                </div>
              </div>
              <SocialLinks className="mt-6 justify-center lg:justify-start" />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              as="h1"
              eyebrow="About Me"
              title="Transforming ideas into scalable frontend solutions"
            />
            <Reveal delay={100}>
              <p className="mt-3 font-medium text-brand">Frontend Developer & UI Designer</p>
              <div className="mt-6 space-y-4 leading-relaxed text-muted">
                <p>
                  Hey there! I&apos;m Juliet Ogbonna, a frontend developer with a strong foundation in HTML, CSS and JavaScript
                  and growing depth in React, Next.js, Node.js and Express. I love bringing websites to life with clean
                  code and creative flair.
                </p>
                <p>
                  I&apos;m passionate about building responsive, user-friendly, eye-catching interfaces and I continuously sharpen
                  my skills to stay aligned with modern web standards. At Verbum Networks I shipped real projects inside a team
                  and helped mentor students on their own journey into tech.
                </p>
                <p>I&apos;m all about learning, building cool stuff, and having fun while at it.</p>
              </div>

              <dl className="mt-8 grid gap-x-8 gap-y-4 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-2">
                {facts.map(([k, v]) => (
                  <div key={k} className="text-sm">
                    <dt className="inline font-semibold text-brand">{k}: </dt>
                    <dd className="inline break-all">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/cv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-[0_0_30px_-6px_var(--glow)] transition hover:bg-brand-deep">
                  View CV <FiEye />
                </a>
                <a href={`tel:${site.phones[0]}`} className="inline-flex items-center rounded-full border border-fg/20 px-7 py-3.5 font-semibold transition hover:border-brand hover:text-brand">
                  Call Me
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <Timeline icon={<FiBriefcase />} title="Experience">
            {experience.map((e) => (
              <TimelineItem key={e.role} title={e.role} org={e.org} period={e.period}>
                <p>{e.summary}</p>
                <ul className="mt-3 space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </TimelineItem>
            ))}
          </Timeline>

          <Timeline icon={<FiBookOpen />} title="Education">
            {education.map((e) => (
              <TimelineItem key={e.title} title={e.title} org={e.org} period={e.period}>
                <p>{e.body}</p>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
        <Reveal className="mt-16 text-center">
          <Link href="/skills" className="font-semibold text-brand hover:underline">
            Explore my skills →
          </Link>
        </Reveal>
      </section>
    </>
  );
}

function Timeline({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div>
      <Reveal>
        <h2 className="flex items-center gap-3 text-2xl font-semibold">
          <span className="grid size-11 place-items-center rounded-xl bg-brand text-white">{icon}</span>
          {title}
        </h2>
      </Reveal>
      <ol className="relative mt-8 space-y-8 border-l border-brand/30 pl-8">{children}</ol>
    </div>
  );
}

function TimelineItem({ title, org, period, children }: { title: string; org: string; period: string; children: React.ReactNode }) {
  return (
    <Reveal as="li" className="relative">
      <span className="absolute -left-[39px] top-1.5 size-4 animate-pulse-glow rounded-full border-4 border-bg bg-brand" />
      <div className="rounded-2xl border border-line bg-surface p-6 transition hover:border-brand/50">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand">{period}</p>
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm font-medium text-muted">{org}</p>
        <div className="mt-4 text-sm leading-relaxed text-muted">{children}</div>
      </div>
    </Reveal>
  );
}
