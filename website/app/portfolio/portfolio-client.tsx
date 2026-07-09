"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import EditorialHeader from "@/components/EditorialHeader";
import { projects } from "@/data/projects";

export default function Portfolio() {
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

          {/* Project List */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/portfolio/${project.id}`} data-cursor="View" className="block">
                  <div className="flex items-start gap-6 p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300">
                    {/* Thumbnail */}
                    <div className={`hidden sm:block shrink-0 w-44 md:w-52 aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${project.accent}`}>
                      {project.thumb ? (
                        <img
                          src={project.thumb}
                          alt={`${project.title} preview`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-5xl font-bold text-white/40 select-none group-hover:scale-110 transition-transform duration-500">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            {project.award && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                                <Trophy className="w-3.5 h-3.5" />
                                {project.award}
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {project.shortDesc}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.slice(0, 4).map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 text-xs bg-accent/50 border border-border/50 rounded-full text-foreground/70"
                              >
                                {t}
                              </span>
                            ))}
                            {project.tech.length > 4 && (
                              <span className="px-2.5 py-1 text-xs text-muted-foreground">
                                +{project.tech.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="p-2 rounded-full border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
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
