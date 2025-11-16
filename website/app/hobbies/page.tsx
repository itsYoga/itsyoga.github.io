"use client";

import { Card } from "@/components/ui/card";
import Copy from "@/components/Copy";

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
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <Copy>
              <h1 className="text-[clamp(32px,4vw,72px)] font-bold tracking-tight leading-[1.1]">
                Hobbies & Interests
              </h1>
            </Copy>
          </div>

          <div className="space-y-6">
            {hobbies.map((hobby, index) => (
              <div key={hobby.title}>
                <Card className="p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all group bg-card border-2 border-transparent hover:border-primary/30">
                  <div>
                    <Copy delay={index * 0.1}>
                      <h3 className="text-[clamp(24px,2.5vw,40px)] font-bold mb-4 group-hover:text-primary transition-colors">
                        {hobby.title}
                      </h3>
                    </Copy>
                    <Copy delay={index * 0.1 + 0.1}>
                      <p className="text-[clamp(16px,1.2vw,20px)] text-muted-foreground leading-relaxed">
                        {hobby.description}
                      </p>
                    </Copy>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Card className="p-8 lg:p-12 text-center rounded-2xl bg-card border-2">
              <Copy>
                <p className="text-[clamp(18px,1.6vw,24px)] text-muted-foreground mb-4 leading-relaxed">
                  When I'm not coding or behind a camera, you'll find me exploring new technologies, 
                  working on side projects, or sharing my work on social media.
                </p>
              </Copy>
              <Copy delay={0.1}>
                <p className="text-[clamp(16px,1.2vw,20px)] text-muted-foreground leading-relaxed">
                  I believe in the power of creativity and attention to detail, whether I'm debugging code 
                  or capturing a sunset.
                </p>
              </Copy>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
