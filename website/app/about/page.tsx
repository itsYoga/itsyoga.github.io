"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Copy from "@/components/Copy";
import { FileText, ExternalLink, Download } from "lucide-react";

const skills = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "OpenCV", "PyTorch", "Swift", "Flutter", "Solidity",
  "Firebase", "Node.js", "Tailwind CSS"
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

          {/* --- Content Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Education Card (Spans 2 columns on desktop) */}
            <div className="lg:col-span-2 h-full">
              <Card className="h-full p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <Copy delay={0.3}>
                  <h2 className="text-2xl font-bold tracking-tight mb-8">Education</h2>
                </Copy>
                <div className="space-y-8">
                  <Copy delay={0.4}>
                    <div className="pb-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">
                          National Taiwan Ocean University
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground whitespace-nowrap">
                          Sep. 2022 – May 2026
                        </span>
                      </div>
                      <p className="text-base font-medium text-foreground/80 mb-1">
                        B.S. in Computer Science and Engineering
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Keelung, Taiwan
                      </p>
                    </div>
                  </Copy>
                  
                  <Copy delay={0.5}>
                    <div className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">
                          Cotter High School
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground whitespace-nowrap">
                          Sep. 2019 – May 2021
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Winona, MN
                      </p>
                    </div>
                  </Copy>
                </div>
              </Card>
            </div>

            {/* Technical Skills Card (Spans 1 column) */}
            <div className="lg:col-span-1 h-full">
              <Card className="h-full p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <Copy delay={0.5}>
                  <h2 className="text-2xl font-bold tracking-tight mb-8">Tech Stack</h2>
                </Copy>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Copy key={skill} delay={0.5 + (index * 0.05)}>
                      <div className="px-3 py-1.5 bg-background border rounded-lg text-sm font-medium hover:border-primary hover:text-primary cursor-default transition-colors duration-300">
                        {skill}
                      </div>
                    </Copy>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* --- Experience Section --- */}
          <div>
            <Card className="p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <Copy delay={0.6}>
                <h2 className="text-2xl font-bold tracking-tight mb-8">Experience</h2>
              </Copy>
              <div className="space-y-6">
                <Copy delay={0.7}>
                  <div className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        Industrial Technology Research Institute (ITRI), Taiwan
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground whitespace-nowrap">
                        Summer 2025
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      AI Image Recognition Intern
                    </p>
                    <ul className="text-base text-muted-foreground leading-relaxed space-y-2 list-disc list-outside ml-6">
                      <li>Optimized YOLO (You Only Look Once) object detection model achieving 99% accuracy</li>
                      <li>Developed and fine-tuned computer vision models for industrial image recognition applications</li>
                      <li>Implemented data preprocessing pipelines and model evaluation frameworks</li>
                      <li>Collaborated with research team on deploying models for real-world production environments</li>
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
                <h2 className="text-2xl font-bold tracking-tight mb-6">About</h2>
              </Copy>
              <Copy delay={0.9}>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a Computer Science student passionate about AI, full-stack development, and creative problem-solving. 
                  I enjoy building projects that combine technical skills with real-world applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me behind a camera capturing moments or exploring new technologies 
                  to expand my knowledge and skills.
                </p>
              </Copy>
            </Card>
          </div>

          {/* --- Resume Preview Section --- */}
          <div>
            <Copy delay={1.0}>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Resume Preview</h2>
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
