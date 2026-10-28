"use client";

import { useEffect, useState } from "react";
import { site, socials } from "@/data/site";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

/**
 * Two quiet rewards for the curious: a note in the console for whoever opens
 * the dev tools, and the Konami code. Neither changes the page for anyone
 * who isn't looking for them.
 */
export default function EasterEggs() {
  const [toast, setToast] = useState(false);

  useEffect(() => {
    console.log(
      "%cHi there 👋%c\nIf you're reading the console, we'd probably get along.\nSource: %s\nSay hello: %s\nTry ⌘K, the ` key, or a certain famous cheat code.",
      "font-size:16px;font-weight:700",
      "font-size:12px",
      `${socials.github}/itsyoga.github.io`,
      site.email
    );

    let progress = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
      if (progress === KONAMI.length) {
        progress = 0;
        setToast(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(false), 5000);
    return () => clearTimeout(id);
  }, [toast]);

  if (!toast) return null;

  return (
    <div
      role="status"
      className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-2xl border border-border bg-popover/95 px-5 py-3 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      <p className="text-sm font-semibold">↑↑↓↓←→←→BA — 30 extra lives granted.</p>
      <p className="text-xs text-muted-foreground mt-0.5">
        Spend them in the terminal: press <kbd className="font-mono">`</kbd> and type <span className="font-mono">sudo hire-me</span>.
      </p>
    </div>
  );
}
