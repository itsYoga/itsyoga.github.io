"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Copy, FileText, FolderGit2, Search, SquareTerminal, AppWindow } from "lucide-react";
import { projects } from "@/data/projects";
import { pages, site, socials } from "@/data/site";

/** Other components open the palette by dispatching this event. */
export const OPEN_PALETTE = "open-command-palette";

type Item = {
  id: string;
  label: string;
  hint: string;
  group: "Pages" | "Projects" | "Actions";
  icon: typeof Search;
  keywords?: string;
  run: () => void | Promise<void>;
};

const isMac = () => typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

/**
 * Spotlight for the site: ⌘K (Ctrl+K elsewhere) or the magnifier in the menu
 * bar opens it. It only adds a faster path — every destination is also in the
 * visible navigation, so nothing depends on finding the shortcut.
 */
export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [notice, setNotice] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
    returnFocus.current?.focus();
  }, []);

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => router.push(href);
    const visit = (href: string) => () => void window.open(href, "_blank", "noopener,noreferrer");
    return [
      ...pages.map((p) => ({ id: `page-${p.href}`, label: p.label, hint: p.href, group: "Pages" as const, icon: AppWindow, run: go(p.href) })),
      ...projects.map((p) => ({
        id: `project-${p.id}`,
        label: p.title,
        hint: p.shortDesc,
        group: "Projects" as const,
        icon: FolderGit2,
        keywords: [p.tech.join(" "), p.award ?? ""].join(" "),
        run: go(`/portfolio/${p.id}`),
      })),
      {
        id: "copy-email",
        label: "Copy email address",
        hint: site.email,
        group: "Actions",
        icon: Copy,
        keywords: "contact mail",
        run: async () => {
          await navigator.clipboard.writeText(site.email);
          setNotice(`Copied ${site.email}`);
        },
      },
      { id: "resume", label: "Open resume", hint: "PDF", group: "Actions", icon: FileText, keywords: "cv", run: visit(site.resume) },
      { id: "github", label: "GitHub", hint: "github.com/itsYoga", group: "Actions", icon: ArrowUpRight, keywords: "code", run: visit(socials.github) },
      { id: "linkedin", label: "LinkedIn", hint: "linkedin.com", group: "Actions", icon: ArrowUpRight, run: visit(socials.linkedin) },
      { id: "terminal", label: "Open terminal", hint: "or press `", group: "Actions", icon: SquareTerminal, keywords: "shell cli easter", run: go("/terminal") },
    ];
  }, [router]);

  const results = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (words.length === 0) return items;
    return items.filter((item) => {
      const text = `${item.label} ${item.hint} ${item.keywords ?? ""}`.toLowerCase();
      return words.every((w) => text.includes(w));
    });
  }, [items, query]);

  // Open from the keyboard, or from anything that dispatches OPEN_PALETTE.
  useEffect(() => {
    const show = () => {
      returnFocus.current = document.activeElement as HTMLElement | null;
      setNotice(null);
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) close();
        else show();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE, show);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE, show);
    };
  }, [open, close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const run = async (item: Item | undefined) => {
    if (!item) return;
    await item.run();
    // Copying keeps the palette open long enough to say it worked.
    if (item.id === "copy-email") setTimeout(close, 900);
    else close();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      void run(results[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      // The input is the only stop; Tab would otherwise leave the dialog.
      e.preventDefault();
    }
  };

  let lastGroup = "";

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[14vh]" onKeyDown={onKeyDown}>
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] animate-in fade-in duration-150" onClick={close} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the site"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-popover/95 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder="Search pages, projects and actions"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-results"
            aria-activedescendant={results[active] ? `palette-${results[active].id}` : undefined}
            aria-autocomplete="list"
            className="h-14 flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground/70"
          />
          <kbd className="hidden sm:inline text-[11px] text-muted-foreground border border-border rounded px-1.5 py-0.5">esc</kbd>
        </div>

        <ul id="palette-results" role="listbox" aria-label="Results" className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-8 text-center text-sm text-muted-foreground">No results for “{query}”</li>}
          {results.map((item, i) => {
            const header = item.group !== lastGroup ? item.group : null;
            lastGroup = item.group;
            return (
              <li key={item.id} role="presentation">
                {header && (
                  <div className="px-3 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground" aria-hidden="true">
                    {header}
                  </div>
                )}
                <div
                  id={`palette-${item.id}`}
                  role="option"
                  aria-selected={i === active}
                  onMouseMove={() => setActive(i)}
                  onClick={() => void run(item)}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 ${
                    i === active ? "bg-primary text-primary-foreground" : "text-foreground"
                  }`}
                >
                  <item.icon className="w-4 h-4 shrink-0 opacity-80" aria-hidden="true" />
                  <span className="font-medium whitespace-nowrap shrink-0">{item.label}</span>
                  <span className={`ml-auto truncate text-sm ${i === active ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {item.hint}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[11px] text-muted-foreground">
          <span aria-live="polite">{notice ?? `${results.length} result${results.length === 1 ? "" : "s"}`}</span>
          <span className="hidden sm:inline">↑↓ to move · ↵ to open · {isMac() ? "⌘" : "Ctrl+"}K to toggle</span>
        </div>
      </div>
    </div>
  );
}
