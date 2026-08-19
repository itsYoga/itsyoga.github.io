"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight, FileText } from "lucide-react";
import { SiApple } from "react-icons/si";
import { projects } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const socials = [
  { href: "https://github.com/itsYoga", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/yujia-liang-77ab022a7/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/yogaliang0702/", icon: Instagram, label: "Instagram" },
];

// Derived from the shared project data so the homepage cannot drift
// out of sync with /portfolio — reorder projects.ts to reorder this.
const featured = projects.slice(0, 3).map((p) => ({
  slug: p.id,
  title: p.title,
  desc: p.shortDesc,
  tech: p.tech.slice(0, 3),
  award: Boolean(p.award),
}));

export default function Home() {
  return (
    <main className="text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Hero */}
      <section className="min-h-[calc(100svh-4rem)] flex items-center px-4">
        <div className="max-w-5xl mx-auto w-full py-24">
          <motion.p
            {...fadeUp(0)}
            className="text-sm uppercase tracking-widest text-muted-foreground mb-6"
          >
            AI Engineer &amp; Full-Stack Developer
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-[clamp(3rem,9vw,7.5rem)] font-bold tracking-tighter leading-[0.95] mb-8"
          >
            YuJia Liang
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-[clamp(1.1rem,1.8vw,1.5rem)] text-foreground/80 tracking-tight leading-relaxed max-w-2xl mb-10"
          >
            Building intelligent systems. <span className="text-primary">Capturing the world.</span>
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:ch993115@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href="/YuJia_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-semibold text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="p-3 rounded-full text-foreground/60 hover:text-foreground hover:bg-accent/60 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-4 pt-20 md:pt-24 pb-24 md:pb-28 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Featured Work</h2>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              All projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group flex flex-col h-full p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.award && (
                      <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-foreground/[0.06] text-foreground/80 border border-border">
                        <SiApple className="w-3 h-3 -mt-px" />
                        WWDC26
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs bg-accent/50 border border-border/50 rounded-full text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 py-20 md:py-24 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Let&apos;s work together</h2>
            <p className="text-muted-foreground max-w-md">
              Open to internships, research collaborations, and interesting projects.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:ch993115@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              ch993115@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
