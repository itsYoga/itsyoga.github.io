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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <h1 className="text-4xl font-bold">Hobbies & Interests</h1>
          </div>

          <div className="space-y-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                    <p className="text-muted-foreground">{hobby.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="p-8 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                When I'm not coding or behind a camera, you'll find me exploring new technologies, 
                working on side projects, or sharing my work on social media.
              </p>
              <p className="text-muted-foreground">
                I believe in the power of creativity and attention to detail, whether I'm debugging code 
                or capturing a sunset.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
