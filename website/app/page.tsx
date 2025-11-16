"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Instagram, ArrowUpRight, Camera, Code, User, FileText } from "lucide-react";
import Copy from "@/components/Copy";

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Decorative Background Gradient */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4">
        
        {/* 1. The Title Animation (Preserved but stabilized) */}
        <motion.div
          initial={{ scale: 0.25, y: 0 }} 
          animate={{ scale: 1, y: "-35vh" }} // Moves up cleanly
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
            scale: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] },
          }}
          className="absolute z-20 flex items-center justify-center"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3rem,12vw,10rem)] font-bold tracking-tighter leading-none text-center whitespace-nowrap"
            >
              YuJia Liang
            </motion.h1>
          </div>
        </motion.div>

        {/* 2. The Content (Subtitle, Buttons, Socials) 
            We use absolute positioning at the bottom half to separate it from the title animation 
        */}
        <div className="absolute bottom-12 w-full max-w-3xl px-4 flex flex-col items-center gap-8 z-10">
          
          {/* Subtitle */}
          <div className="overflow-hidden text-center space-y-2">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(1.2rem,2vw,2rem)] font-medium text-foreground/90"
            >
              Computer Science Student & AI Enthusiast
            </motion.p>
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(1rem,1.5vw,1.5rem)] text-muted-foreground"
            >
              Full-Stack Developer | Photographer
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="h-12 px-8 text-base rounded-full shadow-lg hover:shadow-xl transition-all">
              <Link href="/resume">View Resume</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="h-12 px-8 text-base rounded-full border bg-background/50 backdrop-blur-sm hover:bg-accent/50">
              <a href="mailto:ch993115@gmail.com">Contact Me</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="flex justify-center gap-6 pt-4"
          >
            {[
              { href: "https://github.com/itsYoga", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/yujia-liang-77ab022a7/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://www.instagram.com/yogaliang0702/", icon: Instagram, label: "Instagram" },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Explore / Bento Grid Section */}
      <section className="px-4 pb-24 pt-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Copy>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight">
                Explore
              </h2>
            </Copy>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { 
                href: "/portfolio", 
                title: "Portfolio", 
                description: "My technical projects, coding work, and case studies.",
                icon: Code,
                color: "group-hover:text-blue-500"
              },
              { 
                href: "/resume", 
                title: "Resume", 
                description: "Professional experience, education, and skills overview.",
                icon: FileText,
                color: "group-hover:text-green-500"
              },
              { 
                href: "/photography", 
                title: "Photography", 
                description: "A collection of moments captured through my lens.",
                icon: Camera,
                color: "group-hover:text-purple-500"
              },
              { 
                href: "/hobbies", 
                title: "About Me", 
                description: "Personal interests, hobbies, and what drives me.",
                icon: User,
                color: "group-hover:text-orange-500"
              },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative overflow-hidden rounded-3xl border bg-card/30 p-8 transition-all hover:bg-card hover:shadow-2xl hover:border-primary/20"
              >
                <Copy delay={index * 0.1}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl bg-accent/50 ${item.color} transition-colors`}>
                      <item.icon size={28} />
                    </div>
                    <ArrowUpRight className="opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-muted-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                </Copy>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
