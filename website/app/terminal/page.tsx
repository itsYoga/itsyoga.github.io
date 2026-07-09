"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const PROMPT = "yujia@yujialiang.com:~$";

const projects: Record<string, { desc: string; url: string }> = {
  riffnode: {
    desc: "AI guitar effects studio — WWDC26 Swift Student Challenge Winner",
    url: "/portfolio",
  },
  volleyball: {
    desc: "Deep-learning volleyball analytics (ball tracking, action recognition)",
    url: "https://github.com/DL-Volleyball-Analysis",
  },
  ghote: {
    desc: "Local-first AI note-taking app for macOS (Tauri + React)",
    url: "https://github.com/Ghote-notes",
  },
  syncup: {
    desc: "AI-powered social calendar app (Flutter + Gemini)",
    url: "https://github.com/itsYoga/Sync",
  },
  archon: {
    desc: "DeFi platform for real-world asset tokenization",
    url: "https://github.com/itsYoga/Archon",
  },
  asl: {
    desc: "iOS app for learning American Sign Language (CoreML)",
    url: "https://github.com/itsYoga/ASLoading",
  },
};

const socials: Record<string, string> = {
  github: "https://github.com/itsYoga",
  linkedin: "https://www.linkedin.com/in/yujia-liang-77ab022a7/",
  instagram: "https://www.instagram.com/yogaliang0702/",
  resume: "/YuJia_resume.pdf",
};

const COMMANDS = [
  "help", "whoami", "ls", "cat", "open", "skills", "neofetch",
  "contact", "clear", "pwd", "echo", "history", "exit", "sudo",
];

const bannerWidth = 44;
const banner = [
  "╭" + "─".repeat(bannerWidth) + "╮",
  "│" + " ".repeat(bannerWidth) + "│",
  ...[
    "YuJia Liang",
    "AI Engineer & Full-Stack Developer",
    "WWDC26 Swift Student Challenge Winner",
  ].map((l) => "│  " + l.padEnd(bannerWidth - 2) + "│"),
  "│" + " ".repeat(bannerWidth) + "│",
  "╰" + "─".repeat(bannerWidth) + "╯",
];

type Line = { id: number; content: React.ReactNode };

export default function Terminal() {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  const print = useCallback((content: React.ReactNode) => {
    setLines((prev) => [...prev, { id: idRef.current++, content }]);
  }, []);

  useEffect(() => {
    print(
      <div className="text-emerald-400">
        {banner.map((l, i) => (
          <pre key={i} className="leading-tight text-[10px] sm:text-xs">{l}</pre>
        ))}
        <p className="mt-3 text-zinc-300">
          Welcome. Type <span className="text-amber-400">help</span> to see available commands.
        </p>
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const link = (href: string, label: string) => (
    <a
      href={href}
      target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
    >
      {label}
    </a>
  );

  const execute = (raw: string) => {
    const [cmd, ...args] = raw.trim().split(/\s+/);
    const arg = args.join(" ");

    switch (cmd) {
      case "":
        return null;
      case "help":
        return (
          <div className="space-y-1">
            {[
              ["whoami", "who is this guy"],
              ["ls", "list files"],
              ["cat <file>", "read a file (try: cat contact.txt)"],
              ["open <name>", "open a project / resume / github / linkedin"],
              ["skills", "technical skills"],
              ["neofetch", "system info"],
              ["sudo hire-me", "you know you want to"],
              ["clear", "clear the screen"],
              ["exit", "back to the pretty website"],
            ].map(([c, d]) => (
              <p key={c}>
                <span className="text-amber-400 inline-block w-40">{c}</span>
                <span className="text-zinc-400">{d}</span>
              </p>
            ))}
          </div>
        );
      case "whoami":
        return (
          <div className="space-y-1">
            <p>YuJia Liang — AI Engineer & Full-Stack Developer.</p>
            <p>Apple WWDC26 Swift Student Challenge Winner (1 of 8 in Taiwan, 350 worldwide).</p>
            <p>B.S. in Computer Science, National Taiwan Ocean University, Class of 2026.</p>
            <p className="text-zinc-400">Also: photographer, volleyball captain, darkroom officer at NTUPhoto.</p>
          </div>
        );
      case "ls": {
        if (arg === "projects" || arg === "projects/") {
          return (
            <div className="space-y-1">
              {Object.entries(projects).map(([name, p]) => (
                <p key={name}>
                  <span className="text-amber-400 inline-block w-28">{name}</span>
                  <span className="text-zinc-400">{p.desc}</span>
                </p>
              ))}
              <p className="text-zinc-500 mt-2">hint: open riffnode</p>
            </div>
          );
        }
        return (
          <p>
            <span className="text-sky-400">projects/</span>{"  "}
            <span className="text-sky-400">skills/</span>{"  "}
            resume.pdf{"  "}contact.txt
          </p>
        );
      }
      case "cat": {
        if (!arg) return <p className="text-red-400">cat: missing file name</p>;
        if (arg === "contact.txt") {
          return (
            <div className="space-y-1">
              <p>email     : {link("mailto:ch993115@gmail.com", "ch993115@gmail.com")}</p>
              <p>github    : {link(socials.github, "github.com/itsYoga")}</p>
              <p>linkedin  : {link(socials.linkedin, "yujia-liang")}</p>
              <p>instagram : {link(socials.instagram, "@yogaliang0702")}</p>
              <p>location  : Taipei, Taiwan</p>
            </div>
          );
        }
        if (arg === "resume.pdf") {
          return <p className="text-zinc-400">cat: resume.pdf: binary file — try <span className="text-amber-400">open resume</span></p>;
        }
        if (arg === "skills" || arg === "skills/") {
          return <p className="text-zinc-400">cat: skills: is a directory — try <span className="text-amber-400">skills</span></p>;
        }
        return <p className="text-red-400">cat: {arg}: no such file or directory</p>;
      }
      case "skills":
        return (
          <div className="space-y-1">
            {[
              ["languages", "Python, TypeScript, Rust, Swift, C++, Java, Dart, SQL"],
              ["ml/ai", "PyTorch, TensorFlow, OpenCV, ONNX, YOLO, Foundation Models"],
              ["frameworks", "React, FastAPI, SwiftUI, AVFoundation, Tauri, Flutter"],
              ["devops", "Docker, GitHub Actions, Redis, PostgreSQL, pytest, Vitest"],
            ].map(([k, v]) => (
              <p key={k}>
                <span className="text-amber-400 inline-block w-28">{k}</span>
                <span className="text-zinc-300">{v}</span>
              </p>
            ))}
          </div>
        );
      case "open": {
        if (!arg) return <p className="text-red-400">open: missing target — try open riffnode</p>;
        const key = arg.toLowerCase();
        if (projects[key]) {
          const url = projects[key].url;
          if (url.startsWith("/") && !url.endsWith(".pdf")) router.push(url);
          else window.open(url, "_blank");
          return <p className="text-zinc-400">opening {key}…</p>;
        }
        if (socials[key]) {
          window.open(socials[key], "_blank");
          return <p className="text-zinc-400">opening {key}…</p>;
        }
        return <p className="text-red-400">open: {arg}: not found (try ls projects)</p>;
      }
      case "neofetch":
        return (
          <div className="flex gap-6">
            <pre className="text-emerald-400 text-xs leading-tight hidden sm:block">{`
   ▄▄▄▄▄▄▄
  ▐ ◉   ◉ ▌
  ▐    ▽   ▌
   ▀▀▀▀▀▀▀
`}</pre>
            <div className="space-y-0.5">
              <p><span className="text-amber-400">user</span>      yujia@yujialiang.com</p>
              <p><span className="text-amber-400">role</span>      AI Engineer & Full-Stack Developer</p>
              <p><span className="text-amber-400">award</span>     WWDC26 Swift Student Challenge Winner</p>
              <p><span className="text-amber-400">edu</span>       NTOU Computer Science, Class of 2026</p>
              <p><span className="text-amber-400">langs</span>     Mandarin, English (TOEFL 110), 日本語 (N3)</p>
              <p><span className="text-amber-400">shell</span>     zsh</p>
              <p><span className="text-amber-400">coffee</span>    ∞</p>
            </div>
          </div>
        );
      case "contact":
        return execute("cat contact.txt");
      case "resume":
        return execute("open resume");
      case "pwd":
        return <p>/Users/yujia/portfolio</p>;
      case "echo":
        return <p>{arg}</p>;
      case "history":
        return (
          <div>
            {history.map((h, i) => (
              <p key={i} className="text-zinc-400">{String(i + 1).padStart(4)} {h}</p>
            ))}
          </div>
        );
      case "sudo":
        if (arg === "hire-me" || arg === "hire me") {
          return (
            <div className="space-y-1">
              <p className="text-emerald-400">[sudo] permission granted ✓</p>
              <p>Excellent decision. Reach me at {link("mailto:ch993115@gmail.com", "ch993115@gmail.com")}.</p>
            </div>
          );
        }
        return <p className="text-red-400">yujia is not in the sudoers file. This incident will be reported.</p>;
      case "clear":
        setLines([]);
        return null;
      case "exit":
        router.push("/");
        return <p className="text-zinc-400">logout</p>;
      default:
        return (
          <p className="text-red-400">
            zsh: command not found: {cmd} — type <span className="text-amber-400">help</span>
          </p>
        );
    }
  };

  const handleSubmit = () => {
    const raw = input;
    print(
      <p>
        <span className="text-emerald-400">{PROMPT}</span> <span className="text-zinc-100">{raw}</span>
      </p>
    );
    if (raw.trim()) {
      setHistory((prev) => [...prev, raw]);
    }
    setHistoryIndex(-1);
    const output = execute(raw);
    if (output) print(<div className="mb-2">{output}</div>);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const idx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(idx);
      setInput(history[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const idx = historyIndex + 1;
      if (idx >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(idx);
        setInput(history[idx]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.find((c) => c.startsWith(input.trim()) && input.trim());
      if (match) setInput(match + " ");
    }
  };

  return (
    <main className="min-h-[calc(100svh-4rem)] px-4 py-8 flex items-start justify-center">
      <div className="w-full max-w-3xl rounded-2xl border border-zinc-700/60 bg-zinc-950 shadow-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <span className="text-xs text-zinc-500 ml-2 font-mono">yujia — zsh — 80×24</span>
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="h-[65svh] min-h-[400px] overflow-y-auto p-4 font-mono text-sm text-zinc-100 cursor-text"
        >
          {lines.map((line) => (
            <div key={line.id}>{line.content}</div>
          ))}

          {/* Input line */}
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 whitespace-nowrap">{PROMPT}</span>
            <input
              ref={inputRef}
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-zinc-100 caret-emerald-400"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              aria-label="Terminal input"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
