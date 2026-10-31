"use client";

import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const apply = () => {
      const dark = root.classList.toggle("dark");
      try {
        localStorage.setItem("theme", dark ? "dark" : "light");
      } catch {}
    };
    // Smooth cross-fade where the View Transitions API is available.
    if (document.startViewTransition) document.startViewTransition(apply);
    else apply();
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className="relative grid size-10 place-items-center overflow-hidden rounded-full border border-line bg-surface text-fg transition hover:border-brand hover:text-brand"
    >
      <FiSun className="absolute size-[18px] rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
      <FiMoon className="absolute size-[18px] rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
    </button>
  );
}
