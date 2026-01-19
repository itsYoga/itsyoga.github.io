"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Copy from "@/components/Copy";
import EditorialHeader from "@/components/EditorialHeader";
import Magnetic from "@/components/Magnetic";
import {
  FileText, ExternalLink, MapPin, Calendar, Briefcase, GraduationCap, Download
} from "lucide-react";
import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiSwift, SiDart, SiPostgresql,
  SiPytorch, SiTensorflow, SiOpencv, SiScikitlearn, SiNumpy, SiPandas,
  SiReact, SiNextdotjs, SiFlutter, SiFastapi, SiNodedotjs, SiCelery,
  SiGit, SiDocker, SiFirebase, SiAmazon, SiGooglecloud, SiRedis, SiLinux, SiApple, SiRos,
  SiFigma, SiOpenai, SiGoogle, SiSupabase
} from "react-icons/si";
import { DiJava } from "react-icons/di";

// Skill icons mapping
const skillIcons: Record<string, any> = {
  "Python": SiPython, "Java": DiJava, "C++": SiCplusplus, "JavaScript": SiJavascript,
  "TypeScript": SiTypescript, "Swift": SiSwift, "Dart": SiDart, "SQL": SiPostgresql,
  "PyTorch": SiPytorch, "TensorFlow": SiTensorflow, "OpenCV": SiOpencv,
  "scikit-learn": SiScikitlearn, "NumPy": SiNumpy, "Pandas": SiPandas,
  "React": SiReact, "Next.js": SiNextdotjs, "Flutter": SiFlutter, "FastAPI": SiFastapi,
  "Node.js": SiNodedotjs, "Celery": SiCelery, "Git": SiGit, "Docker": SiDocker,
  "Firebase": SiFirebase, "Supabase": SiSupabase, "AWS": SiAmazon, "GCP": SiGooglecloud,
  "PostgreSQL": SiPostgresql, "Redis": SiRedis, "Linux": SiLinux, "macOS": SiApple,
  "ROS": SiRos, "Figma": SiFigma, "Gemini": SiGoogle, "ChatGPT": SiOpenai,
};

// Condensed skills data
const skills = {
  "Languages": ["Python", "TypeScript", "JavaScript", "Swift", "Java", "C++", "Dart", "SQL"],
  "AI / ML": ["PyTorch", "TensorFlow", "OpenCV", "scikit-learn", "NumPy", "Pandas"],
  "Frontend": ["React", "Next.js", "Flutter", "Tailwind CSS"],
  "Backend": ["FastAPI", "Node.js", "Supabase", "Firebase", "PostgreSQL", "Redis"],
  "DevOps": ["Git", "Docker", "AWS", "GCP", "Linux"],
};

const education = [
  {
    school: "National Taiwan Ocean University",
    degree: "B.S. in Computer Science and Engineering",
    location: "Keelung, Taiwan",
    period: "2022 – 2026",
  },
  {
    school: "Cotter High School",
    degree: "High School Diploma",
    location: "Winona, MN, USA",
    period: "2019 – 2021",
  },
];

const experience = [
  {
    company: "Industrial Technology Research Institute (ITRI)",
    role: "AI Image Recognition Intern",
    location: "Taiwan",
    period: "Summer 2025",
    highlights: [
      "Optimized YOLO object detection model achieving 99% accuracy",
      "Developed computer vision models for industrial applications",
      "Built data preprocessing pipelines and evaluation frameworks",
    ],
  },
];

const languages = [
  { name: "Mandarin", level: "Native" },
  { name: "English", level: "Fluent", note: "TOEFL 110" },
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
              subtitle="Computer Science student passionate about AI, full-stack development, and creative problem-solving."
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
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 max-w-3xl">
                I build intelligent systems and craft digital experiences. Currently pursuing my degree in Taiwan,
                with experience in AI research and a passion for turning complex problems into elegant solutions.
              </p>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items], idx) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold mb-4 text-foreground">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => {
                        const Icon = skillIcons[skill];
                        return (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/50 border border-border/50 rounded-full text-sm text-foreground/80 hover:border-primary/50 hover:bg-accent transition-colors"
                          >
                            {Icon && <Icon className="w-3.5 h-3.5" />}
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
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="w-5 h-5 text-primary" />
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
