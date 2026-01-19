"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Copy from "@/components/Copy";
import ModernTechStack from "@/components/ModernTechStack";
import ProfessionalAt from "@/components/ProfessionalAt";
import ScrambleText from "@/components/ScrambleText";
import Magnetic from "@/components/Magnetic";
import Marquee, { MarqueeItem } from "@/components/Marquee";

export default function Home() {
  return (
    <main className="text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center px-4">

        {/* 1. Title Animation - Responsive movement */}
        <motion.div
          initial={{ scale: 0.5, y: 0 }}
          animate={{ scale: 1, y: -80 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
            scale: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] },
          }}
          className="absolute z-20 flex items-center justify-center origin-center md:translate-y-[-40px]"
        >
          <div className="overflow-visible">
            <motion.h1
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3.5rem,12vw,11rem)] font-bold tracking-tighter leading-[0.95] text-center whitespace-nowrap pb-1"
            >
              <ScrambleText text="YuJia Liang" delay={0.8} duration={1.2} />
            </motion.h1>
          </div>
        </motion.div>

        {/* 2. Content - Now positioned in the center, just below the title */}
        <div className="absolute top-1/2 w-full max-w-3xl px-4 flex flex-col items-center gap-6 pt-12 z-10">
          
          {/* Tagline */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden text-center space-y-3"
          >
            <p className="text-[clamp(1.3rem,2.2vw,2.2rem)] font-bold text-foreground tracking-tight">
              Building intelligent systems. <span className="text-primary">Capturing the world.</span>
            </p>
            <p className="text-[clamp(0.95rem,1.4vw,1.3rem)] text-muted-foreground font-medium">
              AI Engineer & Full-Stack Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="flex justify-center gap-8 pt-4"
          >
            {[
              { href: "https://github.com/itsYoga", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/yujia-liang-77ab022a7/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://www.instagram.com/yogaliang0702/", icon: Instagram, label: "Instagram" },
            ].map((social) => (
              <Magnetic key={social.label} strength={0.4} radius={100}>
                <Link
                  href={social.href}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 block"
                  aria-label={social.label}
                  data-cursor="View"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              </Magnetic>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Tech Stack Section */}
      <section className="px-4 -mt-16 lg:-mt-24">
        <ModernTechStack />
      </section>

      {/* Kinetic Marquee Section */}
      <section className="py-12 md:py-20 border-y border-border/50 overflow-hidden">
        <Marquee speed={25} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground/[0.03]">
          <MarqueeItem separator="*">
            <span>AI Engineer</span>
          </MarqueeItem>
          <MarqueeItem separator="*">
            <span>Full-Stack</span>
          </MarqueeItem>
          <MarqueeItem separator="*">
            <span>Developer</span>
          </MarqueeItem>
          <MarqueeItem separator="*">
            <span>Photographer</span>
          </MarqueeItem>
          <MarqueeItem separator="*">
            <span>Creative</span>
          </MarqueeItem>
        </Marquee>
      </section>

      {/* Professional At Section */}
      <ProfessionalAt />

      {/* Fixed Contact Button */}
      <motion.div
        initial={{ y: 200, scale: 0.8 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          duration: 1,
          delay: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Magnetic strength={0.3} radius={120}>
          <a
            href="mailto:ch993115@gmail.com"
            className="flex items-center gap-2 md:gap-3 pl-1 py-1 pr-4 md:pr-6 rounded-full bg-accent shadow-2xl cursor-pointer group transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-95 touch-manipulation"
            data-cursor="Email"
          >
            <div className="h-11 w-11 md:h-14 md:w-14 relative rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div className="overflow-hidden h-7 md:h-8">
              <div className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.64,0.57,0.67,1.53)] group-hover:-translate-y-1/2">
                <span className="text-lg md:text-xl font-semibold">Contact</span>
                <span className="text-lg md:text-xl font-semibold">Contact</span>
              </div>
            </div>
          </a>
        </Magnetic>
      </motion.div>

    </main>
  );
}
