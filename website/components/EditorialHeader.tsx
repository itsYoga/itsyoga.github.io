"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface EditorialHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  size?: "default" | "large" | "hero";
}

export default function EditorialHeader({
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

  return (
    <div ref={ref} className={`flex flex-col ${alignClasses[align]} relative`}>
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`${titleSizes[size]} font-bold tracking-tighter leading-[0.9] relative z-10`}
      >
        {title}
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

    </div>
  );
}
