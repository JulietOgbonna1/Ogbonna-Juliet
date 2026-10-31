import { skills } from "@/lib/data";
import { SkillIcon } from "./SkillIcon";

function Row({ reverse = false }: { reverse?: boolean }) {
  const list = reverse ? [...skills].reverse() : skills;
  return (
    <div className="marquee flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <ul className={`marquee-track flex w-max shrink-0 gap-4 pr-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...list, ...list].map((s, i) => (
          <li
            key={`${s.key}-${i}`}
            aria-hidden={i >= list.length}
            className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-3.5 text-sm font-semibold whitespace-nowrap transition hover:border-brand hover:shadow-[0_0_24px_-6px_var(--glow)]"
          >
            <SkillIcon k={s.key} brand className="size-5" />
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkillMarquee() {
  return (
    <div className="space-y-4" aria-label="Technologies I work with">
      <Row />
      <Row reverse />
    </div>
  );
}
