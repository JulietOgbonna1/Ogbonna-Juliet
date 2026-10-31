import Image from "next/image";
import { FiArrowUpRight, FiUsers } from "react-icons/fi";
import type { Project } from "@/lib/data";
import { Reveal } from "./Reveal";

function Screen({ slug, device, sizes }: { slug: string; device: "laptop" | "tablet" | "mobile"; sizes: string }) {
  return (
    <Image
      src={`/projects/${slug}/${device}.jpg`}
      alt=""
      fill
      sizes={sizes}
      quality={90}
      className="object-cover object-top"
    />
  );
}

function ComingSoon() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-surface-2 to-surface">
      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand sm:text-xs">Preview coming soon</span>
    </div>
  );
}

/** Laptop + tablet + phone mockups composed together. */
export function DeviceShowcase({ project }: { project: Project }) {
  const live = project.url !== null;
  return (
    <div className="relative mx-auto aspect-[16/11] w-full max-w-[640px]" aria-hidden>
      {/* Laptop */}
      <div className="absolute inset-x-[6%] top-[4%] transition-transform duration-700 group-hover:-translate-y-2">
        <div className="rounded-t-[14px] border border-neutral-700 bg-neutral-900 p-[1.6%] shadow-2xl shadow-black/40">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-neutral-800">
            {live ? <Screen slug={project.slug} device="laptop" sizes="(min-width: 1024px) 520px, 85vw" /> : <ComingSoon />}
          </div>
        </div>
        <div className="relative mx-[-7%] h-[10px] rounded-b-[14px] bg-gradient-to-b from-neutral-400 to-neutral-600 sm:h-[14px]">
          <div className="absolute left-1/2 top-0 h-[40%] w-[16%] -translate-x-1/2 rounded-b-md bg-neutral-500" />
        </div>
      </div>

      {/* Tablet */}
      <div className="absolute bottom-[2%] left-0 w-[23%] transition-transform duration-700 group-hover:-translate-x-1 group-hover:-translate-y-3">
        <div className="rounded-[12px] border border-neutral-700 bg-neutral-900 p-[5%] shadow-2xl shadow-black/50">
          <div className="relative aspect-[820/1180] overflow-hidden rounded-[6px] bg-neutral-800">
            {live ? <Screen slug={project.slug} device="tablet" sizes="160px" /> : <ComingSoon />}
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-0 right-[2%] w-[15%] transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-4">
        <div className="rounded-[16px] border border-neutral-700 bg-neutral-900 p-[6%] shadow-2xl shadow-black/50">
          <div className="relative aspect-[390/844] overflow-hidden rounded-[11px] bg-neutral-800">
            {live ? <Screen slug={project.slug} device="mobile" sizes="110px" /> : <ComingSoon />}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const body = (
    <>
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand/20 blur-3xl transition-opacity duration-700 group-hover:opacity-100 md:opacity-40" />
      <div className="relative grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[1.25fr_1fr]">
        <div className={index % 2 ? "lg:order-2" : ""}>
          <DeviceShowcase project={project} />
        </div>
        <div className="relative px-1 pb-1 sm:p-0">
          {project.badge && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <FiUsers /> {project.badge}
            </p>
          )}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight transition-colors group-hover:text-brand sm:text-3xl">{project.title}</h3>
          <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li key={t} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium">
                {t}
              </li>
            ))}
          </ul>
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">
            {project.url ? "View live project" : "Launching soon"}
            <span className="grid size-9 place-items-center rounded-full bg-brand text-white transition-transform duration-500 group-hover:rotate-45">
              <FiArrowUpRight />
            </span>
          </span>
        </div>
      </div>
    </>
  );

  const cls =
    "group relative block overflow-hidden rounded-3xl border border-line bg-surface p-4 transition-all duration-500 hover:border-brand/60 hover:shadow-[0_0_60px_-20px_var(--glow)] sm:p-8 lg:p-10";

  return (
    <Reveal>
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live site in a new tab`} className={cls}>
          {body}
        </a>
      ) : (
        <div className={cls}>{body}</div>
      )}
    </Reveal>
  );
}
