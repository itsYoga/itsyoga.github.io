"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Copy from "@/components/Copy";
import EditorialHeader from "@/components/EditorialHeader";
import Magnetic from "@/components/Magnetic";
import {
  FileText, ExternalLink, MapPin, Calendar, Briefcase, GraduationCap, Download, Camera
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiSpotify } from "react-icons/si";
import type { IconType } from "react-icons";
import {
  SiPython, SiCplusplus, SiTypescript, SiSwift, SiDart, SiPostgresql,
  SiPytorch, SiTensorflow, SiOpencv, SiOnnx, SiScikitlearn,
  SiReact, SiNextdotjs, SiFlutter, SiFastapi, SiNodedotjs,
  SiDocker, SiFirebase, SiRedis, SiRust, SiTauri, SiTailwindcss,
  SiOpenjdk, SiSupabase, SiGit, SiGithubactions, SiPytest, SiVitest,
  SiClaude, SiOpenai, SiGithubcopilot, SiGooglegemini, SiFigma,
} from "react-icons/si";
import { skills } from "@/data/skills";

// Icon per skill — skills without an entry render as plain chips.
const skillIcons: Record<string, IconType> = {
  "Python": SiPython, "TypeScript": SiTypescript, "Rust": SiRust, "Swift": SiSwift,
  "Dart": SiDart, "C++": SiCplusplus, "Java": SiOpenjdk,
  "PyTorch": SiPytorch, "TensorFlow": SiTensorflow, "OpenCV": SiOpencv,
  "ONNX": SiOnnx, "scikit-learn": SiScikitlearn,
  "React": SiReact, "Next.js": SiNextdotjs, "SwiftUI": SiSwift, "Flutter": SiFlutter,
  "Tauri": SiTauri, "Tailwind": SiTailwindcss,
  "FastAPI": SiFastapi, "Node.js": SiNodedotjs, "PostgreSQL": SiPostgresql,
  "Redis": SiRedis, "Firebase": SiFirebase, "Supabase": SiSupabase, "Docker": SiDocker,
  "Git": SiGit, "GitHub Actions": SiGithubactions, "pytest": SiPytest, "Vitest": SiVitest,
  "Claude": SiClaude, "ChatGPT": SiOpenai, "GitHub Copilot": SiGithubcopilot,
  "Gemini": SiGooglegemini, "Figma": SiFigma,
};

const education = [
  {
    school: "National Taiwan Ocean University",
    degree: "B.S. in Computer Science and Engineering",
    location: "Keelung, Taiwan",
    period: "2022 – 2026",
    logo: "/images/schools/ntou.png",
  },
  {
    school: "Cotter High School",
    degree: "High School Diploma",
    location: "Winona, MN, USA",
    period: "2019 – 2021",
    logo: "/images/schools/cotter.png",
  },
];

const experience = [
  {
    company: "ITRI (Industrial Technology Research Institute)",
    role: "AI Image Recognition Intern",
    department: "Electronics and Optoelectronics Research Laboratories",
    location: "Hsinchu, Taiwan",
    period: "Jun. 2025 – Aug. 2025",
    highlights: [
      "Optimized multi-task YOLO model for autonomous driving, improving inference speed while maintaining driving area accuracy and detection recall",
      "Implemented real-time image streaming and detection result transmission via Ethernet/ROS, processing 30 FPS with sub-50ms latency",
      "Applied neural network pruning techniques to YOLO models for edge deployment",
      "Supported research by reproducing and exploring SOTA models to benchmark performance",
    ],
  },
];

const languages = [
  { name: "Mandarin", level: "Native" },
  { name: "English", level: "Fluent", note: "TOEFL 110 · TOEIC 920" },
  { name: "Japanese", level: "Intermediate", note: "JLPT N3" },
];

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-16 lg:mb-24">
            <EditorialHeader
              index="01"
              title="About Me"
              subtitle="AI engineer and photographer based in Taipei, Taiwan."
              size="large"
            />
          </div>

          {/* Main Content Grid */}
          <div className="space-y-20">

            {/* Bio Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-center">
              <div className="space-y-6 md:col-span-3">
                <p className="text-xl md:text-2xl leading-relaxed text-foreground/80">
                  I'm a Computer Science graduate from National Taiwan Ocean University (Class of 2026).
                  My most recent project, RiffNode — an AI guitar effects studio built entirely with
                  native Apple frameworks —{" "}
                  <a
                    href="https://udn.com/news/story/6928/9489917"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
                  >
                    won the Apple WWDC26 Swift Student Challenge
                  </a>.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/70">
                  At ITRI I optimized real-time YOLO vision models for autonomous driving, and my capstone
                  team built a deep-learning volleyball analytics platform. I love working across the stack —
                  from on-device ML and audio DSP to React frontends — and turning complex problems into
                  products people can actually use.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg md:rotate-1 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/photography/me/DSCF0462.JPG"
                    alt="YuJia Liang"
                    width={800}
                    height={1000}
                    className="w-full aspect-[4/5] object-cover"
                    priority
                  />
                </div>
              </div>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">Technical Skills</h2>
              <div className="border-t border-border/60">
                {Object.entries(skills).map(([category, items]) => (
                  <div
                    key={category}
                    className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-5 border-b border-border/60"
                  >
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground pt-2.5">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {items.map((skill) => {
                        const Icon = skillIcons[skill];
                        return (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[15px] text-foreground/85 hover:bg-accent/60 hover:text-foreground transition-colors"
                          >
                            {Icon && <Icon className="w-4 h-4 opacity-80" />}
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">Experience</h2>
              <div className="space-y-8">
                {experience.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-primary/30 pl-6 py-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-foreground/70">{exp.company}</p>
                        {exp.department && <p className="text-sm text-muted-foreground">{exp.department}</p>}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">·</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">Education</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-accent/30 border border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                        {edu.logo ? (
                          <Image
                            src={edu.logo}
                            alt={`${edu.school} logo`}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{edu.school}</h3>
                        <p className="text-sm text-foreground/70 mb-2">{edu.degree}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {edu.location}
                          </span>
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Languages Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">Languages</h2>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-accent/30 border border-border/50">
                    <span className="font-semibold text-foreground">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                    {lang.note && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{lang.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Beyond Code Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">Beyond Code</h2>
              <p className="text-lg leading-relaxed text-foreground/75 max-w-3xl mb-6">
                Off the clock I captain my department&apos;s volleyball team, scuba dive, play guitar,
                and develop film as darkroom officer of NTU&apos;s photography club. Most of it ends up
                in front of a camera sooner or later — the results live on the Photography page.
              </p>
              <div className="flex flex-wrap gap-3">
                <Magnetic strength={0.3} radius={60}>
                  <Link
                    href="/photography"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 transition-all"
                  >
                    <Camera className="w-4 h-4" />
                    View Photography
                  </Link>
                </Magnetic>
                <Magnetic strength={0.3} radius={60}>
                  <a
                    href="https://open.spotify.com/user/21t6mkxonp73ou4n3ahjddbkq?si=78805a09a5b0464a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#1DB954]/10 text-[#1DB954] hover:bg-[#1DB954]/20 border border-[#1DB954]/30 transition-all"
                  >
                    <SiSpotify className="w-4 h-4" />
                    My Spotify
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Magnetic>
              </div>
            </motion.section>

            {/* Resume Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">Resume</h2>
              <div className="rounded-2xl border border-border overflow-hidden bg-card">
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-accent/50 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">YuJia_resume.pdf</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Magnetic strength={0.3} radius={50}>
                      <a
                        href="/YuJia_resume.pdf"
                        download
                        className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg hover:bg-accent transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </Magnetic>
                    <Magnetic strength={0.3} radius={50}>
                      <a
                        href="/YuJia_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg hover:bg-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open
                      </a>
                    </Magnetic>
                  </div>
                </div>

                {/* PDF Preview */}
                <div className="bg-muted/20" style={{ height: '70vh', minHeight: '500px', maxHeight: '800px' }}>
                  <iframe
                    src="/YuJia_resume.pdf#toolbar=0"
                    className="w-full h-full"
                    title="Resume Preview"
                  />
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </section>
    </main>
  );
}
