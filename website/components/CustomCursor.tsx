"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothed cursor position with spring physics
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Even smoother trail
  const trailConfig = { damping: 35, stiffness: 150, mass: 1 };
  const trailX = useSpring(mouseX, trailConfig);
  const trailY = useSpring(mouseY, trailConfig);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    if (hasTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor], [role='button'], input, textarea");

      if (interactive) {
        setIsHovering(true);
        const cursorLabel = interactive.getAttribute("data-cursor");
        if (cursorLabel) setCursorText(cursorLabel);
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleElementHover);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleElementHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render on server or touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Trail/Glow effect */}
      <motion.div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 80 : 40,
            height: isHovering ? 80 : 40,
            opacity: isVisible ? (isHovering ? 0.15 : 0.1) : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-full bg-white blur-xl"
        />
      </motion.div>

      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isClicking ? 8 : isHovering ? 48 : 12,
            height: isClicking ? 8 : isHovering ? 48 : 12,
            opacity: isVisible ? 1 : 0,
            borderRadius: "50%",
          }}
          transition={{
            duration: 0.2,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="bg-white flex items-center justify-center"
        >
          <AnimatePresence>
            {cursorText && isHovering && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-[8px] font-bold text-black uppercase tracking-wider"
              >
                {cursorText}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Particle trail on fast movement */}
      <CursorParticles mouseX={mouseX} mouseY={mouseY} isVisible={isVisible} />
    </>
  );
}

// Particle system for fast cursor movement
function CursorParticles({
  mouseX,
  mouseY,
  isVisible
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  isVisible: boolean;
}) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const idRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    const unsubX = mouseX.on("change", (x) => {
      const y = mouseY.get();
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const velocity = Math.sqrt(dx * dx + dy * dy);

      // Only spawn particles on fast movement
      if (velocity > 30) {
        const newParticle = { id: idRef.current++, x, y };
        setParticles((prev) => [...prev.slice(-8), newParticle]);
      }

      lastPos.current = { x, y };
    });

    return () => unsubX();
  }, [mouseX, mouseY, isVisible]);

  // Clean up old particles
  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 150);
    return () => clearTimeout(timer);
  }, [particles]);

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: particle.x,
            y: particle.y,
            scale: 1,
            opacity: 0.6,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9997] mix-blend-difference"
        />
      ))}
    </>
  );
}
