"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position (normalized 0-1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 50, stiffness: 100, mass: 2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Even slower secondary blobs
  const slowConfig = { damping: 60, stiffness: 50, mass: 4 };
  const slowX = useSpring(mouseX, slowConfig);
  const slowY = useSpring(mouseY, slowConfig);

  // Transform to percentage positions
  const blob1X = useTransform(smoothX, [0, 1], ["20%", "80%"]);
  const blob1Y = useTransform(smoothY, [0, 1], ["20%", "80%"]);

  const blob2X = useTransform(slowX, [0, 1], ["70%", "30%"]);
  const blob2Y = useTransform(slowY, [0, 1], ["60%", "20%"]);

  const blob3X = useTransform(smoothX, [0, 1], ["50%", "20%"]);
  const blob3Y = useTransform(slowY, [0, 1], ["80%", "40%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(Math.max(0, Math.min(1, x)));
      mouseY.set(Math.max(0, Math.min(1, y)));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Primary blob - follows cursor closely */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[150px] opacity-20 dark:opacity-15"
        style={{
          left: blob1X,
          top: blob1Y,
          translateX: "-50%",
          translateY: "-50%",
          background: "linear-gradient(135deg, oklch(0.75 0.12 240), oklch(0.7 0.15 260))",
        }}
      />

      {/* Secondary blob - coral accent, moves opposite */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[130px] opacity-15 dark:opacity-10"
        style={{
          left: blob2X,
          top: blob2Y,
          translateX: "-50%",
          translateY: "-50%",
          background: "linear-gradient(135deg, oklch(0.8 0.12 25), oklch(0.75 0.14 40))",
        }}
      />

      {/* Tertiary blob - subtle blue */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-15 dark:opacity-08"
        style={{
          left: blob3X,
          top: blob3Y,
          translateX: "-50%",
          translateY: "-50%",
          background: "linear-gradient(135deg, oklch(0.6 0.15 220), oklch(0.7 0.1 200))",
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial fade at edges */}
      <div
        className="absolute inset-0 bg-background"
        style={{
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, black 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, black 100%)",
        }}
      />
    </div>
  );
}
