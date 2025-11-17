"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "top" | "bottom" | "left" | "right";
  duration?: number;
  withParallax?: boolean;
  parallaxSpeed?: number;
}

/**
 * ClipReveal Component
 * Creates a wipe/reveal animation using clip-path polygon
 * Supports optional parallax scrolling effect
 */
export default function ClipReveal({
  children,
  className = "",
  direction = "bottom",
  duration = 1.6,
  withParallax = false,
  parallaxSpeed = 0.3,
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [`${parallaxSpeed * 100}vh`, `${-parallaxSpeed * 100}vh`]
  );

  const clipPathMap = {
    top: [
      "polygon(0 0, 100% 0, 100% 0, 0 0)",
      "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ],
    bottom: [
      "polygon(0 0, 100% 0, 100% 0, 0 0)",
      "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ],
    left: [
      "polygon(0 0, 0 0, 0 100%, 0 100%)",
      "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ],
    right: [
      "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ],
  };

  const [initial, animate] = clipPathMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={withParallax ? { y: parallaxY } : undefined}
      initial={{ clipPath: initial }}
      animate={isInView ? { clipPath: animate } : { clipPath: initial }}
      transition={{
        duration,
        ease: [0.87, 0, 0.13, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

