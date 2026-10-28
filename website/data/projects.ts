export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  detailedDescription: string;
  tech: string[];
  award?: string;
  github: string | null;
  demo: string | null;
  /** The demo button's text; "Live Demo" when omitted. */
  demoLabel?: string;
  /** Further reading: a report, a write-up, a project site. */
  links?: { label: string; href: string }[];
  news?: { label: string; href: string }[];
  video: string | null;
  thumb?: string;
  /** One line each: who did what, when, with whom. */
  role?: string;
  period?: string;
  team?: string;
  /** The few numbers a reader should leave with. Every one must be sourced. */
  metrics?: { value: string; label: string }[];
  /** Screenshots, photos and clips shown under the description. */
  gallery?: { src: string; caption: string; kind?: "image" | "video"; poster?: string }[];
  accent: string;
}

export const projects: Project[] = [
  {
    id: "riffnode",
    role: "Solo developer",
    period: "2026",
    team: "Individual",
    metrics: [
      { value: "1 of 350", label: "WWDC26 Swift Student Challenge winners worldwide (8 in Taiwan)" },
      { value: "20", label: "classic pedals voiced after their circuits, plus 5 amps" },
      { value: "132–135 dB", label: "SNR of the Neural Amp Modeler port against the reference renderer" },
    ],
    title: "RiffNode",
    shortDesc: "A visual guitar effects playground for iPad and Mac — on device, offline",
    detailedDescription:
      "A guitar effects studio built entirely from native Apple frameworks, selected as an Apple WWDC26 Swift Student Challenge Winner (one of 8 in Taiwan, 350 worldwide). Pedals drag into a signal chain laid out like a real board — guitar and cable, pedals, amp, cabinet — and the Signal Lab draws each pedal's input against its output live, so distortion flattening the peaks or a flanger's comb of notches becomes something you can see.\n\nEleven effect types run on AVAudioEngine, the waveshapers and modulation in a custom in-process Audio Unit; twenty classic stompboxes and five amps are voiced after how their circuits work, the cable is modelled as a resonant low-pass, and a Swift port of Neural Amp Modeler's WaveNet on Accelerate matches the reference renderer at 132–135 dB SNR.\n\nThe Tone Assistant turns a described sound into a board with Foundation Models — every value clamped to its parameter range before it reaches the DSP — and labels when an offline matcher answered instead. Vision face tracking makes it hands-free: nod to change presets, open your mouth for a wah. No account, no network: audio, camera frames and prompts never leave the device.",
    tech: ["Swift 6", "SwiftUI", "AVFoundation", "Audio Unit", "Accelerate/vDSP", "Foundation Models", "Vision"],
    award: "WWDC26 Winner",
    github: "https://github.com/RiffNode/riffnode-wwdc2026",
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
    thumb: "/images/projects/riffnode/board.jpg",
    gallery: [
      { src: "/images/projects/riffnode/assistant.jpg", caption: "Tone Assistant — “surf rock”, answered on device by Apple Intelligence" },
      { src: "/images/projects/riffnode/stage.jpg", caption: "Stage Mode — a real board: tuner first, patch cables, one tap to stomp" },
      { src: "/images/projects/riffnode/learn.jpg", caption: "Pedal Library — twenty classics: see the circuit, hear it, put it on your board" },
      { src: "/images/projects/riffnode/amp.jpg", caption: "Amp & Cabinet — the speaker roll-off that tames fizzy distortion" },
      { src: "/images/projects/riffnode/interview.jpg", caption: "Interviewed about RiffNode after the WWDC26 announcement" },
      { src: "/images/projects/riffnode/demo-day.jpg", caption: "Demoing RiffNode live with a guitar at Apple's Taipei office" },
    ],
    accent: "from-indigo-500 to-violet-500",
  },
  {
    id: "volleyball",
    role: "Team lead (capstone), then sole researcher",
    period: "Nov. 2024 – present",
    team: "3-person capstone team, then solo",
    metrics: [
      { value: "0.945", label: "validation mAP@0.5, capstone action detector" },
      { value: "0.10 m", label: "median court-position error on held-out broadcast clips" },
      { value: "0.303 → 0.678", label: "action macro F1 on 16 unseen matches" },
      { value: "0.742", label: "rally detection F1 on held-out broadcast matches" },
    ],
    title: "Volleyball Match Analysis",
    shortDesc: "One camera to a point-by-point match record: court, players, 3D ball flights and rallies",
    detailedDescription:
      "Turns one camera's recording of a volleyball match into a reviewable, point-by-point record. It began as my NTOU CSE senior capstone — a three-person team I led, with a 50% share of the work — combining VballNet ball tracking and in/out landing judgment with a YOLOv11m action detector (validation mAP@0.5 0.945 over 24,806 images from two public datasets), and won Silver in the department's Software Development Special Award and an Honorable Mention in its 2025 capstone competition.\n\nI have since continued it on my own as a research project and rebuilt the pipeline in stages: court registration that follows a panning, zooming camera (0.10 m median court-position error on held-out broadcast clips), player tracking with YOLO26s + BoT-SORT (IDF1 0.690, HOTA 0.636 on SportsMOT volleyball), a per-player action classifier that lifts macro F1 from 0.303 to 0.678 on 16 unseen matches, shirt numbers voted over time, ballistic 3D ball flights anchored to the touching player, and a rally classifier (F1 0.742 on held-out broadcast matches).\n\nEach stage is versioned and cached and reports why it could not produce a result, and every number comes from a script and a labelled split. The results feed a React + FastAPI review app with a timeline, 2D and 3D tactics boards and per-player statistics.",
    tech: ["Python", "PyTorch", "YOLO", "VballNet", "BoT-SORT", "OpenCV", "FastAPI", "React", "Docker"],
    award: "Capstone Silver Award",
    github: "https://github.com/DL-Volleyball-Analysis/volleyball-analysis",
    demo: "https://dl-volleyball-analysis.github.io/volleyvision-website/",
    demoLabel: "Project Website",
    links: [{ label: "Capstone Report", href: "https://github.com/DL-Volleyball-Analysis/capstone-report" }],
    video: "/videos/volleyball-analysis.mp4",
    thumb: "/images/projects/volleyball/analysis-poster.jpg",
    gallery: [
      { src: "/images/projects/volleyball/review-app.jpg", caption: "Match review app — court lines and tracked players on the video, rallies and a timeline" },
      { src: "/images/projects/volleyball/boards-and-stats.jpg", caption: "2D and 3D tactics boards and the per-player statistics table" },
      { src: "/videos/volleyball-demo.mp4", kind: "video", poster: "/images/projects/volleyball.jpg", caption: "The capstone version (2025): ball tracking and action recognition in the first web app" },
      { src: "/images/projects/volleyball/poster.jpg", caption: "Capstone poster" },
    ],
    accent: "from-orange-500 to-red-500",
  },
  {
    id: "soredemo",
    role: "Solo developer",
    period: "2026 – present",
    team: "Individual",
    metrics: [
      { value: "11", label: "Swift package targets in three enforced tiers" },
      { value: "0", label: "third-party dependencies" },
      { value: "10", label: "interface languages" },
    ],
    title: "Soredemo",
    shortDesc: "A macOS screen recorder that zooms in on what you click — and says why",
    detailedDescription:
      "A screen recorder that lives in the menu bar and the notch, and keeps its reasons. Record a display, a window, a dragged-out area or a plugged-in iPhone or iPad, and the editor opens with the work already done: every click matched to the control under it through the accessibility APIs, the camera framing that control rather than just the cursor, and a review panel that says why each click was or was not zoomed, so the user can overrule any of it.\n\nAround that: a camera bubble that moves to another corner when the cursor comes near, music that ducks under speech, silences that cut themselves, window-follow capture, on-device captions with word-level timing, and one take exported to 16:9, 9:16 and 1:1 in H.264, HEVC, ProRes or GIF. Nothing leaves the Mac — no account, no upload, zero third-party dependencies.\n\nUnderneath, the core is an eleven-target Swift package in three tiers: a deterministic core where the same input always gives the same output, a Capture tier over ScreenCaptureKit and the accessibility APIs, and a GPU Compositing tier, with two custom SwiftPM build plugins turning those boundaries into compile errors. Interface in ten languages, MIT licensed. Recording, editing and export work end to end; the derivation pipeline is still in progress.",
    tech: ["Swift 6", "SwiftUI", "ScreenCaptureKit", "AVFoundation", "Core Image", "Metal", "SpeechAnalyzer", "SwiftPM plugins"],
    github: null,
    demo: "https://soredemo.dev",
    demoLabel: "soredemo.dev",
    video: null,
    thumb: "/images/projects/soredemo/hero.jpg",
    gallery: [
      { src: "/images/projects/soredemo/features.jpg", caption: "The recorder panel, redrawn with the app's own strings on soredemo.dev" },
    ],
    accent: "from-slate-500 to-zinc-600",
  },
  {
    id: "toneleak",
    role: "Independent researcher",
    period: "Aug. 2026 – present",
    team: "Individual",
    metrics: [
      { value: "99.3%", label: "intended-tone balanced accuracy (chance 33.3%)" },
      { value: "87.3%", label: "source combination still decodable (chance 50%)" },
      { value: "2,040", label: "published Fx embeddings audited" },
    ],
    title: "ToneLeak",
    shortDesc: "Does guitar tone transfer steal your touch? — independent research",
    detailedDescription:
      "Ongoing independent research auditing whether guitar-tone models change only the requested production tone, or also change performance attributes that should stay attributable to the source player: bends, vibrato, articulation, attack and dynamics. It does not assume tone and touch are separable — a deterministic effect applied to the exact same DI performance supplies counterfactual ground truth.\n\nA pilot audit of 2,040 published Fx embeddings found intended tone decodes at 99.3% balanced accuracy while source combination stays at 87.3%, so the public representation is tone-informative but not source-invariant. A held-out causal reference swap then confirmed the output shifts under an identical query and tone target.\n\nProjecting out the source-predictive subspace reduced leakage but raised target error — reported as a negative result rather than a fix.",
    tech: ["Python", "PyTorch", "scikit-learn", "librosa", "NumPy"],
    github: "https://github.com/missing-fundamental/ToneLeak",
    demo: null,
    video: null,
    thumb: "/images/projects/toneleak.jpg",
    accent: "from-rose-500 to-orange-500",
  },
  {
    id: "oops",
    role: "Solo developer",
    period: "Jul. 2026",
    team: "Individual",
    metrics: [
      { value: "4", label: "verbs: run, diff, undo, commit" },
      { value: "O(1)", label: "undo on both backends" },
      { value: "2", label: "backends: Linux OverlayFS, macOS APFS" },
    ],
    title: "oops",
    shortDesc: "Any command can be undone — a sandbox layer for the AI-agent era",
    detailedDescription:
      "A command-line safety layer in Rust: `oops run` executes any command inside a lightweight copy-on-write filesystem sandbox, `oops diff` shows what it created, modified or deleted, and `oops undo` or `oops commit` decides whether it ever touches your files — so a coding agent can run at full speed without permission-prompt fatigue.\n\nTwo backends with honestly different guarantees: on Linux, rootless OverlayFS inside a nested user namespace the wrapped command cannot dismantle (\"it never happened\"); on macOS, APFS clonefile snapshot-and-restore (\"it can always be put back\"), with O(1) undo on both. On any other platform it refuses to run rather than run unsandboxed. `oops diff --porcelain` is a stable, byte-order-sorted interface for scripts and agents. Published on crates.io as oops-sh.",
    tech: ["Rust", "OverlayFS", "Linux namespaces", "APFS"],
    github: "https://github.com/itsYoga/oops",
    demo: null,
    links: [{ label: "crates.io", href: "https://crates.io/crates/oops-sh" }],
    video: null,
    thumb: "/images/projects/oops.jpg",
    accent: "from-zinc-600 to-slate-800",
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
