"use client";

import { useState, useRef, useEffect } from "react";
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
    demo: null,
    video: "/videos/volleyball-demo.mp4",
    color: "from-orange-500/20 to-red-500/20",
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
  // We store the ID of the currently hovered project
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-6xl mx-auto relative">
          
          {/* Header Text */}
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

          {/* The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Important: On mouse enter, we set this specific ID as active
                onMouseEnter={() => setActiveId(project.id)}
                className="h-[400px]"
              >
                <CompactCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* The Overlay Layer 
            This sits "outside" the grid z-flow to allow perfect centering 
          */}
          <AnimatePresence>
            {activeId && (
              <>
                {/* Backdrop Blur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 pointer-events-none"
                />
                
                {/* The Expanded Card */}
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                  <div 
                    // Re-enable pointer events for the card itself so we can click links
                    className="pointer-events-auto w-full h-full flex items-center justify-center p-4"
                    // If mouse leaves the EXPANDED card area, we close it
                    onMouseLeave={() => setActiveId(null)}
                  >
                    <ExpandedCard project={projects.find(p => p.id === activeId)!} />
                  </div>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

// --- 1. The Compact Card (Grid View) ---
function CompactCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      // layoutId is the magic key that connects this component to the ExpandedCard
      layoutId={`card-${project.id}`}
      className="group relative w-full h-full rounded-3xl overflow-hidden border bg-card shadow-xl cursor-pointer"
    >
      {/* Background Gradient Placeholder */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 backdrop-blur-sm">
          <Code2 className="w-5 h-5" />
        </div>
        <motion.h3 
          layoutId={`title-${project.id}`}
          className="text-3xl font-bold leading-tight tracking-tight mb-2"
        >
          {project.title}
        </motion.h3>
        <motion.p 
          layoutId={`desc-${project.id}`}
          className="text-lg text-muted-foreground font-medium"
        >
          {project.shortDesc}
        </motion.p>
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
    </motion.div>
  );
}

// --- 2. The Expanded Card (Hover/Center View) ---
function ExpandedCard({ project }: { project: typeof projects[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play video when card expands
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log("Video autoplay blocked", e));
      videoRef.current.currentTime = 0;
    }
    
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      className="w-full max-w-[90vw] md:max-w-[800px] h-auto max-h-[85vh] bg-card rounded-3xl shadow-2xl overflow-hidden border relative flex flex-col"
    >
      {/* Top Half: Video Area */}
      <div className="relative h-[50%] min-h-[300px] w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={project.video} type="video/mp4" />
        </video>
        
        {/* Fallback Gradient if video fails */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Bottom Half: Content */}
      <div className="flex-1 p-8 flex flex-col justify-start relative bg-card">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 backdrop-blur-sm">
          <Code2 className="w-5 h-5" />
        </div>
        
        <motion.h3 
          layoutId={`title-${project.id}`}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          layoutId={`desc-${project.id}`}
          className="text-muted-foreground hidden" // Hide the short desc in expanded view to avoid duplication
        >
          {project.shortDesc}
        </motion.p>

        {/* Fade-in Detailed Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="space-y-5"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {project.detailedDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 bg-accent/50 border border-border/50 rounded-md text-xs font-semibold backdrop-blur-md">
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
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
      </div>
    </motion.div>
  );
}
