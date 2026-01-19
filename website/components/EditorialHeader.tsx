"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface EditorialHeaderProps {
  index?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  size?: "default" | "large" | "hero";
}

export default function EditorialHeader({
  index,
  title,
  subtitle,
  align = "left",
  size = "default",
}: EditorialHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const titleSizes = {
    default: "text-4xl md:text-6xl lg:text-7xl",
    large: "text-5xl md:text-7xl lg:text-8xl",
    hero: "text-6xl md:text-8xl lg:text-[10rem]",
  };

  const indexSizes = {
    default: "text-7xl md:text-9xl",
    large: "text-8xl md:text-[10rem]",
    hero: "text-9xl md:text-[12rem]",
  };

  return (
    <div ref={ref} className={`flex flex-col ${alignClasses[align]} relative`}>
      {/* Large Editorial Index Number */}
      {index && (
        <motion.span
          initial={{ opacity: 0, x: align === "right" ? 50 : -50 }}
          animate={isInView ? { opacity: 0.06, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute -top-8 md:-top-16 ${align === "right" ? "-right-4" : "-left-4"} ${indexSizes[size]} font-display italic text-foreground select-none pointer-events-none leading-none`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {index}
        </motion.span>
      )}

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`${titleSizes[size]} font-bold tracking-tighter leading-[0.9] relative z-10`}
      >
        {title.split(" ").map((word, i) => (
          <span key={i} className="inline-block">
            {i % 2 === 1 ? (
              <span
                className="italic font-normal"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {word}
              </span>
            ) : (
              word
            )}
            {i < title.split(" ").length - 1 && " "}
          </span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground mt-4 md:mt-6 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`h-px bg-border mt-6 md:mt-8 ${align === "center" ? "w-24" : "w-16 md:w-24"} origin-left`}
      />
    </div>
  );
}
