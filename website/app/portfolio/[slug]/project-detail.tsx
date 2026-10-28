"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, FileText, Github, Newspaper } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import AwardBadge from "@/components/AwardBadge";

export default function ProjectDetail({ project }: { project: Project }) {
  // Wraps around, so every page has a next and a previous project.
  const index = projects.findIndex((p) => p.id === project.id);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="min-h-screen">
      <section className="px-4 pb-20 pt-6 lg:pt-10">
        <div className="max-w-4xl mx-auto">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All projects
            </Link>
          </motion.div>

          {/* Hero media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`relative aspect-video rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br ${project.accent} mb-10`}
          >
            {project.video ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={project.thumb}
                className="w-full h-full object-cover"
              >
                <source src={project.video} type="video/mp4" />
              </video>
            ) : project.thumb ? (
              <img
                src={project.thumb}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-8xl font-bold text-white/25 tracking-tight select-none">
                  {project.title}
                </span>
              </div>
            )}
          </motion.div>

          {/* Title + award */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
              {project.award && <AwardBadge label={project.award} size="lg" />}
            </div>

            <p className="text-xl md:text-2xl leading-snug text-foreground/85 mb-8 max-w-3xl">
              {project.shortDesc}
            </p>

            {/* At a glance: role, timeline, team */}
            {(project.role || project.period || project.team) && (
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 py-5 mb-8 border-y border-border">
                {[
                  ["Role", project.role],
                  ["Timeline", project.period],
                  ["Team", project.team],
                ].map(([term, value]) =>
                  value ? (
                    <div key={term}>
                      <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{term}</dt>
                      <dd className="text-sm font-medium text-foreground">{value}</dd>
                    </div>
                  ) : null
                )}
              </dl>
            )}

            {/* Key numbers */}
            {project.metrics && project.metrics.length > 0 && (
              <div className={`grid grid-cols-2 gap-3 mb-10 ${project.metrics.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
                {project.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-card/60 p-4">
                    <div className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{m.value}</div>
                    <div className="mt-1.5 text-xs leading-snug text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-4 mb-10 max-w-3xl">
              {project.detailedDescription.split("\n\n").map((para, i) => (
                <p key={i} className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-sm bg-accent/50 border border-border/50 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full hover:bg-accent transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.demoLabel ?? "Live Demo"}
                </a>
              )}
              {project.links?.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full hover:bg-accent transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  {item.label}
                </a>
              ))}
              {project.news?.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full hover:bg-accent transition-colors"
                >
                  <Newspaper className="w-4 h-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="mt-16">
              <h2 className="pill-label mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((item) => (
                  <motion.figure
                    key={item.src}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="rounded-xl overflow-hidden border border-border/50 bg-accent/30">
                      {item.kind === "video" ? (
                        <video controls muted playsInline preload="none" poster={item.poster} className="w-full h-auto">
                          <source src={item.src} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={item.src} alt={item.caption} loading="lazy" className="w-full h-auto" />
                      )}
                    </div>
                    <figcaption className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{item.caption}</figcaption>
                  </motion.figure>
                ))}
              </div>
            </section>
          )}

          {/* Previous / next */}
          <nav aria-label="More projects" className="mt-20 pt-8 border-t border-border grid grid-cols-2 gap-4">
            <Link href={`/portfolio/${prev.id}`} className="group rounded-xl p-4 -m-4 hover:bg-accent/50 transition-colors">
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                Previous
              </span>
              <span className="block mt-1.5 font-semibold group-hover:text-primary transition-colors">{prev.title}</span>
            </Link>
            <Link href={`/portfolio/${next.id}`} className="group rounded-xl p-4 -m-4 text-right hover:bg-accent/50 transition-colors">
              <span className="flex items-center justify-end gap-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                Next
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="block mt-1.5 font-semibold group-hover:text-primary transition-colors">{next.title}</span>
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
