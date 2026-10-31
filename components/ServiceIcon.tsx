import { FiCode, FiLayout, FiTool, FiZap } from "react-icons/fi";
import type { services } from "@/lib/data";

const icons = { code: FiCode, layout: FiLayout, tool: FiTool, zap: FiZap } as const;

export function ServiceIcon({ name }: { name: (typeof services)[number]["icon"] }) {
  const Icon = icons[name];
  return <Icon aria-hidden />;
}
