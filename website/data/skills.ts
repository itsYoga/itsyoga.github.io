// Technical skills shown on the About page.
// To add a skill: add its name to a category here, then (optionally)
// map an icon for it in app/about/about-client.tsx (skillIcons).
// Skills without an icon render as a plain chip — that's fine.

export const skills: Record<string, string[]> = {
  Languages: ["Python", "TypeScript", "Rust", "Swift", "C++", "Dart", "SQL"],
  "ML / AI": ["PyTorch", "TensorFlow", "OpenCV", "YOLO", "ONNX", "TensorRT", "ROS", "Jetson Nano", "scikit-learn", "RAG"],
  "Apple Platforms": ["SwiftUI", "AVFoundation", "Accelerate/vDSP", "ScreenCaptureKit", "Core Image", "Foundation Models"],
  "Frontend & Mobile": ["React", "Next.js", "Tailwind", "Flutter"],
  "Backend & Infra": ["FastAPI", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Docker", "GCP"],
  "DevOps & Testing": ["Git", "GitHub Actions", "pytest", "SwiftPM"],
  "Daily Tools": ["Claude", "ChatGPT", "Cursor", "GitHub Copilot", "Gemini", "Figma"],
};
