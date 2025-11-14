"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, Code, Brain } from "lucide-react";

const skills = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "OpenCV", "PyTorch", "Swift", "Flutter", "Solidity",
  "Firebase", "Node.js", "Tailwind CSS"
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              <h1 className="text-4xl font-bold">Resume</h1>
            </div>
            <Button asChild size="lg" className="gap-2">
              <a href="/YuJia_resume.pdf" download>
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </Button>
          </div>

          {/* Education */}
          <Card className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">National Taiwan Ocean University</h3>
                <p className="text-muted-foreground">B.S. in Computer Science and Engineering</p>
                <p className="text-sm text-muted-foreground">GPA: 3.6/4.0 | Sep. 2022 – May 2026</p>
              </div>
            </div>
          </Card>

          {/* Technical Skills */}
          <Card className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="px-4 py-2 bg-muted rounded-lg hover:bg-accent transition-colors">
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Resume Preview */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
            <div className="aspect-[8.5/11] bg-muted rounded-lg flex items-center justify-center">
              <iframe
                src="/YuJia_resume.pdf"
                className="w-full h-full rounded-lg"
                title="Resume Preview"
              />
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}

