"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, ArrowUpRight, FileText } from "lucide-react";
import AwardBadge from "@/components/AwardBadge";
import { projects } from "@/data/projects";
import { site, socials } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const socialLinks = [
  { href: socials.github, icon: Github, label: "GitHub" },
  { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: socials.instagram, icon: Instagram, label: "Instagram" },
];

// Derived from the shared project data so the homepage cannot drift
// out of sync with /portfolio — reorder projects.ts to reorder this.
const featured = projects.slice(0, 3).map((p) => ({
  slug: p.id,
  title: p.title,
  desc: p.shortDesc,
  tech: p.tech.slice(0, 3),
  award: p.award,
}));

export default function Home() {
  return (
    <main className="text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Hero */}
      <section className="flex items-center px-4">
        <div className="max-w-5xl mx-auto w-full py-20 md:py-28 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <div>
          <motion.p
            {...fadeUp(0)}
            className="text-sm uppercase tracking-widest text-muted-foreground mb-6"
          >
            AI Engineer &amp; Full-Stack Developer
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-[clamp(3rem,8vw,6.5rem)] font-bold tracking-tighter leading-[0.95] mb-8"
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
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-semibold text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              {socialLinks.map((social) => (
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

          <motion.div {...fadeUp(0.2)} className="hidden md:block w-[260px] lg:w-[300px]">
            <img
              src="/images/projects/riffnode/interview.jpg"
              alt="YuJia Liang with a guitar and the RiffNode spectrum on a laptop"
              className="w-full aspect-[4/5] object-cover rounded-2xl border border-border/50 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-4 pt-20 md:pt-24 pb-24 md:pb-28 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <h2 className="pill-label">Featured Work</h2>
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
                  {/* Badge above the title, so a long title keeps the full width. */}
                  <div className="h-7 mb-3">{project.award && <AwardBadge label={project.award} size="sm" />}</div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                    {project.title}
                  </h3>
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
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
