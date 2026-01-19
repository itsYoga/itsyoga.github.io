"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ArrowUpRight } from "lucide-react";
import EditorialHeader from "@/components/EditorialHeader";
import Magnetic from "@/components/Magnetic";

const projects = [
  {
    id: "volleyball",
    title: "Volleyball Match Analysis",
    shortDesc: "AI-powered match analysis with ball tracking and action recognition",
    detailedDescription: "Deep learning system integrating multiple AI models for volleyball analysis. Features ball tracking (VballNet/U-Net), action recognition (YOLOv11m) for serve, spike, block, receive, set detection, and player tracking (YOLOv8 + Norfair). Full-stack app with React frontend and FastAPI backend.",
    tech: ["Python", "PyTorch", "YOLOv11", "React", "FastAPI", "OpenCV"],
    github: "https://github.com/DL-Volleyball-Analysis",
    demo: null,
    video: "/videos/volleyball-demo.mp4",
    accent: "from-orange-500 to-red-500",
  },
  {
    id: "archon",
    title: "Archon RWA Tokenization",
    shortDesc: "DeFi platform for Real-World Assets tokenization",
    detailedDescription: "Decentralized finance platform for tokenizing real-world assets. Features identity verification, asset management, redemption functionality, role-based access control, and Solidity smart contracts for fractional ownership.",
    tech: ["React", "Solidity", "TypeScript", "Web3.js"],
    github: "https://github.com/itsYoga/Archon",
    demo: null,
    video: "/videos/archon-demo.mp4",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    id: "asl",
    title: "ASL Gesture Recognition",
    shortDesc: "iOS app for learning American Sign Language",
    detailedDescription: "iOS application for learning and practicing ASL using machine learning and computer vision. Real-time sign language recognition with SwiftUI interface, CoreML and CreateML for on-device processing.",
    tech: ["SwiftUI", "CreateML", "CoreML"],
    github: "https://github.com/itsYoga/ASLoading",
    demo: null,
    video: "/videos/asl-demo.mp4",
    accent: "from-yellow-500 to-amber-500",
  },
  {
    id: "syncup",
    title: "SyncUp Social Calendar",
    shortDesc: "AI-powered scheduling assistant for groups",
    detailedDescription: "Flutter-based social organizer using RAG to analyze group availabilities and suggest optimal meeting times. Features intelligent scheduling, group management, and calendar integration.",
    tech: ["Flutter", "Firebase", "LLM/RAG", "Dart"],
    github: "https://github.com/itsYoga/Sync",
    demo: null,
    video: "/videos/syncup-demo.mp4",
    accent: "from-purple-500 to-pink-500",
  },
  {
    id: "ghote",
    title: "Ghote Notes",
    shortDesc: "Local-first, AI-powered note-taking for macOS",
    detailedDescription: "Privacy-focused note-taking app with Tauri 2.0 and React 19. Features Obsidian-compatible markdown, Gemini AI integration, Lexical editor with slash commands, D3.js knowledge graph, local RAG with Transformers.js, and real-time collaboration.",
    tech: ["Tauri", "React", "Rust", "D3.js", "Supabase"],
    github: "https://github.com/Ghote-notes",
    demo: "https://ghote.dev",
    video: "/videos/ghote-demo.mp4",
    accent: "from-green-500 to-emerald-500",
  },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

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
                onClick={() => setActiveProject(project.id)}
                className="group cursor-pointer"
              >
                <div className="flex items-start gap-6 p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300">
                  {/* Index */}
                  <span className="text-4xl md:text-5xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {project.title}
                        </h3>
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
              </motion.article>
            ))}
          </div>

          {/* Modal */}
          <AnimatePresence>
            {activeProject && (
              <ProjectModal
                project={projects.find((p) => p.id === activeProject)!}
                onClose={() => setActiveProject(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: typeof projects[0];
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
      video.play().catch(() => {});
    };

    video.addEventListener("canplay", handleCanPlay);
    return () => video.removeEventListener("canplay", handleCanPlay);
  }, []);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl flex flex-col"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur border border-border/50 hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video */}
        <div className={`relative h-[40%] md:h-[50%] bg-gradient-to-br ${project.accent} overflow-hidden`}>
          {!videoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover transition-opacity duration-300 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <source src={project.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{project.title}</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
            {project.detailedDescription}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-8">
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
          </div>
        </div>
      </motion.div>
    </>
  );
}
