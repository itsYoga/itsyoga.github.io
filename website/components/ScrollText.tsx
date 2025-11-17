"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTextProps {
  children: React.ReactNode;
  className?: string;
  start?: string;
  end?: string;
  scrub?: number;
}

/**
 * ScrollText Component
 * Creates a slot machine-like scrolling text effect where letters scroll up on scroll
 * Each letter should have a duplicate span positioned at bottom-full for the scroll effect
 */
export default function ScrollText({ 
  children, 
  className = "",
  start = "40% 95%",
  end = "100% 80%",
  scrub = 1 
}: ScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.to(".letter", {
      yPercent: 100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: start,
        end: end,
        scrub: scrub,
      },
      stagger: {
        each: 0.05,
        from: "random",
      },
    });
  }, [start, end, scrub]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

