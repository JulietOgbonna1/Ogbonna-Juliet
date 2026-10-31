import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiEye } from "react-icons/fi";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SkillIcon } from "@/components/SkillIcon";
import { SkillMarquee } from "@/components/SkillMarquee";
import { SocialLinks } from "@/components/SocialLinks";
import { Typewriter } from "@/components/Typewriter";
import { projects, services, type SkillKey } from "@/lib/data";
import portrait from "@/public/images/juliet.jpg";


const orbit: SkillKey[] = ["react", "next", "tailwind", "js", "node", "mongodb"];
const roles = ["Frontend Developer", "UI/UX Enthusiast", "Next.js Developer", "Problem Solver"];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
        <div aria-hidden className="pointer-events-none absolute -left-40 top-20 size-[28rem] rounded-full bg-brand/15 blur-3xl" />

        <div className="container-x relative grid grid-cols-1 min-h-[calc(100dvh-72px)] items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              Available for remote & on-site roles
            </p>
            <p className="mt-7 text-lg font-medium">Hello, It&apos;s Me</p>
            <h1 className="mt-2 text-[clamp(2.5rem,11vw,4.5rem)] leading-[1.05] font-bold tracking-tight">
              <span className="text-gradient">Juliet Ogbonna</span>
            </h1>
            <p className="mt-4 text-2xl font-semibold sm:text-3xl">
              And I&apos;m a <br className="sm:hidden" />
              <Typewriter words={roles} />
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">
              Frontend developer specialising in React, Next.js and modern JavaScript. I build fast, responsive and
              user-focused digital products, with a background in team delivery and mentoring developers at Verbum Networks.
            </p>

            <div className="mt-9 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap min-[400px]:gap-4">
              <a
                href="/cv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-[0_0_30px_-6px_var(--glow)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                View My CV <FiEye />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-fg/20 px-7 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                See My Work <FiArrowUpRight />
              </Link>
            </div>
            <SocialLinks className="mt-9" />
          </div>

          {/* Portrait with rotating ring + orbiting tech */}
          <div className="relative mx-auto aspect-square w-[calc(100%-3rem)] max-w-[460px] sm:w-[calc(100%-4rem)]">
            <div aria-hidden className="absolute inset-[6%] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#ff6a00,transparent_35%,#ffb36b_55%,transparent_75%,#ff6a00)] blur-[2px]" />
            <div aria-hidden className="absolute inset-[6%] animate-pulse-glow rounded-full" />
            <div className="absolute inset-[8%] overflow-hidden rounded-full border-4 border-bg bg-surface-2">
              <Image
                src={portrait}
                alt="Portrait of Juliet Ogbonna"
                fill
                preload
                placeholder="blur"
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 460px, 85vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <div aria-hidden className="absolute inset-0 animate-orbit">
              {orbit.map((k, i) => {
                const angle = (i / orbit.length) * 2 * Math.PI;
                return (
                  <span
                    key={k}
                    className="absolute grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-line bg-surface text-lg sm:size-14 sm:rounded-2xl sm:text-xl shadow-[0_0_24px_-6px_var(--glow)]"
                    style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%` }}
                  >
                    <span className="animate-[orbit_26s_linear_infinite_reverse]">
                      <SkillIcon k={k} brand />
                    </span>
                  </span>
                );
              })}
            </div>
            <div className="absolute -bottom-3 -left-2 z-10 animate-float rounded-2xl border border-line bg-surface/90 px-3 py-2 shadow-xl backdrop-blur sm:-left-4 sm:px-4 sm:py-3">
              <p className="text-xl font-bold text-brand sm:text-2xl">2+</p>
              <p className="text-[11px] text-muted sm:text-xs">Years building for the web</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <section aria-label="Tech stack" className="border-y border-line bg-surface/40 py-10">
        <SkillMarquee />
      </section>

      {/* ---------- ABOUT TEASER ---------- */}
      <section className="container-x py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="glow rounded-3xl p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src={portrait} alt="Juliet Ogbonna" fill placeholder="blur" sizes="(min-width: 1024px) 380px, 90vw" className="object-cover" />
                </div>
              </div>
              <div className="absolute -right-2 top-8 rounded-2xl bg-brand sm:-right-4 px-4 py-3 text-white shadow-xl">
                <p className="text-sm font-semibold">Team Player</p>
                <p className="text-xs opacity-90">& Mentor</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="About Me"
              title={
                <>
                  Transforming ideas into <span className="text-brand">scalable frontend</span> solutions
                </>
              }
              intro="I combine creativity with code to build visually engaging, responsive interfaces. My background in Human Anatomy trained me to think analytically and obsess over detail, the same discipline I bring to every pixel and every line of code."
            />
            <Reveal delay={120}>
              <dl className="mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 sm:gap-4">
                {[
                  ["1 yr", "Professional internship"],
                  ["11+", "Technologies"],
                  ["Team", "Delivery & mentoring"],
                ].map(([n, l]) => (
                  <div key={l} className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 min-[480px]:block">
                    <dt className="text-2xl font-bold text-brand">{n}</dt>
                    <dd className="text-xs text-muted min-[480px]:mt-1">{l}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand hover:underline">
                More about me <FiArrowUpRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section className="container-x py-12">
        <SectionHeading
          align="center"
          eyebrow="Selected Work"
          title={
            <>
              Featured <span className="text-brand">Projects</span>
            </>
          }
          intro="Real products, live on the web. Click any project to explore it."
        />
        <div className="mt-14 space-y-10">
          {projects
            .filter((p) => p.url)
            .map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-fg/20 px-7 py-3.5 font-semibold transition hover:border-brand hover:text-brand">
            View all projects <FiArrowUpRight />
          </Link>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="container-x py-24">
        <SectionHeading eyebrow="What I Do" title={<>Services built for <span className="text-brand">impact</span></>} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            return (
              <Reveal key={s.title} delay={i * 90} className="h-full">
                <article className="group h-full rounded-3xl border border-line bg-surface p-7 transition duration-500 hover:-translate-y-2 hover:border-brand/60 hover:shadow-[0_0_40px_-12px_var(--glow)]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand/10 text-xl text-brand transition group-hover:bg-brand group-hover:text-white">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h3 className="mt-6 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

    </>
  );
}
