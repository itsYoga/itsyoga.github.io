"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Copy from "@/components/Copy";
import { Github, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Updated Data Structure with video placeholders
const projects = [
  {
    id: "volleyball",
    title: "Volleyball Match Analysis System",
    shortDesc: "AI-powered volleyball match analysis with ball tracking and action recognition.",
    detailedDescription: "A comprehensive deep learning system for volleyball match analysis that integrates multiple AI models. Features ball tracking using VballNet (U-Net architecture) to track ball trajectory and landing points, action recognition with YOLOv11m to identify five key actions (serve, spike, block, receive, set), and player tracking using YOLOv8 combined with Norfair for multi-object tracking. Includes a full-stack web application with React frontend and FastAPI backend, supporting video upload, analysis processing, interactive playback with timeline controls, real-time visualization (player boxes, action boxes, ball trajectory, heatmaps), player statistics, and data visualization.",
    tech: ["Python", "PyTorch", "YOLOv11", "YOLOv8", "React", "FastAPI", "OpenCV", "Norfair"],
    github: "https://github.com/itsYoga/volleyball-analysis",
    demo: null,
    video: "/videos/volleyball-demo.mp4",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "archon",
    title: "Archon RWA Tokenization",
    shortDesc: "DeFi platform for Real-World Assets tokenization.",
    detailedDescription: "A comprehensive decentralized finance (DeFi) platform designed to tokenize real-world assets (RWA). Features identity verification, asset management, and redemption functionality. The platform includes role-based access control, automated deployment, and a modern React frontend interface. Built with Solidity smart contracts for fractional ownership and seamless trading capabilities.",
    tech: ["React", "Solidity", "TypeScript", "Web3.js"],
    github: "https://github.com/itsYoga/Archon",
    demo: null,
    video: "/videos/archon-demo.mp4",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "asl",
    title: "ASL Gesture Recognition",
    shortDesc: "iOS app for learning and practicing American Sign Language.",
    detailedDescription: "An iOS application designed to help users learn and practice American Sign Language (ASL). Leverages machine learning and computer vision technologies to provide real-time sign language recognition and learning features. Built with SwiftUI for a modern, intuitive interface. Uses Apple's CoreML and CreateML for on-device processing, optimized for low latency and privacy.",
    tech: ["SwiftUI", "CreateML", "CoreML"],
    github: "https://github.com/itsYoga/ASLoading",
    demo: null,
    video: "/videos/asl-demo.mp4",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: "syncup",
    title: "SyncUp Social Calendar",
    shortDesc: "AI-powered scheduling assistant for groups.",
    detailedDescription: "A Flutter-based social organizer that uses RAG (Retrieval-Augmented Generation) to analyze friend group availabilities and suggest the perfect meeting time. Features intelligent scheduling algorithms, group management, and seamless integration with calendar systems.",
    tech: ["Flutter", "Firebase", "LLM/RAG", "Dart"],
    github: "https://github.com/itsYoga/Sync",
    demo: null,
    video: "/videos/syncup-demo.mp4",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "ghote",
    title: "Ghote",
    shortDesc: "AI-powered learning assistant with knowledge extraction.",
    detailedDescription: "An AI-powered learning assistant that extracts key knowledge from your materials, organizes it, and helps you master it via active recall. Features AI knowledge extraction from PDFs/DOCX/notes generating summaries, MCQs, Q&A, and flashcards. Includes project-based organization, fast search with filters, spaced-repetition flashcards, Firebase authentication, and a modern dark theme with glass morphism design.",
    tech: ["Flutter", "Firebase", "Dart", "AI/ML", "Google Sign-In"],
    github: "https://github.com/ghote-app/ghote",
    demo: null,
    video: "/videos/ghote-demo.mp4",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

export default function Portfolio() {
  // We store the ID of the currently hovered project
  const [activeId, setActiveId] = useState<string | null>(null);
  
  // Aggressively preload all videos when component mounts
  useEffect(() => {
    const preloadContainer = document.createElement('div');
    preloadContainer.style.position = 'absolute';
    preloadContainer.style.width = '1px';
    preloadContainer.style.height = '1px';
    preloadContainer.style.opacity = '0';
    preloadContainer.style.pointerEvents = 'none';
    preloadContainer.style.overflow = 'hidden';
    preloadContainer.style.top = '-9999px';
    preloadContainer.style.left = '-9999px';
    document.body.appendChild(preloadContainer);

    const preloadVideos = projects.map((project) => {
      const video = document.createElement('video');
      video.src = project.video;
      video.preload = 'auto';
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('preload', 'auto');
      video.style.width = '1px';
      video.style.height = '1px';
      
      // Force browser to start downloading immediately
      video.load();
      
      // Try to play to force buffering (will fail silently due to autoplay policy)
      video.play().catch(() => {
        // Autoplay blocked, but video should still buffer
      });
      
      // Ensure video continues buffering
      video.addEventListener('progress', () => {
        // Video is downloading
      });
      
      preloadContainer.appendChild(video);
      return video;
    });

    // Cleanup on unmount
    return () => {
      preloadVideos.forEach((video) => {
        video.pause();
        video.src = '';
        video.load();
      });
      if (preloadContainer.parentNode) {
        preloadContainer.parentNode.removeChild(preloadContainer);
      }
    };
  }, []);

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
                A showcase of my recent work and creative projects. Tap or hover over the cards to explore.
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
                // Important: On mouse enter (desktop) or click (mobile), we set this specific ID as active
                onMouseEnter={() => setActiveId(project.id)}
                onClick={() => setActiveId(project.id)}
                className="h-[350px] md:h-[400px] cursor-pointer"
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
                <div 
                  className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                  onClick={() => setActiveId(null)}
                >
                  <div 
                    // Re-enable pointer events for the card itself so we can click links
                    className="pointer-events-auto w-full h-full flex items-center justify-center p-4"
                    // If mouse leaves the entire overlay area, we close it (desktop)
                    onMouseLeave={() => setActiveId(null)}
                    // Prevent closing when clicking inside the card
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExpandedCard 
                      project={projects.find(p => p.id === activeId)!} 
                      onMouseLeave={() => setActiveId(null)}
                      onClose={() => setActiveId(null)}
                    />
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  // Load first frame as thumbnail
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const handleLoadedMetadata = () => {
      // Metadata loaded, seek to first frame
      video.currentTime = 0.1;
    };

    const handleLoadedData = () => {
      // Video data loaded, try to draw frame
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          setThumbnailLoaded(true);
        }
      }
    };

    const handleSeeked = () => {
      // Frame seeked, draw it
      const ctx = canvas.getContext('2d');
      if (ctx && video.videoWidth > 0 && video.videoHeight > 0) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setThumbnailLoaded(true);
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('seeked', handleSeeked);
    
    // Preload entire video for smooth playback on hover
    video.preload = 'auto';
    video.muted = true;
    video.load();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, []);

  return (
    <motion.div
      // layoutId is the magic key that connects this component to the ExpandedCard
      layoutId={`card-${project.id}`}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full h-full rounded-3xl overflow-hidden border bg-card shadow-xl cursor-pointer"
    >
      {/* Hidden video for thumbnail extraction - also helps with preloading */}
      <video
        ref={videoRef}
        src={project.video}
        className="absolute opacity-0 pointer-events-none"
        preload="auto"
        muted
        playsInline
        style={{ width: '1px', height: '1px' }}
      />
      
      {/* Canvas thumbnail - always render */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300 ${
          thumbnailLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectFit: 'cover' }}
      />
      
      {/* Fallback Gradient Placeholder */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 z-0 transition-opacity duration-300 ${
        thumbnailLoaded ? 'opacity-0' : 'opacity-30'
      }`} />
      
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
        <motion.h3 
          layoutId={`title-${project.id}`}
          className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-2"
        >
          {project.title}
        </motion.h3>
        <motion.p 
          layoutId={`desc-${project.id}`}
          className="text-base md:text-lg text-muted-foreground font-medium"
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
function ExpandedCard({ 
  project,
  onMouseLeave,
  onClose
}: { 
  project: typeof projects[0];
  onMouseLeave?: () => void;
  onClose?: () => void;
}) {
  const [hasVideoError, setHasVideoError] = useState(false);

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onMouseLeave={onMouseLeave}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[90vw] md:max-w-[800px] h-auto max-h-[85vh] bg-card rounded-3xl shadow-2xl overflow-hidden border relative flex flex-col"
    >
      {/* Close Button - Visible on mobile, hidden on desktop (hover handles it) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background transition-colors md:hidden"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
      
      {/* Top Half: Video Area */}
      <div className="relative h-[50%] min-h-[300px] md:min-h-[300px] w-full overflow-hidden bg-black">
        <video
          loop
          muted
          playsInline
          preload="auto"
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setHasVideoError(true)}
        >
          <source src={project.video} type={project.video.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
        </video>
        
        {/* Fallback Gradient if video fails */}
        {hasVideoError && (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
        )}
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Bottom Half: Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-start relative bg-card overflow-y-auto">
        <motion.h3 
          layoutId={`title-${project.id}`}
          className="text-2xl md:text-4xl font-bold mb-2"
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
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
            {project.detailedDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 md:px-3 py-1 bg-accent/50 border border-border/50 rounded-md text-xs font-semibold backdrop-blur-md">
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {project.github && (
              <Button size="sm" variant="default" className="gap-2 rounded-full bg-foreground text-background hover:bg-foreground/90" asChild>
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
