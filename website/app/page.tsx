"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
          >
            YuJia Liang
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground"
          >
            Computer Science Student | AI Enthusiast | Full-Stack Developer | Photographer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Passionate about technology, creativity, and capturing moments through code and photography.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Button asChild size="lg">
              <Link href="/resume">
                View Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:ch993115@gmail.com">
                Contact Me
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6 pt-8"
          >
            <Link
              href="https://github.com/itsYoga"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yujia-liang-77ab022a7/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/yogaliang0702/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { href: "/portfolio", title: "Portfolio", description: "View my technical projects and coding work" },
              { href: "/resume", title: "Resume", description: "Download my resume and view my experience" },
              { href: "/photography", title: "Photography", description: "Check out my photography portfolio" },
              { href: "/hobbies", title: "Hobbies", description: "Learn about my interests and passions" },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block p-6 rounded-lg border hover:border-primary/50 hover:bg-accent/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t mt-20">
        <div className="text-center text-muted-foreground">
          <p>© 2025 YuJia Liang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
