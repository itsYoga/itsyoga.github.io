"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Copy from "@/components/Copy";

const skills = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "OpenCV", "PyTorch", "Swift", "Flutter", "Solidity",
  "Firebase", "Node.js", "Tailwind CSS"
];

export default function Resume() {
  return (
    <main>
      <section className="px-4 pb-20 lg:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 lg:mb-16 gap-4">
            <Copy>
              <h1 className="text-[clamp(32px,4vw,72px)] font-bold tracking-tight leading-[1.1]">
                Resume
              </h1>
            </Copy>
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-xl">
              <a href="/YuJia_resume.pdf" download>
                Download PDF
              </a>
            </Button>
          </div>

          {/* Education */}
          <div className="mb-8">
            <Card className="p-8 lg:p-12 rounded-2xl bg-card border-2">
              <Copy>
                <h2 className="text-[clamp(24px,3vw,48px)] font-bold mb-6 tracking-tight">
                  Education
                </h2>
              </Copy>
              <div className="space-y-4">
                <Copy delay={0.1}>
                  <div>
                    <h3 className="text-[clamp(20px,2vw,32px)] font-bold mb-2">
                      National Taiwan Ocean University
                    </h3>
                    <p className="text-[clamp(16px,1.2vw,20px)] text-muted-foreground mb-1">
                      B.S. in Computer Science and Engineering
                    </p>
                    <p className="text-[clamp(14px,1vw,16px)] text-muted-foreground">
                      GPA: 3.6/4.0 | Sep. 2022 – May 2026
                    </p>
                  </div>
                </Copy>
              </div>
            </Card>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <Card className="p-8 lg:p-12 rounded-2xl bg-card border-2">
              <Copy>
                <h2 className="text-[clamp(24px,3vw,48px)] font-bold mb-6 tracking-tight">
                  Technical Skills
                </h2>
              </Copy>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div key={skill}>
                    <div className="px-4 py-2.5 bg-accent rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                      <span className="text-[clamp(14px,1.2vw,18px)] font-semibold">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Resume Preview */}
          <div>
            <Card className="p-8 lg:p-12 rounded-2xl bg-card border-2">
              <Copy>
                <h2 className="text-[clamp(24px,3vw,48px)] font-bold mb-6 tracking-tight">
                  Resume Preview
                </h2>
              </Copy>
              <div className="aspect-[8.5/11] bg-muted rounded-xl overflow-hidden">
                <iframe
                  src="/YuJia_resume.pdf"
                  className="w-full h-full"
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
