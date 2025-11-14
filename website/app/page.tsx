"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Mail, Github, Linkedin, Code, Brain, Rocket, Camera, Instagram } from "lucide-react";
import Link from "next/link";

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

const skills = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js",
  "OpenCV", "PyTorch", "Swift", "Flutter", "Solidity",
  "Firebase", "Node.js", "Tailwind CSS"
];

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
            <Button asChild size="lg" className="gap-2">
              <a href="/YuJia_resume.pdf" download>
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="mailto:ch993115@gmail.com">
                <Mail className="w-4 h-4" />
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
              href="https://www.linkedin.com/in/yu-jia-liang-77ab022a7"
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

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Brain className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">About Me</h2>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a Computer Science student passionate about AI, Machine Learning, and Full-Stack Development. 
                  I love creating innovative solutions that bridge technology and real-world problems.
                </p>
                <p>
                  Beyond coding, I'm also a photographer who finds beauty in everyday moments. 
                  Whether I'm debugging code or capturing a sunset, I believe in the power of creativity 
                  and attention to detail.
                </p>
                <p>
                  When I'm not coding or behind a camera, you'll find me exploring new technologies, 
                  working on side projects, or sharing my work on social media.
                </p>
              </div>
              <div className="pt-4 border-t">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-muted-foreground">
                  <strong>National Taiwan Ocean University</strong><br />
                  B.S. in Computer Science and Engineering<br />
                  GPA: 3.6/4.0 | Sep. 2022 – May 2026
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Photography Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Photography</h2>
          </div>
          <Card className="p-8 md:p-12">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Photography is my creative outlet and a way to see the world from different perspectives. 
                I enjoy capturing landscapes, portraits, and moments that tell a story.
              </p>
              <p className="text-muted-foreground">
                Check out my latest work on Instagram or reach out if you're interested in collaborating 
                on a photography project.
              </p>
              <div className="pt-4">
                <Button asChild variant="outline" className="gap-2">
                  <Link href="https://www.instagram.com/yogaliang0702/" target="_blank">
                    <Instagram className="w-4 h-4" />
                    View on Instagram
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
          {/* Photo Grid Placeholder - You can add actual photos here */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="aspect-square bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
                  <Camera className="w-12 h-12 text-muted-foreground/50" />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
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
                <Card className="px-4 py-2 hover:bg-accent transition-colors">
                  <span className="text-sm font-medium">{skill}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Bento Grid */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-12">
            <Rocket className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Projects</h2>
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

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in collaborating on a project or just want to say hi? 
              Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="gap-2">
                <a href="mailto:ch993115@gmail.com">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href="https://www.linkedin.com/in/yu-jia-liang-77ab022a7" target="_blank">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href="https://github.com/itsYoga" target="_blank">
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <Link href="https://www.instagram.com/yogaliang0702/" target="_blank">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="text-center text-muted-foreground">
          <p>© 2025 YuJia Liang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
