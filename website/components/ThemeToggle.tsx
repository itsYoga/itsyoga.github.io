"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Applied in <head> before the first paint (see app/layout.tsx), so the page
 * never flashes the other appearance. A saved choice wins; without one the
 * system's appearance is followed.
 */
export const THEME_SCRIPT = `try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}`;

const isDark = () => document.documentElement.classList.contains("dark");

// The class on <html> is the source of truth; re-read it when the system
// appearance changes (only honoured while no choice is saved) or another
// toggle flips it.
function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const followSystem = () => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("theme");
    } catch {}
    if (!saved) document.documentElement.classList.toggle("dark", media.matches);
    onChange();
  };
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  media.addEventListener("change", followSystem);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", followSystem);
  };
}

export default function ThemeToggle() {
  // null on the server, where the visitor's appearance is unknown.
  const dark = useSyncExternalStore(subscribe, isDark, () => null);
  const label = dark ? "Switch to light appearance" : "Switch to dark appearance";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        const next = !isDark();
        document.documentElement.classList.toggle("dark", next);
        try {
          localStorage.setItem("theme", next ? "dark" : "light");
        } catch {
          // Storage blocked: the choice lasts for this page, which is still right.
        }
      }}
      className="grid place-items-center w-7 h-7 rounded-[5px] text-foreground/75 hover:bg-accent transition-colors"
    >
      {dark ? <Sun className="w-[15px] h-[15px]" /> : <Moon className="w-[14px] h-[14px]" />}
    </button>
  );
}
