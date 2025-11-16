"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Copy from "@/components/Copy";
import { 
  FileText, ExternalLink, Download, Code, Code2, Globe, Monitor, Smartphone, Brain
} from "lucide-react";
import { 
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiSwift, SiDart, SiPostgresql,
  SiPytorch, SiTensorflow, SiOpencv, SiScikitlearn, SiNumpy, SiPandas,
  SiReact, SiNextdotjs, SiFlutter, SiFastapi, SiNodedotjs, SiCelery,
  SiGit, SiDocker, SiFirebase, SiAmazon, SiGooglecloud, SiRedis, SiLinux, SiApple, SiRos,
  SiFigma, SiOpenai, SiGoogle, SiSupabase
} from "react-icons/si";
import { DiJava } from "react-icons/di";

// Helper function to get icon component for each skill
const getSkillIcon = (name: string) => {
  const iconMap: Record<string, any> = {
    // Programming Languages
    "Python": SiPython,
    "Java": DiJava,
    "C++": SiCplusplus,
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "Swift": SiSwift,
    "Dart": SiDart,
    "SQL": SiPostgresql,
    // ML/AI
    "PyTorch": SiPytorch,
    "TensorFlow": SiTensorflow,
    "OpenCV": SiOpencv,
    "scikit-learn": SiScikitlearn,
    "NumPy": SiNumpy,
    "Pandas": SiPandas,
    "CreateML": Brain, // No icon available, use Brain
    // Frameworks
    "React": SiReact,
    "Next.js": SiNextdotjs,
    "Flutter": SiFlutter,
    "FastAPI": SiFastapi,
    "Node.js": SiNodedotjs,
    "SwiftUI": Smartphone, // No icon available, use Smartphone
    "Celery": SiCelery,
    // Tools
    "Git": SiGit,
    "Docker": SiDocker,
    "Firebase": SiFirebase,
    "Supabase": SiSupabase,
    "AWS": SiAmazon,
    "GCP": SiGooglecloud,
    "PostgreSQL": SiPostgresql,
    "Redis": SiRedis,
    "Linux": SiLinux,
    "Windows": Monitor, // No icon available, use Monitor
    "macOS": SiApple,
    "ROS": SiRos,
    // AI Tools
    "Figma": SiFigma,
    "Cursor": Code2, // AI code editor - using Code2 icon
    "Gemini": SiGoogle,
    "Claude": Brain, // Anthropic Claude - using Brain icon for AI assistant
    "ChatGPT": SiOpenai,
    "GitHub Copilot": SiGit,
    // Languages
    "Mandarin (Native)": Globe,
    "English (Fluent TOEFL 110)": Globe,
    "Japanese (JLPT N3)": Globe,
  };
  return iconMap[name] || Code;
};

// Helper function to get URL for each skill
const getSkillUrl = (name: string): string | null => {
  const urlMap: Record<string, string> = {
    // Programming Languages
    "Python": "https://www.python.org/",
    "Java": "https://www.java.com/",
    "C++": "https://isocpp.org/",
    "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "TypeScript": "https://www.typescriptlang.org/",
    "Swift": "https://www.swift.org/",
    "Dart": "https://dart.dev/",
    "SQL": "https://www.postgresql.org/docs/",
    // Frameworks
    "React": "https://react.dev/",
    "Next.js": "https://nextjs.org/",
    "Flutter": "https://flutter.dev/",
    "FastAPI": "https://fastapi.tiangolo.com/",
    "Node.js": "https://nodejs.org/",
    "SwiftUI": "https://developer.apple.com/xcode/swiftui/",
    "Celery": "https://docs.celeryq.dev/",
    // Tools
    "Git": "https://git-scm.com/",
    "Docker": "https://www.docker.com/",
    "Firebase": "https://firebase.google.com/",
    "Supabase": "https://supabase.com/",
    "AWS": "https://aws.amazon.com/",
    "GCP": "https://cloud.google.com/",
    "PostgreSQL": "https://www.postgresql.org/",
    "Redis": "https://redis.io/",
    "Linux": "https://www.linux.org/",
    "Windows": "https://www.microsoft.com/windows",
    "macOS": "https://www.apple.com/macos/",
    "ROS": "https://www.ros.org/",
    // AI Tools
    "Figma": "https://www.figma.com/",
    "Cursor": "https://cursor.sh/",
    "Gemini": "https://deepmind.google/technologies/gemini/",
    "Claude": "https://www.anthropic.com/claude",
    "ChatGPT": "https://chat.openai.com/",
    "GitHub Copilot": "https://github.com/features/copilot",
  };
  return urlMap[name] || null;
};

// Skill categories
const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "Swift",
      "Dart",
      "SQL",
    ]
  },
  {
    title: "ML/AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "CreateML",
    ]
  },
  {
    title: "Frameworks",
    skills: [
      "React",
      "Next.js",
      "Flutter",
      "FastAPI",
      "Node.js",
      "SwiftUI",
      "Celery",
    ]
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Docker",
      "Firebase",
      "Supabase",
      "AWS",
      "GCP",
      "PostgreSQL",
      "Redis",
      "Linux",
      "Windows",
      "macOS",
      "ROS",
    ]
  },
  {
    title: "AI Tools",
    skills: [
      "Figma",
      "Cursor",
      "Gemini",
      "Claude",
      "ChatGPT",
      "GitHub Copilot",
    ]
  },
  {
    title: "Languages",
    skills: [
      "Mandarin (Native)",
      "English (Fluent TOEFL 110)",
      "Japanese (JLPT N3)",
    ]
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-background/50">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* --- Header Section --- */}
          <div className="pb-4 border-b">
            <div className="space-y-2">
              <Copy animateOnScroll={false} delay={0}>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] pb-1">
                  About Me
                </h1>
              </Copy>
              <Copy delay={0.02} animateOnScroll={false}>
                <p className="text-muted-foreground text-lg max-w-lg">
                  My academic background, technical expertise, and professional journey.
                </p>
              </Copy>
            </div>
          </div>

          {/* --- Education Section --- */}
          <div>
            <Card className="p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <Copy delay={0.3}>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6 md:mb-8">Education</h2>
              </Copy>
              <div className="space-y-8">
                <Copy delay={0.4}>
                  <div className="pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-semibold break-words">
                        National Taiwan Ocean University
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground whitespace-nowrap shrink-0">
                        Sep. 2022 – May 2026
                      </span>
                    </div>
                    <p className="text-sm md:text-base font-medium text-foreground/80 mb-1">
                      B.S. in Computer Science and Engineering
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Keelung, Taiwan
                    </p>
                  </div>
                </Copy>
                
                <Copy delay={0.5}>
                  <div className="pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-semibold break-words">
                        Cotter High School
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground whitespace-nowrap shrink-0">
                        Sep. 2019 – May 2021
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Winona, MN, US
                    </p>
                  </div>
                </Copy>
              </div>
            </Card>
          </div>

          {/* --- Skills Section --- */}
          <div>
            <Card className="p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <Copy delay={0.5}>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6 md:mb-8">Skills</h2>
              </Copy>
              <div className="space-y-8">
                {skillCategories.map((category, categoryIndex) => {
                  return (
                    <Copy key={category.title} delay={0.5 + (categoryIndex * 0.1)}>
                      <div className="pb-6 border-b last:border-b-0 last:pb-0">
                        <div className="mb-4">
                          <h3 className="text-lg md:text-xl font-semibold text-foreground">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                          {category.skills.map((skill, skillIndex) => {
                            const SkillIcon = getSkillIcon(skill);
                            const skillUrl = getSkillUrl(skill);
                            const content = (
                              <>
                                <SkillIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                                <Copy delay={0.5 + (categoryIndex * 0.1) + (skillIndex * 0.02)}>
                                  <span className="text-foreground/90 whitespace-nowrap">{skill}</span>
                                </Copy>
                              </>
                            );
                            
                            if (skillUrl) {
                              return (
                                <a
                                  key={skill}
                                  href={skillUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-3 py-2 bg-background border rounded-lg text-sm font-medium hover:border-primary hover:text-primary hover:bg-accent/30 cursor-pointer transition-all duration-300 group"
                                >
                                  {content}
                                </a>
                              );
                            }
                            
                            return (
                              <div 
                                key={skill}
                                className="inline-flex items-center gap-2 px-3 py-2 bg-background border rounded-lg text-sm font-medium hover:border-primary hover:text-primary hover:bg-accent/30 cursor-default transition-all duration-300 group"
                              >
                                {content}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Copy>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* --- Experience Section --- */}
          <div>
            <Card className="p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <Copy delay={0.6}>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6 md:mb-8">Experience</h2>
              </Copy>
              <div className="space-y-6">
                <Copy delay={0.7}>
                  <div className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground break-words">
                        Industrial Technology Research Institute (ITRI), Taiwan
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground whitespace-nowrap shrink-0">
                        Summer 2025
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3">
                      AI Image Recognition Intern
                    </p>
                    <ul className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 pl-6 pr-2">
                      <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">Optimized YOLO (You Only Look Once) object detection model achieving 99% accuracy</li>
                      <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">Developed and fine-tuned computer vision models for industrial image recognition applications</li>
                      <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">Implemented data preprocessing pipelines and model evaluation frameworks</li>
                      <li className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary">Collaborated with research team on deploying models for real-world production environments</li>
                    </ul>
                  </div>
                </Copy>
              </div>
            </Card>
          </div>

          {/* --- Personal Info Section --- */}
          <div>
            <Card className="p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <Copy delay={0.8}>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4 md:mb-6">About</h2>
              </Copy>
              <Copy delay={0.9}>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  I'm a Computer Science student passionate about AI, full-stack development, and creative problem-solving. 
                  I enjoy building projects that combine technical skills with real-world applications.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me behind a camera capturing moments or exploring new technologies 
                  to expand my knowledge and skills.
                </p>
              </Copy>
            </Card>
          </div>

          {/* --- Resume Preview Section --- */}
          <div>
            <Copy delay={1.0}>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4 md:mb-6">Resume Preview</h2>
            </Copy>
            <Card className="overflow-hidden rounded-3xl border bg-card shadow-sm">
              <div className="border-b bg-muted/50 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <FileText className="w-3.5 h-3.5" />
                  YuJia_resume.pdf
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
                  <a href="/YuJia_resume.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>
              
              <div className="bg-muted/20 w-full" style={{ minHeight: '600px', height: '80vh', maxHeight: '900px' }}>
                <iframe
                  src="/YuJia_resume.pdf#toolbar=0"
                  className="w-full h-full"
                  style={{ minHeight: '600px' }}
                  title="Resume Preview"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
