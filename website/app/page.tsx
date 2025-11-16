"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section - Inspired by jazminwong */}
      <section className="pt-4 lg:pb-24 min-h-screen relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center min-h-[80vh] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden mb-6"
          >
            <h1 className="text-[clamp(48px,12vw,180px)] font-bold tracking-tight leading-[1.1]">
              YuJia
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden mb-8"
          >
            <p className="text-[clamp(20px,2vw,40px)] font-semibold leading-[1.2]">
              Computer Science Student & AI Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden mb-12"
          >
            <p className="text-[clamp(18px,1.6vw,32px)] font-normal text-muted-foreground leading-[1.2] max-w-3xl">
              Full-Stack Developer | Photographer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center gap-6"
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
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="px-4 pb-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-[clamp(32px,4vw,72px)] font-bold tracking-tight leading-[1.1] mb-4">
              Explore
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { href: "/portfolio", title: "Portfolio", description: "View my technical projects and coding work" },
              { href: "/resume", title: "Resume", description: "Download my resume and view my experience" },
              { href: "/photography", title: "Photography", description: "Check out my photography portfolio" },
              { href: "/hobbies", title: "Hobbies", description: "Learn about my interests and passions" },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={item.href}
                  className="block p-8 rounded-2xl bg-card border-2 border-transparent hover:border-primary/50 hover:bg-accent/50 transition-all group"
                >
                  <h3 className="text-[clamp(24px,2.5vw,40px)] font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[clamp(16px,1.2vw,20px)] text-muted-foreground">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
