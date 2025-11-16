"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const skills = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "OpenCV", "PyTorch", "Swift", "Flutter", "Solidity",
  "Firebase", "Node.js", "Tailwind CSS"
];

export default function Resume() {
  return (
    <main>
      <section className="px-4 pb-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 lg:mb-16 gap-4"
          >
            <h1 className="text-[clamp(32px,4vw,72px)] font-bold tracking-tight leading-[1.1]">
              Resume
            </h1>
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-xl">
              <a href="/YuJia_resume.pdf" download>
                Download PDF
              </a>
            </Button>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 lg:p-12 mb-8 rounded-2xl bg-card border-2">
              <h2 className="text-[clamp(24px,3vw,48px)] font-bold mb-6 tracking-tight">
                Education
              </h2>
              <div className="space-y-4">
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
              </div>
            </Card>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-8 lg:p-12 mb-8 rounded-2xl bg-card border-2">
              <h2 className="text-[clamp(24px,3vw,48px)] font-bold mb-6 tracking-tight">
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="px-4 py-2.5 bg-accent rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
                      <span className="text-[clamp(14px,1.2vw,18px)] font-semibold">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 lg:p-12 rounded-2xl bg-card border-2">
              <h2 className="text-[clamp(24px,3vw,48px)] font-bold mb-6 tracking-tight">
                Resume Preview
              </h2>
              <div className="aspect-[8.5/11] bg-muted rounded-xl overflow-hidden">
                <iframe
                  src="/YuJia_resume.pdf"
                  className="w-full h-full"
                  title="Resume Preview"
                />
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
