import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import type { SkillKey } from "@/lib/data";

export const skillIcons: Record<SkillKey, { Icon: IconType; color: string }> = {
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss, color: "#663399" },
  js: { Icon: SiJavascript, color: "#F7DF1E" },
  react: { Icon: SiReact, color: "#61DAFB" },
  next: { Icon: SiNextdotjs, color: "currentColor" },
  node: { Icon: SiNodedotjs, color: "#5FA04E" },
  express: { Icon: SiExpress, color: "currentColor" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  vercel: { Icon: SiVercel, color: "currentColor" },
  git: { Icon: SiGit, color: "#F05032" },
};

export function SkillIcon({ k, className, brand = false }: { k: SkillKey; className?: string; brand?: boolean }) {
  const { Icon, color } = skillIcons[k];
  return <Icon aria-hidden className={className} style={brand ? { color } : undefined} />;
}
