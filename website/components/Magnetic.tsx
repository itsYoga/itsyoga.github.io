"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  as?: "div" | "span" | "button" | "a";
}

export default function Magnetic({
  children,
  className = "",
  strength = 0.35,
  radius = 150,
  as: Component = "div",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < radius) {
      // Apply magnetic pull based on distance
      const pull = 1 - distance / radius;
      x.set(distanceX * strength * pull);
      y.set(distanceY * strength * pull);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const MotionComponent = motion[Component] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ x: springX, y: springY }}
      className={className}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </MotionComponent>
  );
}
