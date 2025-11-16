"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12 lg:mb-16"
          >
            <h1 className="text-[clamp(32px,4vw,72px)] font-bold tracking-tight leading-[1.1]">
              Portfolio
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.64, 0.57, 0.67, 1.53] }}
                className={project.span}
              >
                <Card className="h-full p-6 lg:p-8 rounded-2xl hover:shadow-xl transition-all group bg-card border-2 border-transparent hover:border-primary/30">
                  <h3 className="text-[clamp(20px,2vw,32px)] font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[clamp(14px,1.2vw,18px)] text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
