"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

/**
 * ParallaxScroll Component
 * Creates parallax scrolling effect using Framer Motion's useScroll
 * Elements move faster or slower than the page scroll
 */
export default function ParallaxScroll({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [`${speed * 100}vh`, `${-speed * 100}vh`] : [`${-speed * 100}vh`, `${speed * 100}vh`]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

