"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import Copy from "@/components/Copy";

export default function Home() {
  return (
    <main>
      {/* Hero Section - Inspired by jazminwong */}
      <section className="pt-4 lg:pb-24 h-screen relative px-4">
        <div className="px-4">
          <h1 className="hidden">YuJia Liang</h1>

          {/* Main Title Animation */}
          <motion.div
            initial={{
              scale: 0.25,
              top: "50%",
              y: "-50%",
            }}
            animate={{
              scale: 1,
              top: "0px",
              y: "16px",
            }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
              scale: {
                duration: 1,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
              top: {
                duration: 1.5,
                delay: 1.5,
                ease: [0.22, 1, 0.36, 1],
              },
              y: {
                duration: 1.5,
                delay: 1.5,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="absolute flex items-center justify-center left-4 right-4 origin-center will-change-transform"
          >
            {/* YuJia Liang - Combined */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full pointer-events-none text-center"
              >
                <h1 className="text-[clamp(48px,12vw,180px)] font-bold tracking-tight leading-[1.1]">
                  YuJia Liang
                </h1>
              </motion.div>
            </div>
          </motion.div>

          {/* Subtitle Section */}
          <div className="overflow-hidden absolute left-4 right-4 top-[72vh] sm:top-[70vh] md:top-[12.5vw]">
            <div className="flex flex-col items-center justify-center">
              <motion.p
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(20px,1.6vw,32px)] font-semibold leading-[1.2] text-center"
              >
                Computer Science Student & AI Enthusiast
              </motion.p>
              <motion.p
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 2.0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(20px,1.6vw,32px)] font-normal leading-[1.2] text-center mt-1"
              >
                Full-Stack Developer | Photographer
              </motion.p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-4 right-4 top-[calc(72vh+140px)] sm:top-[calc(70vh+140px)] md:top-[calc(12.5vw+140px)] flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" className="text-lg px-8 py-6 rounded-xl">
            <Link href="/resume">
              View Resume
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl">
            <a href="mailto:ch993115@gmail.com">
              Contact Me
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 2.4,
          }}
          className="absolute left-4 right-4 top-[calc(72vh+240px)] sm:top-[calc(70vh+240px)] md:top-[calc(12.5vw+240px)] flex justify-center gap-6"
        >
          <Link
            href="https://github.com/itsYoga"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yujia-liang-77ab022a7/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7" />
          </Link>
          <Link
            href="https://www.instagram.com/yogaliang0702/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-7 h-7" />
          </Link>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="px-4 pb-20 pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Copy>
              <h2 className="text-[clamp(32px,4vw,72px)] font-bold tracking-tight leading-[1.1]">
                Explore
              </h2>
            </Copy>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { href: "/portfolio", title: "Portfolio", description: "View my technical projects and coding work" },
              { href: "/resume", title: "Resume", description: "Download my resume and view my experience" },
              { href: "/photography", title: "Photography", description: "Check out my photography portfolio" },
              { href: "/hobbies", title: "Hobbies", description: "Learn about my interests and passions" },
            ].map((item, index) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block p-8 rounded-2xl bg-card border-2 border-transparent hover:border-primary/50 hover:bg-accent/50 transition-all group"
                >
                  <Copy delay={index * 0.1}>
                    <h3 className="text-[clamp(24px,2.5vw,40px)] font-bold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </Copy>
                  <Copy delay={index * 0.1 + 0.1}>
                    <p className="text-[clamp(16px,1.2vw,20px)] text-muted-foreground">{item.description}</p>
                  </Copy>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
