"use client";

import { Card } from "@/components/ui/card";
import Copy from "@/components/Copy";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Volleyball Line Judging System",
    description: "Automated line-judging using OpenCV and PyTorch",
    detailedDescription: "Developed a computer vision system that automatically judges volleyball line calls using deep learning models. Implemented real-time video processing and achieved high accuracy in detecting ball positions.",
    tech: "Python • OpenCV • PyTorch",
    github: "https://github.com/itsYoga/volleyball-line-judging",
    demo: null,
    span: "col-span-1 row-span-1",
  },
  {
    title: "Archon RWA Tokenization DApp",
    description: "DeFi platform for Real-World Asset tokenization",
    detailedDescription: "Built a decentralized application for tokenizing real-world assets on the blockchain. Features include smart contract integration, secure asset management, and a user-friendly React interface.",
    tech: "React • Solidity • TypeScript",
    github: "https://github.com/itsYoga/archon-rwa",
    demo: null,
    span: "col-span-1 row-span-1",
  },
  {
    title: "ASL Hand Gesture Recognition",
    description: "iOS app with CreateML for real-time gesture recognition",
    detailedDescription: "Created an iOS application that recognizes American Sign Language gestures in real-time using Core ML and CreateML. Trained custom machine learning models for accurate gesture detection.",
    tech: "SwiftUI • CreateML",
    github: "https://github.com/itsYoga/asl-recognition",
    demo: null,
    span: "col-span-1 row-span-1",
  },
  {
    title: "SyncUp - Social Calendar",
    description: "Flutter app with Firebase and AI-powered scheduling",
    detailedDescription: "Developed a social calendar application that uses AI to help users coordinate events and schedules. Integrated Firebase for real-time synchronization and RAG for intelligent scheduling suggestions.",
    tech: "Flutter • Firebase • RAG",
    github: "https://github.com/itsYoga/syncup",
    demo: null,
    span: "col-span-1 row-span-1",
  },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main>
      <section className="px-4 pb-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <Copy>
              <h1 className="text-[clamp(32px,4vw,72px)] font-bold tracking-tight leading-[1.1]">
                Portfolio
              </h1>
            </Copy>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={project.span}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={false}
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="h-full p-6 lg:p-8 rounded-2xl hover:shadow-xl transition-all group bg-card border-2 border-transparent hover:border-primary/30 relative overflow-hidden">
                  <Copy delay={index * 0.1}>
                    <h3 className="text-[clamp(20px,2vw,32px)] font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </Copy>
                  <Copy delay={index * 0.1 + 0.1}>
                    <p className="text-[clamp(14px,1.2vw,18px)] text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </Copy>
                  
                  {/* Detailed description shown on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-4"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.detailedDescription}
                    </p>
                  </motion.div>

                  {/* Links shown on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex gap-3 mb-4"
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </motion.div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(" • ").map((tech) => (
                      <span
                        key={tech}
                        className="text-[clamp(12px,1vw,14px)] px-3 py-1.5 bg-accent rounded-lg font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
