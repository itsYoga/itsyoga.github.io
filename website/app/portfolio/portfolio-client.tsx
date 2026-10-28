"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EditorialHeader from "@/components/EditorialHeader";
import { projects, type Project } from "@/data/projects";
import AwardBadge from "@/components/AwardBadge";

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

/** Timeline and award on one line above the title, so every card's title gets the full width. */
function CardMeta({ project }: { project: Project }) {
  if (!project.period && !project.award) return null;
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
      {project.period && <span className="text-xs font-medium text-muted-foreground tabular-nums">{project.period}</span>}
      {project.award && <AwardBadge label={project.award} size="sm" />}
    </div>
  );
}

export default function Portfolio() {
  // Two wide features, then a 2×2 grid: six projects with no orphan row.
  const featured = projects.slice(0, 2);
  const rest = projects.slice(2);

  return (
    <main className="min-h-screen">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-14 lg:mb-20">
            <EditorialHeader
              title="Selected Works"
              subtitle="Six projects across on-device audio, computer vision, research and developer tools — each with my role, the timeline and the numbers behind it."
              size="large"
            />
          </div>

          {/* Featured projects, image side alternating */}
          <div className="space-y-6 mb-6">
            {featured.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <Link href={`/portfolio/${project.id}`} className="block">
                  <div className="grid grid-cols-1 md:grid-cols-5 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300 overflow-hidden">
                    <ProjectMedia
                      project={project}
                      className={`md:col-span-3 aspect-video md:aspect-auto md:min-h-[320px] ${i % 2 === 1 ? "md:order-2" : ""}`}
                    />
                    <div className="md:col-span-2 flex flex-col justify-center p-7 md:p-9">
                      <CardMeta project={project} />
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{project.shortDesc}</p>
                      <TechChips tech={project.tech} limit={5} />
                      <div className="flex items-center gap-2 mt-7 text-sm font-medium text-foreground/70 group-hover:text-primary transition-colors">
                        View project
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

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
                <Link href={`/portfolio/${project.id}`} className="block h-full">
                  <div className="flex flex-col h-full rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300 overflow-hidden">
                    <ProjectMedia project={project} className="aspect-video" />
                    <div className="flex flex-col flex-1 p-6">
                      <CardMeta project={project} />
                      <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{project.shortDesc}</p>
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
