"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const links = [
  { href: "mailto:ch993115@gmail.com", icon: Mail, label: "Email" },
  { href: "https://github.com/itsYoga", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/yujia-liang-77ab022a7/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/yogaliang0702/", icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  const pathname = usePathname();
  // The terminal page is its own full-screen experience
  if (pathname === "/terminal") return null;

  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} YuJia Liang
        </p>
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              className="p-2.5 rounded-full text-foreground/60 hover:text-foreground hover:bg-accent/60 transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
