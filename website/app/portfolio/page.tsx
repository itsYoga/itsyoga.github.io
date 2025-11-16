"use client";

import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Copy from "@/components/Copy";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";

// Updated Data Structure with video placeholders
const projects = [
  {
    id: "volleyball",
    title: "Volleyball Line Judging",
    detailedDescription: "A high-precision system using YOLOv8 and OpenCV to detect ball impact points in real-time. It calculates trajectory to determine IN/OUT calls with 95% accuracy.",
    tech: ["Python", "OpenCV", "PyTorch", "YOLO"],
    github: "https://github.com/itsYoga/volleyball-line-judging",
    demo: null, // Add URL if you have one
    video: "/videos/volleyball-demo.mp4", // REPLACE with your actual video path
    color: "from-orange-500/20 to-red-500/20", // Custom gradient accent
  },
  {
    id: "archon",
    title: "Archon RWA Tokenization",
    detailedDescription: "Bridging traditional finance and DeFi. Users can tokenize physical assets. Built with Solidity smart contracts for fractional ownership and a React frontend for seamless trading.",
    tech: ["React", "Solidity", "TypeScript", "Web3.js"],
    github: "https://github.com/itsYoga/archon-rwa",
    demo: null,
    video: "/videos/archon-demo.mp4", 
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "asl",
    title: "ASL Gesture Recognition",
    detailedDescription: "Leveraging Apple's CoreML and CreateML to translate American Sign Language hand gestures into text instantly on-device. Optimized for low latency.",
    tech: ["SwiftUI", "CreateML", "CoreML"],
    github: "https://github.com/itsYoga/asl-recognition",
    demo: null,
    video: "/videos/asl-demo.mp4",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: "syncup",
    title: "SyncUp Social Calendar",
    detailedDescription: "A Flutter-based social organizer that uses RAG (Retrieval-Augmented Generation) to analyze friend group availabilities and suggest the perfect meeting time.",
    tech: ["Flutter", "Firebase", "LLM/RAG", "Dart"],
    github: "https://github.com/itsYoga/syncup",
    demo: null,
    video: "/videos/syncup-demo.mp4",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 lg:mb-20 space-y-4">
            <Copy>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Selected Works
              </h1>
            </Copy>
            <Copy delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A collection of projects spanning Computer Vision, Blockchain, and Mobile Development. Hover over the cards to see them in action.
              </p>
            </Copy>
          </div>

          {/* Grid Layout - 2 Columns for larger cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle Mouse Enter: Play Video and Scale Up
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.video) {
      videoRef.current.play().catch((e) => console.log("Video autoplay blocked", e));
      videoRef.current.currentTime = 0;
    }
  };

  // Handle Mouse Leave: Pause Video and Scale Down
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Copy delay={index * 0.1}>
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-[400px] w-full"
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative h-full w-full rounded-3xl overflow-hidden border bg-card shadow-xl group"
        >
          {/* --- Background: Video (only shows on hover) & Gradient --- */}
          <div className="absolute inset-0 bg-muted/50 z-0">
            {/* Placeholder Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
            
            {/* Video (only visible on hover) */}
            {project.video && (
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                className={`h-full w-full object-cover transition-opacity duration-700 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <source src={project.video} type="video/mp4" />
              </video>
            )}
          </div>

          {/* --- Overlay Gradient (for text readability) --- */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/80 to-transparent" />

          {/* --- Content Container (always visible) --- */}
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
            
            {/* Icon Badge */}
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 backdrop-blur-sm">
              <Code2 className="w-5 h-5" />
            </div>
            
            {/* Title */}
            <h3 className="text-3xl font-bold leading-tight tracking-tight mb-4">
              {project.title}
            </h3>

            {/* Detailed Description */}
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              {project.detailedDescription}
            </p>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t: string) => (
                <span key={t} className="px-2.5 py-1 bg-accent/50 border border-border/50 rounded-md text-xs font-semibold backdrop-blur-md">
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.github && (
                <Button size="sm" variant="default" className="gap-2 rounded-full" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button size="sm" variant="secondary" className="gap-2 rounded-full" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </Button>
              )}
            </div>

          </div>
        </motion.div>
      </motion.div>
    </Copy>
  );
}
