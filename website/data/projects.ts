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
    id: "toneleak",
    title: "ToneLeak",
    shortDesc: "Does guitar tone transfer steal your touch? — independent research",
    detailedDescription:
      "Ongoing independent research auditing whether guitar-tone models change only the requested production tone, or also change performance attributes that should stay attributable to the source player: bends, vibrato, articulation, attack and dynamics. It does not assume tone and touch are separable — a deterministic effect applied to the exact same DI performance supplies counterfactual ground truth. A pilot audit of 2,040 published Fx embeddings found intended tone decodes at 99.3% balanced accuracy while source combination stays at 87.3%, so the public representation is tone-informative but not source-invariant. A held-out causal reference swap then confirmed the output shifts under an identical query and tone target. Projecting out the source-predictive subspace reduced leakage but raised target error — reported as a negative result rather than a fix.",
    tech: ["Python", "PyTorch", "scikit-learn", "librosa", "NumPy"],
    github: null,
    demo: null,
    video: null,
    accent: "from-rose-500 to-orange-500",
  },
  {
    id: "soredemo",
    title: "Soredemo",
    shortDesc: "Turning every release into a published demo — macOS, Swift 6",
    detailedDescription:
      "Teams ship 20+ times a year and demo two or three times. Soredemo turns each release into a demo: detected from GitHub, recorded once, derived into video and launch copy, reviewed by a person, and posted. The premise is measured rather than assumed — only 2.1% of 2,241 releases across 151 developer tools carried any visual demo. Architecturally it is an 11-target Swift package in three tiers: a deterministic core where the same input always gives the same output, a Capture tier that reads the world through ScreenCaptureKit and accessibility APIs, and a GPU Compositing tier. Two custom SwiftPM build plugins turn those boundaries into compile errors rather than conventions someone has to remember. 584 tests, with more test code than source. Recording and export work today; the derivation pipeline is still in progress.",
    tech: ["Swift 6", "SwiftUI", "ScreenCaptureKit", "AVFoundation", "Core Image", "SwiftPM plugins"],
    github: null,
    demo: null,
    video: null,
    accent: "from-slate-500 to-zinc-600",
  },
  {
    id: "riffnode",
    title: "RiffNode",
    shortDesc: "AI guitar effects studio — WWDC26 Swift Student Challenge Winner",
    detailedDescription:
      "Professional guitar effects studio built entirely with native Apple frameworks, selected as an Apple WWDC26 Swift Student Challenge Winner (one of 8 in Taiwan, 350 worldwide). The assistant is a tool-calling agent: it works the board through 13 rig tools over a multi-turn observe-act-report loop with undo, and every value it proposes is clamped to its parameter range before reaching the DSP. One inference protocol backs five interchangeable providers — on-device Apple Foundation Models by default and fully offline, Claude Code CLI, Codex CLI, Anthropic API, and a keyword fallback — with retrieval over an on-device NaturalLanguage embedding corpus. Underneath sits a low-latency AVAudioEngine pipeline driving 11 effects in a drag-and-drop chain, plus real-time vDSP FFT and autocorrelation pitch detection powering a tuner, metronome and chord detection.",
    tech: ["Swift 6", "SwiftUI", "AVFoundation", "Accelerate/vDSP", "Foundation Models", "NaturalLanguage"],
    award: "WWDC26 Winner",
    github: "https://github.com/RiffNode/RiffNode",
    demo: null,
    news: [
      { label: "中央社 CNA", href: "https://www.cna.com.tw/postwrite/chi/432895" },
      { label: "聯合報 UDN", href: "https://udn.com/news/story/6928/9489917" },
      { label: "自由時報 LTN", href: "https://3c.ltn.com.tw/news/65700" },
      { label: "經濟日報", href: "https://money.udn.com/money/story/5648/9439456" },
      { label: "ETtoday", href: "https://www.ettoday.net/news/20260414/3148433.htm" },
      { label: "科技新報 TechNews", href: "https://technews.tw/2026/04/13/2026-wwdc-swift-student-challenge-taiwan/" },
      { label: "數位時代 BusinessNext", href: "https://www.bnext.com.tw/article/90716/swift-student-challenge" },
      { label: "T客邦 TechBang", href: "https://www.techbang.com/posts/128826-apple-wwdc26-taiwan-students-ai-ar-winners" },
      { label: "蕃新聞 yam", href: "https://n.yam.com/Article/20260508583843" },
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
