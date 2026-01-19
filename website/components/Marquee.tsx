"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  repeat?: number;
}

export default function Marquee({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
  repeat = 4,
}: MarqueeProps) {
  const duration = 100 / speed;

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${pauseOnHover ? "group" : ""} ${className}`}
    >
      <motion.div
        className={`inline-flex ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="inline-flex items-center">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Predefined marquee item with separator
export function MarqueeItem({
  children,
  separator = "—",
}: {
  children: ReactNode;
  separator?: string;
}) {
  return (
    <>
      <span className="mx-8 md:mx-12">{children}</span>
      <span className="text-muted-foreground/30 mx-4">{separator}</span>
    </>
  );
}
