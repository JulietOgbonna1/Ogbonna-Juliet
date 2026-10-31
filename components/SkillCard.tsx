import type { skills } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SkillIcon } from "./SkillIcon";

type Skill = (typeof skills)[number];

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <Reveal delay={(index % 4) * 90} className="h-full">
      <article className="glow-border group h-full rounded-2xl p-4 transition-transform sm:p-5 duration-500 hover:-translate-y-1.5">
        <div className="flex items-start justify-between">
          <span className="grid size-10 place-items-center rounded-xl bg-surface-2 text-xl sm:size-12 sm:text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <SkillIcon k={skill.key} brand />
          </span>
          <span className="text-sm font-bold text-brand tabular-nums">{skill.level}%</span>
        </div>
        <h3 className="mt-3 text-sm font-semibold sm:mt-4 sm:text-base">{skill.name}</h3>
        <p className="mt-1 text-xs text-muted">{skill.note}</p>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-surface-2">
          <div
            className="skill-bar h-full rounded-full bg-gradient-to-r from-brand to-brand-2"
            style={{ "--level": skill.level / 100 } as React.CSSProperties}
          />
        </div>
      </article>
    </Reveal>
  );
}
