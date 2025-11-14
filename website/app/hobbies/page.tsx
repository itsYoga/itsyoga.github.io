"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart, Camera, Code, Book, Music, Gamepad2 } from "lucide-react";

const hobbies = [
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and exploring different perspectives through the lens. I love landscape and portrait photography.",
  },
  {
    icon: Code,
    title: "Coding Projects",
    description: "Working on side projects, exploring new technologies, and contributing to open source when I can.",
  },
  {
    icon: Book,
    title: "Learning",
    description: "Always curious about new technologies, reading tech blogs, and taking online courses to expand my knowledge.",
  },
  {
    icon: Music,
    title: "Music",
    description: "Enjoying music across different genres, from classical to electronic, and sometimes playing instruments.",
  },
  {
    icon: Gamepad2,
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
          <div className="flex items-center gap-3 mb-12">
            <Heart className="w-6 h-6 text-primary" />
            <h1 className="text-4xl font-bold">Hobbies & Interests</h1>
          </div>

          <div className="space-y-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                        <p className="text-muted-foreground">{hobby.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
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

