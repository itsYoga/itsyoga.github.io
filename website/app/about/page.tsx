"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Copy from "@/components/Copy";
import { 
  FileText, 
  ExternalLink, 
  Download, 
  Building2, 
  GraduationCap, 
  Code2, 
  MapPin,
  Calendar
} from "lucide-react";

const skills = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "OpenCV", "PyTorch", "Swift", "Flutter", "Solidity",
  "Firebase", "Node.js", "Tailwind CSS"
];

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* --- Header & Bio --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-b pb-12">
            <div className="md:col-span-2 space-y-4">
              <Copy>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  About Me
                </h1>
              </Copy>
              <Copy delay={0.1}>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4 max-w-2xl">
                  <p>
                    I am a Computer Science student at National Taiwan Ocean University, specializing in AI, computer vision, and full-stack development.
                  </p>
                  <p>
                    My passion lies in bridging the gap between complex theoretical models and practical, user-friendly applications. Whether it's optimizing YOLO models for industrial use or building decentralized applications, I aim to create efficient and scalable solutions.
                  </p>
                </div>
              </Copy>
            </div>
            
            {/* Resume Download Action */}
            <div className="md:col-span-1 flex md:justify-end">
              <Copy delay={0.2}>
                <Button size="lg" className="rounded-full gap-2 w-full md:w-auto shadow-sm" asChild>
                  <a href="/YuJia_resume.pdf" download>
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </Copy>
            </div>
          </div>

          {/* --- Professional Experience (Full Width) --- */}
          <div className="space-y-6">
            <Copy delay={0.3}>
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Experience
              </h2>
            </Copy>
            
            <Card className="p-6 md:p-8 rounded-2xl border bg-card hover:shadow-md transition-all">
              <Copy delay={0.4}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    {/* Company Name First (Top Priority) */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      Industrial Technology Research Institute (ITRI)
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-sm">Hsinchu, Taiwan</span>
                    </div>
                  </div>
                  
                  {/* Role & Date aligned right on desktop */}
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="font-semibold text-lg text-primary">
                      AI Image Recognition Intern
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted px-2.5 py-1 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Summer 2024</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pl-4 border-l-2 border-muted">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Optimized YOLO (You Only Look Once) object detection models, achieving 99% accuracy in controlled environments.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm md:text-base list-disc list-outside ml-4">
                    <li>Developed and fine-tuned computer vision models specifically for industrial image recognition applications.</li>
                    <li>Implemented robust data preprocessing pipelines and automated model evaluation frameworks.</li>
                    <li>Collaborated with senior researchers to deploy lightweight models into real-world production environments.</li>
                  </ul>
                </div>
              </Copy>
            </Card>
          </div>

          {/* --- Grid: Education & Skills --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Education */}
            <div className="space-y-6">
              <Copy delay={0.5}>
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h2>
              </Copy>

              <Card className="p-6 rounded-2xl border bg-card hover:shadow-md transition-all h-full">
                <div className="space-y-8">
                  {/* University */}
                  <Copy delay={0.6}>
                    <div className="relative pl-6 border-l border-muted">
                      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary" />
                      <div className="mb-1">
                        <h3 className="font-bold text-lg">National Taiwan Ocean University</h3>
                        <p className="text-sm text-muted-foreground">Sep. 2022 – May 2026</p>
                      </div>
                      <p className="text-base font-medium text-foreground/80">
                        B.S. in Computer Science and Engineering
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Keelung, Taiwan
                      </p>
                    </div>
                  </Copy>
                  
                  {/* High School */}
                  <Copy delay={0.7}>
                    <div className="relative pl-6 border-l border-muted">
                      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                      <div className="mb-1">
                        <h3 className="font-bold text-lg">Cotter High School</h3>
                        <p className="text-sm text-muted-foreground">Sep. 2019 – May 2021</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Winona, MN, USA
                      </p>
                    </div>
                  </Copy>
                </div>
              </Card>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <Copy delay={0.6}>
                <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  Technical Skills
                </h2>
              </Copy>

              <Card className="p-6 rounded-2xl border bg-card hover:shadow-md transition-all h-full">
                <Copy delay={0.7}>
                  <div className="flex flex-wrap gap-2 content-start">
                    {skills.map((skill, index) => (
                      <div 
                        key={skill} 
                        className="px-3 py-1.5 bg-accent/50 border border-transparent hover:border-primary/20 text-sm font-medium rounded-lg transition-colors cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </Copy>
              </Card>
            </div>
          </div>

          {/* --- Resume Preview --- */}
          <div className="pt-8">
            <Card className="overflow-hidden rounded-2xl border bg-card shadow-sm">
              <div className="border-b bg-muted/30 p-3 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <FileText className="w-4 h-4" />
                  <span>Resume Preview</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                  <a href="/YuJia_resume.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              
              <div className="w-full bg-muted/10 h-[600px] md:h-[800px]">
                <iframe
                  src="/YuJia_resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  className="w-full h-full border-none"
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
