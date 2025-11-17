"use client";

import { useEffect, useRef } from "react";

interface MouseFollowProps {
  children: React.ReactNode;
  className?: string;
  highlightClassName?: string;
}

/**
 * MouseFollow Component
 * Creates a highlight box that follows the mouse cursor
 * The highlight div smoothly moves and resizes to cover the grid item under the cursor
 */
export default function MouseFollow({
  children,
  className = "",
  highlightClassName = "",
}: MouseFollowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;
    
    if (!container || !highlight) return;

    const firstItem = container.querySelector(".grid-item:first-child") as HTMLElement;
    
    const updateHighlight = (element: HTMLElement | null) => {
      if (!element || !container || !highlight) return;

      const itemRect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      highlight.style.transform = `translate(${itemRect.left - containerRect.left}px, ${itemRect.top - containerRect.top}px)`;
      highlight.style.width = `${itemRect.width}px`;
      highlight.style.height = `${itemRect.height}px`;

      container.querySelectorAll(".grid-item").forEach((item) => {
        item.classList.remove("inverted");
      });

      element.classList.add("inverted");
    };

    const handleMouseMove = (e: MouseEvent) => {
      const element = document.elementFromPoint(e.clientX, e.clientY);
      
      if (element && element.classList.contains("grid-item")) {
        updateHighlight(element as HTMLElement);
      } else if (element?.parentElement?.classList.contains("grid-item")) {
        updateHighlight(element.parentElement as HTMLElement);
      }
    };

    if (firstItem) {
      updateHighlight(firstItem);
    }

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        ref={highlightRef}
        className={`highlight hidden sm:block absolute top-0 left-0 bg-foreground pointer-events-none transition-all duration-300 ${highlightClassName}`}
        style={{
          opacity: 1,
        }}
      />
      {children}
    </div>
  );
}

