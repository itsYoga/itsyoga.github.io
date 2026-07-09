// Technical skills shown on the About page.
// To add a skill: add its name to a category here, then (optionally)
// map an icon for it in app/about/about-client.tsx (skillIcons).
// Skills without an icon render as a plain chip — that's fine.

export const skills: Record<string, string[]> = {
  Languages: ["Python", "TypeScript", "Rust", "Swift", "C++", "Java", "Dart", "SQL"],
  "ML / AI": ["PyTorch", "TensorFlow", "OpenCV", "YOLO", "ONNX", "scikit-learn"],
  "Frontend & Mobile": ["React", "Next.js", "SwiftUI", "Flutter", "Tauri", "Tailwind"],
  "Backend & Infra": ["FastAPI", "Node.js", "PostgreSQL", "Redis", "Firebase", "Supabase", "Docker"],
  "DevOps & Testing": ["Git", "GitHub Actions", "pytest", "Vitest", "Playwright"],
  "Daily Tools": ["Claude", "ChatGPT", "Cursor", "GitHub Copilot", "Gemini", "Figma"],
};
