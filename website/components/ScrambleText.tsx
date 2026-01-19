"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  scrambleOnHover?: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
  duration = 1.5,
  scrambleOnHover = true,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = (onComplete?: () => void) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const originalText = text;
    const totalDuration = duration * 1000;
    const frameRate = 30;
    const totalFrames = Math.floor(totalDuration / (1000 / frameRate));
    let frame = 0;

    intervalRef.current = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      // Characters revealed based on progress
      const revealedChars = Math.floor(progress * originalText.length);

      const newText = originalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < revealedChars) return originalText[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(newText);

      if (frame >= totalFrames) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(originalText);
        setIsAnimating(false);
        onComplete?.();
      }
    }, 1000 / frameRate);
  };

  // Initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      scramble(() => setHasPlayed(true));
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseEnter = () => {
    if (scrambleOnHover && hasPlayed && !isAnimating) {
      scramble();
    }
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {displayText.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.02,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
