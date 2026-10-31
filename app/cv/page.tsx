import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiGithub, FiGlobe, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { PrintButton } from "@/components/PrintButton";
import { education, site } from "@/lib/data";
import portrait from "@/public/images/juliet.jpg";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Curriculum vitae of Juliet Ogbonna, Frontend Developer & UI Designer.",
  alternates: { canonical: "/cv" },
};

const competencies = [
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { group: "Backend & Data", items: ["Node.js", "Express.js", "REST APIs", "MongoDB"] },
  { group: "Delivery", items: ["Git & GitHub", "Vercel", "Figma-to-Code", "Responsive Design", "SEO & Performance"] },
];

const leadership = [
  "Mentored and supported students at Verbum Networks, translating complex frontend concepts into clear, practical lessons.",
  "Contributed to code reviews and technical discussions, raising code quality and team standards.",
  "Collaborated within a multi-developer team to deliver the Mater Christi Centre website to production.",
  "Owns work end to end, from interpreting designs to deployment, with a detail-first, analytical mindset.",
];

export default function CvPage() {
  return (
    <div className="min-h-dvh bg-neutral-200 py-8 print:bg-white print:py-0 dark:bg-neutral-950">
      <div className="no-print container-x mb-6 flex max-w-[210mm] items-center justify-between gap-4 sm:px-0">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-fg hover:text-brand">
          <FiArrowLeft /> <span className="hidden min-[400px]:inline">Back to portfolio</span><span className="min-[400px]:hidden">Back</span>
        </Link>
        <PrintButton />
      </div>

      <article className="mx-auto w-full max-w-[210mm] overflow-hidden bg-white text-neutral-800 shadow-2xl print:shadow-none">
        {/* Header */}
        <header className="relative bg-[#0b0b0b] px-8 py-9 text-white sm:px-12 print:[print-color-adjust:exact]">
          <div aria-hidden className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_30%,rgba(255,106,0,0.35),transparent_60%)]" />
          <div className="relative flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff6a00]">Curriculum Vitae</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight">{site.name}</h1>
              <p className="mt-1 text-lg font-medium text-neutral-300">Frontend Developer · UI Engineer · Mentor</p>
            </div>
            <div className="relative size-28 shrink-0 overflow-hidden rounded-full ring-4 ring-[#ff6a00]">
              <Image src={portrait} alt="Juliet Ogbonna" fill sizes="112px" placeholder="blur" className="object-cover object-top" />
            </div>
          </div>
          <ul className="relative mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-300">
            <li className="flex items-center gap-2"><FiMail className="text-[#ff6a00]" /> {site.email}</li>
            <li className="flex items-center gap-2"><FiPhone className="text-[#ff6a00]" /> {site.phonesDisplay.join(" · ")}</li>
            <li className="flex items-center gap-2"><FiMapPin className="text-[#ff6a00]" /> {site.location}</li>
            <li className="flex items-center gap-2"><FiLinkedin className="text-[#ff6a00]" /> linkedin.com/in/juliet-ogbonna</li>
            <li className="flex items-center gap-2"><FiGithub className="text-[#ff6a00]" /> github.com/JulietOgbonna</li>
          </ul>
        </header>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-[1.55fr_1fr]">
          {/* Main column */}
          <div className="space-y-8 px-8 py-9 sm:px-12">
            <CvSection title="Executive Profile">
              <p className="leading-relaxed">
                Results-driven frontend developer who leads from the keyboard, combining technical execution with the ability to
                teach, guide and lift the people around her. Proven in team-based, real-world delivery at Verbum Networks, where she
                built production interfaces, contributed to code reviews and mentored students into confident developers.
                Scientific training in Human Anatomy brings a rigorous, analytical, detail-first approach to every product. Driven to
                ship fast, accessible, high-performance experiences that move business metrics.
              </p>
            </CvSection>

            <CvSection title="Professional Experience">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-neutral-900">Frontend Developer (Internship)</h3>
                  <span className="text-xs font-semibold text-[#e14d00]">Aug 2024 to Aug 2025</span>
                </div>
                <p className="text-sm font-medium text-neutral-500">Verbum Networks, Enugu</p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  <Bullet>Built and styled responsive, production-grade web pages with HTML, CSS and JavaScript.</Bullet>
                  <Bullet>Delivered landing pages and UI components from design specifications with pixel-level accuracy.</Bullet>
                  <Bullet>Enforced semantic HTML and modern CSS best practices; diagnosed and resolved layout issues.</Bullet>
                  <Bullet>Participated in code reviews and team discussions to refine and optimise the codebase.</Bullet>
                  <Bullet>Strengthened team workflow with Git-based version control and VS Code tooling.</Bullet>
                </ul>
              </div>
            </CvSection>

            <CvSection title="Leadership & Impact">
              <ul className="space-y-1.5 text-sm">
                {leadership.map((l) => (
                  <Bullet key={l}>{l}</Bullet>
                ))}
              </ul>
            </CvSection>

            <CvSection title="Selected Projects">
              <div className="space-y-3 text-sm">
                <Project title="Mater Christi Centre" tag="Team collaboration · Verbum Networks" url="materchristicentre.com">
                  Organisation website for a human development and religious formation centre, delivered as part of a development team.
                </Project>
                <Project title="Nova Hairs" tag="E-commerce" url="nova-hairs.vercel.app">
                  Premium storefront for a Lagos-based wig brand with product listings, services, reviews and WhatsApp ordering.
                </Project>
              </div>
            </CvSection>
          </div>

          {/* Side column */}
          <aside className="space-y-8 bg-[#fff6ef] px-8 py-9 print:[print-color-adjust:exact]">
            <CvSection title="Core Competencies">
              <div className="space-y-4">
                {competencies.map((c) => (
                  <div key={c.group}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{c.group}</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {c.items.map((i) => (
                        <li key={i} className="rounded-md border border-[#ff6a00]/30 bg-white px-2 py-1 text-xs font-medium">
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CvSection>

            <CvSection title="Education">
              <div className="space-y-4 text-sm">
                {education.map((e) => (
                  <div key={e.title}>
                    <h3 className="font-semibold text-neutral-900">{e.title}</h3>
                    <p className="text-neutral-600">{e.org}</p>
                    <p className="text-xs font-semibold text-[#e14d00]">{e.period}</p>
                  </div>
                ))}
              </div>
            </CvSection>

            <CvSection title="Strengths">
              <ul className="space-y-1.5 text-sm">
                {["Mentoring & knowledge transfer", "Clear, confident communication", "Analytical problem-solving", "Meticulous attention to detail", "Rapid self-directed learning"].map((s) => (
                  <Bullet key={s}>{s}</Bullet>
                ))}
              </ul>
            </CvSection>

            <CvSection title="Portfolio">
              <p className="flex items-center gap-2 text-sm"><FiGlobe className="text-[#ff6a00]" /> {site.url.replace(/^https?:\/\//, "")}</p>
            </CvSection>
          </aside>
        </div>
      </article>
    </div>
  );
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="break-inside-avoid">
      <h2 className="mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-neutral-900">
        <span className="h-0.5 w-6 bg-[#ff6a00]" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#ff6a00]" />
      <span>{children}</span>
    </li>
  );
}

function Project({ title, tag, url, children }: { title: string; tag: string; url: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-semibold text-neutral-900">
        {title} <span className="font-normal text-neutral-500">· {tag}</span>
      </p>
      <p className="text-neutral-600">{children}</p>
      <p className="text-xs text-[#e14d00]">{url}</p>
    </div>
  );
}
