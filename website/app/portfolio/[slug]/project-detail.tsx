"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Newspaper } from "lucide-react";
import { SiApple } from "react-icons/si";
import Magnetic from "@/components/Magnetic";
import type { Project } from "@/data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
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
              {project.award && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-full bg-foreground/[0.06] text-foreground/80 border border-border">
                  <SiApple className="w-4 h-4 -mt-px" />
                  {project.award}
                </span>
              )}
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
              {project.detailedDescription}
            </p>

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
                <Magnetic strength={0.3} radius={60}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Magnetic>
              )}
              {project.demo && (
                <Magnetic strength={0.3} radius={60}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full hover:bg-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Magnetic>
              )}
              {project.news?.map((item) => (
                <Magnetic key={item.href} strength={0.3} radius={60}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full hover:bg-accent transition-colors"
                  >
                    <Newspaper className="w-4 h-4" />
                    {item.label}
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
