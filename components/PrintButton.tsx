"use client";

import { FiPrinter } from "react-icons/fi";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_22px_-4px_var(--glow)] transition hover:bg-brand-deep"
    >
      <FiPrinter /> <span className="hidden min-[400px]:inline">Print / Save as PDF</span><span className="min-[400px]:hidden">Save PDF</span>
    </button>
  );
}
