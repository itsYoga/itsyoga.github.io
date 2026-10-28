"use client";

import { motion } from "framer-motion";
import EditorialHeader from "@/components/EditorialHeader";
import {
  ExternalLink, MapPin, Calendar, Download, Camera, Trophy
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
import { awards, certificates, education, experience, languages, lifePhotos } from "@/data/profile";
import { site, socials } from "@/data/site";

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

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-16 lg:mb-24">
            <EditorialHeader
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
                  I&apos;m a Computer Science and Engineering graduate of National Taiwan Ocean University
                  (Class of 2026). RiffNode — a guitar effects studio
                  built entirely with native Apple frameworks —{" "}
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
                  At ITRI I trained and deployed multi-task driving-perception models down to a Jetson Nano.
                  I led my capstone team&apos;s volleyball analysis system, which won the department&apos;s
                  Software Development Silver Award, and I have kept building it as a research project —
                  from one camera to the court in metres, tracked players and 3D ball flights. Lately I have been
                  auditing whether guitar-tone models quietly change a player&apos;s touch, and building a macOS
                  app whose architecture the compiler enforces. I like working across the stack — on-device ML,
                  audio DSP, systems Swift — and turning hard problems into things people can actually use.
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

            {/* Experience Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="pill-label mb-6">Experience</h2>
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
                    {exp.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">·</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Awards Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="pill-label mb-6">Awards</h2>
              <div className="space-y-12">
                {awards.map((award) => (
                  <div key={award.title} className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 md:gap-10 items-start">
                    <div className="border-l-2 border-primary/30 pl-6 py-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Trophy className="w-3.5 h-3.5" />
                        {award.date}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 leading-snug">{award.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">{award.detail}</p>
                      <Link href={award.href} className="text-sm text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary">
                        See the project
                      </Link>
                    </div>
                    <div className={`grid gap-3 ${award.photos.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                      {award.photos.map((photo) => (
                        <a
                          key={photo.src}
                          href={photo.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-xl overflow-hidden border border-border/50 bg-accent/30 hover:border-border transition-colors"
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            className={`w-full object-cover ${award.photos.length === 3 ? "aspect-square" : "aspect-[3/4]"}`}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Certificates & Volunteering */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="pill-label mb-6">Certificates &amp; Volunteering</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
                {certificates.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="aspect-[4/3] rounded-xl border border-border/60 bg-accent/30 p-3 overflow-hidden group-hover:border-border transition-colors">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        loading="lazy"
                        className="w-full h-full object-contain drop-shadow-sm"
                      />
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground tabular-nums">{cert.date}</div>
                    <h3 className="mt-0.5 text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{cert.detail}</p>
                  </a>
                ))}
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="pill-label mb-6">Technical Skills</h2>
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

            {/* Education and Languages — one row: a timeline that matches Experience, languages beside it */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_17rem] gap-14 lg:gap-16"
            >
              <div>
                <h2 className="pill-label mb-6">Education</h2>
                <ol className="space-y-8">
                  {education.map((edu) => (
                    <li key={edu.school} className="border-l-2 border-primary/30 pl-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-x-6 gap-y-1">
                        <div className="flex items-center gap-3.5">
                          {edu.logo && (
                            <span className="w-10 h-10 shrink-0 rounded-lg bg-white border border-border/60 grid place-items-center overflow-hidden">
                              <Image src={edu.logo} alt="" width={32} height={32} className="object-contain" />
                            </span>
                          )}
                          <div>
                            <h3 className="font-semibold text-foreground leading-snug">{edu.school}</h3>
                            <p className="text-sm text-foreground/70">{edu.degree}</p>
                          </div>
                        </div>
                        <div className={`text-sm text-muted-foreground sm:text-right shrink-0 sm:pt-0.5 ${edu.logo ? "pl-[3.375rem] sm:pl-0" : ""}`}>
                          <div className="tabular-nums">{edu.period}</div>
                          <div className="text-xs">{edu.location}</div>
                        </div>
                      </div>
                      {edu.coursework?.map((group) => (
                        <div key={group.title} className="mt-4">
                          <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{group.title}</h4>
                          <p className="text-sm leading-relaxed text-foreground/80">
                            {group.courses.map((course, i) => (
                              <span key={course}>
                                {i > 0 && <span className="mx-1.5 text-muted-foreground/40" aria-hidden="true">· </span>}
                                <span className="whitespace-nowrap">{course}</span>
                              </span>
                            ))}
                          </p>
                        </div>
                      ))}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="pill-label mb-6">Languages</h2>
                <dl className="divide-y divide-border border-y border-border">
                  {languages.map((lang) => (
                    <div key={lang.name} className="py-3.5">
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="font-semibold text-foreground">{lang.name}</dt>
                        <dd className="text-sm text-foreground/70">{lang.level}</dd>
                      </div>
                      {lang.note && <dd className="mt-0.5 text-xs text-muted-foreground tabular-nums">{lang.note}</dd>}
                    </div>
                  ))}
                </dl>
              </div>
            </motion.section>

            {/* Beyond Code Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="pill-label mb-6">Beyond Code</h2>
              <p className="text-lg leading-relaxed text-foreground/75 max-w-3xl mb-6">
                Off the clock I captain my department&apos;s volleyball team, play guitar, and develop
                film as darkroom officer of NTU&apos;s photography club. I&apos;m a PADI Open Water
                diver, paddled the 10 km kayak crossing to Keelung Islet, and spent two days
                volunteering at the Chengdu Research Base of Giant Panda Breeding. Most of it ends up
                in front of a camera sooner or later — the results live on the Photography page.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {lifePhotos.map((photo) => (
                  <div
                    key={photo.src}
                    className={`rounded-xl overflow-hidden border border-border/50 bg-accent/30 ${photo.wide ? "col-span-2 row-span-2" : ""}`}
                  >
                    <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-full object-cover aspect-square" />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/photography"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 transition-all"
                >
                  <Camera className="w-4 h-4" />
                  View Photography
                </Link>
                <a
                  href={socials.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#1DB954]/10 text-[#1DB954] hover:bg-[#1DB954]/20 border border-[#1DB954]/30 transition-all"
                >
                  <SiSpotify className="w-4 h-4" />
                  My Spotify
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.section>

            {/* Resume Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="pill-label mb-6">Resume</h2>
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
                    <a
                      href={site.resume}
                      download
                      className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg hover:bg-accent transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                    <a
                      href={site.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg hover:bg-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open
                    </a>
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
