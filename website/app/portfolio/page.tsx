"use client";

import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Copy from "@/components/Copy";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Updated Data Structure with video placeholders
const projects = [
  {
    id: "volleyball",
    title: "Volleyball Line Judging",
    shortDesc: "Automated officiating with Computer Vision.",
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
    shortDesc: "DeFi platform for Real-World Assets.",
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
    shortDesc: "Real-time iOS sign language translator.",
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
    shortDesc: "AI-powered scheduling assistant.",
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
            <Copy animateOnScroll={false} delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] pb-1">
                Selected Works
              </h1>
            </Copy>
            <Copy delay={0.02} animateOnScroll={false}>
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
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle Mouse Enter: Play Video
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log("Video autoplay blocked", e));
      videoRef.current.currentTime = 0;
    }
  };

  // Handle Mouse Leave: Pause Video
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-[400px] w-full"
    >
        <motion.div
          animate={{
            scale: isHovered ? 1.4 : 1,
            y: isHovered ? -30 : 0,
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.16, 1, 0.3, 1]
          }}
          className="relative h-full w-full rounded-3xl overflow-hidden border bg-card shadow-xl group cursor-pointer"
          style={{ 
            zIndex: isHovered ? 50 : 1,
            willChange: isHovered ? 'transform' : 'auto'
          }}
        >
          {/* --- Background: Video & Gradient --- */}
          <div className="absolute inset-0 bg-muted/50 z-0">
            {/* Placeholder Gradient if video fails or hasn't loaded */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
            
            {/* Actual Video */}
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              className="h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              // Fallback image if you have thumbnails: poster="/path/to/image.jpg"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          </div>

          {/* --- Overlay Gradient (Darkens on hover for text readability) --- */}
          <div className={`absolute inset-0 z-10 transition-all duration-500 bg-gradient-to-t 
            ${isHovered ? "from-background via-background/90 to-transparent" : "from-background/90 via-transparent to-transparent"}`} 
          />

          {/* --- Content Container --- */}
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
            
            {/* Header (Title) */}
            <div className="mb-2">
               {/* Icon Badge */}
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 backdrop-blur-sm">
                <Code2 className="w-5 h-5" />
              </div>
              
              <h3 className="text-3xl font-bold leading-tight tracking-tight mb-2">
                {project.title}
              </h3>
            </div>

            {/* Conditional Content: Switches between Short & Detailed */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isHovered ? (
                  // DEFAULT STATE
                  <motion.div
                    key="short"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-lg text-muted-foreground font-medium">
                      {project.shortDesc}
                    </p>
                  </motion.div>
                ) : (
                  // HOVER STATE - Expanded with more space
                  <motion.div
                    key="long"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {project.detailedDescription}
                    </p>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t: string) => (
                        <span key={t} className="px-2.5 py-1 bg-accent/50 border border-border/50 rounded-md text-xs font-semibold backdrop-blur-md">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
  );
}
