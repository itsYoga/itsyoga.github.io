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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-12">
            <h1 className="text-4xl font-bold">Portfolio</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={project.span}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow group">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(" • ").map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-muted rounded-md"
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
    </div>
  );
}
