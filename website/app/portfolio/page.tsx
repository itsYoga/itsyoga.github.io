"use client";

import { Card } from "@/components/ui/card";
import Copy from "@/components/Copy";

const projects = [
  {
    title: "Volleyball Line Judging System",
    description: "Automated line-judging using OpenCV and PyTorch",
    tech: "Python • OpenCV • PyTorch",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Archon RWA Tokenization DApp",
    description: "DeFi platform for Real-World Asset tokenization",
    tech: "React • Solidity • TypeScript",
    span: "col-span-1 row-span-1",
  },
  {
    title: "ASL Hand Gesture Recognition",
    description: "iOS app with CreateML for real-time gesture recognition",
    tech: "SwiftUI • CreateML",
    span: "col-span-1 row-span-1",
  },
  {
    title: "AI Image Recognition @ ITRI",
    description: "Optimized YOLO model achieving 99% accuracy",
    tech: "Python • YOLO • Computer Vision",
    span: "col-span-1 row-span-2",
  },
  {
    title: "SyncUp - Social Calendar",
    description: "Flutter app with Firebase and AI-powered scheduling",
    tech: "Flutter • Firebase • RAG",
    span: "col-span-1 row-span-1",
  },
];

export default function Portfolio() {
  return (
    <main>
      <section className="px-4 pb-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <Copy>
              <h1 className="text-[clamp(32px,4vw,72px)] font-bold tracking-tight leading-[1.1]">
                Portfolio
              </h1>
            </Copy>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={project.title} className={project.span}>
                <Card className="h-full p-6 lg:p-8 rounded-2xl hover:shadow-xl transition-all group bg-card border-2 border-transparent hover:border-primary/30">
                  <Copy delay={index * 0.1}>
                    <h3 className="text-[clamp(20px,2vw,32px)] font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </Copy>
                  <Copy delay={index * 0.1 + 0.1}>
                    <p className="text-[clamp(14px,1.2vw,18px)] text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </Copy>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(" • ").map((tech) => (
                      <span
                        key={tech}
                        className="text-[clamp(12px,1vw,14px)] px-3 py-1.5 bg-accent rounded-lg font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
