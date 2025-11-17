"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface ParallaxTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

/**
 * ParallaxText Component
 * Creates a flowing/distorted parallax effect where words move
 * at different speeds and directions when scrolling
 */
export default function ParallaxText({ 
  children, 
  className = "",
  speed = 0.8 
}: ParallaxTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const split = SplitText.create(containerRef.current, {
      type: "words",
      wordsClass: "word++",
    }) as SplitText;

    splitRef.current = split;

    split.words.forEach((word, index) => {
      const direction = index % 2 === 0 ? -1 : 1;
      const offset = speed * direction * (index % 3 + 1) * 0.8;

      gsap.to(word, {
        x: `${offset}em`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

