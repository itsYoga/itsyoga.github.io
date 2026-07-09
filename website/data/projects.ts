export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  detailedDescription: string;
  tech: string[];
  award?: string;
  github: string | null;
  demo: string | null;
  news?: { label: string; href: string }[];
  video: string | null;
  thumb?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: "riffnode",
    title: "RiffNode",
    shortDesc: "AI guitar effects studio — WWDC26 Swift Student Challenge Winner",
    detailedDescription:
      "Professional guitar effects app built entirely with native Apple frameworks, selected as an Apple WWDC26 Swift Student Challenge Winner (one of 8 in Taiwan, 350 worldwide). Features a dual-AI tone engine with on-device Apple Foundation Models, a low-latency AVAudioEngine pipeline driving 11 effects in a drag-and-drop signal chain, and hands-free control via Vision Framework face gestures with real-time vDSP FFT analysis and pitch detection.",
    tech: ["SwiftUI", "AVFoundation", "Accelerate/vDSP", "Foundation Models", "Vision"],
    award: "WWDC26 Winner",
    github: "https://github.com/RiffNode/RiffNode",
    demo: null,
    news: [
      { label: "UDN Coverage", href: "https://udn.com/news/story/6928/9489917" },
      { label: "CNA Coverage", href: "https://www.cna.com.tw/postwrite/chi/432895" },
    ],
    video: null,
    accent: "from-indigo-500 to-violet-500",
  },
  {
    id: "volleyball",
    title: "Volleyball Match Analysis",
    shortDesc: "AI-powered match analysis with ball tracking and action recognition",
    detailedDescription:
      "Deep learning system integrating multiple AI models for volleyball analysis. Features ball tracking (VballNet/U-Net), action recognition (YOLOv11m) for serve, spike, block, receive, set detection, and player tracking (YOLOv8 + Norfair). Full-stack app with React frontend and FastAPI backend.",
    tech: ["Python", "PyTorch", "YOLOv11", "React", "FastAPI", "OpenCV"],
    github: "https://github.com/DL-Volleyball-Analysis",
    demo: null,
    video: "/videos/volleyball-demo.mp4",
    thumb: "/images/projects/volleyball.jpg",
    accent: "from-orange-500 to-red-500",
  },
  {
    id: "archon",
    title: "Archon RWA Tokenization",
    shortDesc: "DeFi platform for Real-World Assets tokenization",
    detailedDescription:
      "Decentralized finance platform for tokenizing real-world assets. Features identity verification, asset management, redemption functionality, role-based access control, and Solidity smart contracts for fractional ownership.",
    tech: ["React", "Solidity", "TypeScript", "Web3.js"],
    github: "https://github.com/itsYoga/Archon",
    demo: null,
    video: null,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    id: "asl",
    title: "ASL Gesture Recognition",
    shortDesc: "iOS app for learning American Sign Language",
    detailedDescription:
      "iOS application for learning and practicing ASL using machine learning and computer vision. Real-time sign language recognition with SwiftUI interface, CoreML and CreateML for on-device processing.",
    tech: ["SwiftUI", "CreateML", "CoreML"],
    github: "https://github.com/itsYoga/ASLoading",
    demo: null,
    video: null,
    accent: "from-yellow-500 to-amber-500",
  },
  {
    id: "syncup",
    title: "SyncUp Social Calendar",
    shortDesc: "AI-powered scheduling assistant for groups",
    detailedDescription:
      "Flutter-based social calendar app with real-time sharing and friend management. Features an AI chatbot powered by Google Gemini that generates schedules and suggests meetup opportunities, plus location-based event suggestions with Google Maps integration.",
    tech: ["Flutter", "Firebase", "Google Gemini", "Dart"],
    github: "https://github.com/itsYoga/Sync",
    demo: null,
    video: null,
    accent: "from-purple-500 to-pink-500",
  },
  {
    id: "ghote",
    title: "Ghote Notes",
    shortDesc: "Local-first, AI-powered note-taking for macOS",
    detailedDescription:
      "Privacy-focused note-taking app with Tauri 2.0 and React 19. Features Obsidian-compatible markdown, Gemini AI integration, Lexical editor with slash commands, D3.js knowledge graph, local RAG with Transformers.js, and real-time collaboration.",
    tech: ["Tauri", "React", "Rust", "D3.js", "Supabase"],
    github: "https://github.com/Ghote-notes",
    demo: "https://ghote.dev",
    video: "/videos/ghote-demo.mp4",
    thumb: "/images/projects/ghote.jpg",
    accent: "from-green-500 to-emerald-500",
  },
];
