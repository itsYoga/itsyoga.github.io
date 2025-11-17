"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface HeroVideoProps {
  videoSrc: string;
  className?: string;
}

/**
 * HeroVideo Component
 * Creates a hero video that scales and moves with scroll + mouse parallax
 * Combines ScrollTrigger for scroll-based scaling and mouse tracking for parallax
 */
export default function HeroVideo({ videoSrc, className = "" }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseXRef = useRef(0);
  const targetMouseXRef = useRef(0);

  useGSAP(() => {
    if (!videoRef.current || !containerRef.current) return;

    const video = videoRef.current;
    const container = containerRef.current;

    gsap.set(video, { scale: 0.35 });

    gsap.to(video, {
      scale: 1,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      targetMouseXRef.current = normalizedX * 50;
    };

    const updateParallax = () => {
      mouseXRef.current += (targetMouseXRef.current - mouseXRef.current) * 0.1;
      gsap.set(video, { x: mouseXRef.current });
      requestAnimationFrame(updateParallax);
    };

    container.addEventListener("mousemove", handleMouseMove);
    updateParallax();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

