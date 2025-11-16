"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const hobbies = [
  {
    title: "Photography",
    description: "Capturing moments and exploring different perspectives through the lens. I love landscape and portrait photography.",
  },
  {
    title: "Coding Projects",
    description: "Working on side projects, exploring new technologies, and contributing to open source when I can.",
  },
  {
    title: "Learning",
    description: "Always curious about new technologies, reading tech blogs, and taking online courses to expand my knowledge.",
  },
  {
    title: "Music",
    description: "Enjoying music across different genres, from classical to electronic, and sometimes playing instruments.",
  },
  {
    title: "Gaming",
    description: "Playing video games in my free time, especially strategy and puzzle games that challenge my thinking.",
  },
];

export default function Hobbies() {
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
            className="mb-12 lg:mb-16"
          >
            <h1 className="text-[clamp(32px,4vw,72px)] font-bold tracking-tight leading-[1.1]">
              Hobbies & Interests
            </h1>
          </motion.div>

          <div className="space-y-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.64, 0.57, 0.67, 1.53] }}
              >
                <Card className="p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all group bg-card border-2 border-transparent hover:border-primary/30">
                  <div>
                    <h3 className="text-[clamp(24px,2.5vw,40px)] font-bold mb-4 group-hover:text-primary transition-colors">
                      {hobby.title}
                    </h3>
                    <p className="text-[clamp(16px,1.2vw,20px)] text-muted-foreground leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="p-8 lg:p-12 text-center rounded-2xl bg-card border-2">
              <p className="text-[clamp(18px,1.6vw,24px)] text-muted-foreground mb-4 leading-relaxed">
                When I'm not coding or behind a camera, you'll find me exploring new technologies, 
                working on side projects, or sharing my work on social media.
              </p>
              <p className="text-[clamp(16px,1.2vw,20px)] text-muted-foreground leading-relaxed">
                I believe in the power of creativity and attention to detail, whether I'm debugging code 
                or capturing a sunset.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
