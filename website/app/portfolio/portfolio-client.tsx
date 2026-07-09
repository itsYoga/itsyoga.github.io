"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import EditorialHeader from "@/components/EditorialHeader";
import { projects, type Project } from "@/data/projects";

function ProjectMedia({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${project.accent} ${className}`}>
      {project.thumb ? (
        <img
          src={project.thumb}
          alt={`${project.title} preview`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl font-bold text-white/30 select-none transition-transform duration-700 group-hover:scale-110">
            {project.title.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
}

function TechChips({ tech, limit = 4 }: { tech: string[]; limit?: number }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.slice(0, limit).map((t) => (
        <span
          key={t}
          className="px-2.5 py-1 text-xs bg-accent/50 border border-border/50 rounded-full text-foreground/70"
        >
          {t}
        </span>
      ))}
      {tech.length > limit && (
        <span className="px-2.5 py-1 text-xs text-muted-foreground">
          +{tech.length - limit} more
        </span>
      )}
    </div>
  );
}

function AwardBadge({ label, size = "sm" }: { label: string; size?: "sm" | "md" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 ${
        size === "md" ? "px-3 py-1.5 text-sm" : "px-3 py-1 text-xs"
      }`}
    >
      <Trophy className={size === "md" ? "w-4 h-4" : "w-3.5 h-3.5"} />
      {label}
    </span>
  );
}

export default function Portfolio() {
  const [featured, ...rest] = projects;

  return (
    <main className="min-h-screen">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-16 lg:mb-24">
            <EditorialHeader
              index="02"
              title="Selected Works"
              subtitle="Projects spanning AI, full-stack development, and creative technology."
              size="large"
            />
          </div>

          {/* Featured project */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group mb-6"
          >
            <Link href={`/portfolio/${featured.id}`} data-cursor="View" className="block">
              <div className="grid grid-cols-1 md:grid-cols-5 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300 overflow-hidden">
                <ProjectMedia
                  project={featured}
                  className="md:col-span-3 aspect-video md:aspect-auto md:min-h-[320px]"
                />
                <div className="md:col-span-2 flex flex-col justify-center p-7 md:p-9">
                  {featured.award && (
                    <div className="mb-4">
                      <AwardBadge label={featured.award} size="md" />
                    </div>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-3">
                    {featured.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featured.shortDesc}
                  </p>
                  <TechChips tech={featured.tech} limit={5} />
                  <div className="flex items-center gap-2 mt-7 text-sm font-medium text-foreground/70 group-hover:text-primary transition-colors">
                    View project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Remaining projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                className="group"
              >
                <Link href={`/portfolio/${project.id}`} data-cursor="View" className="block h-full">
                  <div className="flex flex-col h-full rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300 overflow-hidden">
                    <ProjectMedia project={project} className="aspect-video" />
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="font-mono text-xs text-muted-foreground/50 pt-1.5 shrink-0">
                          {String(index + 2).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                        {project.shortDesc}
                      </p>
                      <TechChips tech={project.tech} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
