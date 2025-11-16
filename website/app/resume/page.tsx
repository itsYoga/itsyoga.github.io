"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Copy from "@/components/Copy";
import { Download, GraduationCap, Code2, FileText, ExternalLink, User, MapPin, Mail } from "lucide-react";

const skills = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "OpenCV", "PyTorch", "Swift", "Flutter", "Solidity",
  "Firebase", "Node.js", "Tailwind CSS"
];

export default function Resume() {
  return (
    <main className="min-h-screen bg-background/50">
      <section className="px-4 pb-20 pt-10 lg:py-24">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* --- Header Section --- */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-4 border-b">
            <div className="space-y-2">
              <Copy>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                  About Me
                </h1>
              </Copy>
              <Copy delay={0.1}>
                <p className="text-muted-foreground text-lg max-w-lg">
                  My academic background, technical expertise, and professional journey.
                </p>
              </Copy>
            </div>
            <Copy delay={0.2}>
              <Button asChild size="lg" className="rounded-full gap-2 shadow-lg hover:shadow-xl transition-all">
                <a href="/YuJia_resume.pdf" download>
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </Copy>
          </div>

          {/* --- Content Grid --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Education Card (Spans 2 columns on desktop) */}
            <div className="lg:col-span-2 h-full">
              <Card className="h-full p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <Copy delay={0.3}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Education</h2>
                  </div>
                </Copy>
                <div className="space-y-8">
                  <Copy delay={0.4}>
                    <div className="relative pl-6 border-l-2 border-muted pb-2">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">
                          National Taiwan Ocean University
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground whitespace-nowrap">
                          Sep. 2022 – May 2026
                        </span>
                      </div>
                      <p className="text-base font-medium text-foreground/80 mb-2">
                        B.S. in Computer Science and Engineering
                      </p>
                      <p className="text-sm text-muted-foreground">
                        GPA: 3.6/4.0
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
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
                  </div>
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

          {/* --- Personal Info Section (Optional - can add more personal details) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <Copy delay={0.6}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <User className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">About</h2>
                </div>
              </Copy>
              <Copy delay={0.7}>
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

            <Card className="p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <Copy delay={0.6}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
                </div>
              </Copy>
              <div className="space-y-4">
                <Copy delay={0.7}>
                  <a 
                    href="mailto:ch993115@gmail.com" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>ch993115@gmail.com</span>
                  </a>
                </Copy>
                <Copy delay={0.8}>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span>Taiwan</span>
                  </div>
                </Copy>
              </div>
            </Card>
          </div>

          {/* --- Resume Preview Section --- */}
          <div>
            <Copy delay={0.8}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Resume Preview</h2>
              </div>
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
