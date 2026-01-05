"use client";

import ScrollText from "./ScrollText";

/**
 * ModernTechStack Component
 * Displays "MODERN TECH STACK" with scroll-triggered letter animation
 * Each letter has a duplicate positioned at bottom-full for the scroll effect
 */
export default function ModernTechStack() {
  return (
    <ScrollText className="flex flex-col justify-center items-center h-[500px] lg:h-[800px] py-8 lg:py-16">
      <ul className="flex flex-col justify-center items-center">
        {/* MODERN */}
        <li className="text-[clamp(48px,14vw,250px)] font-bold tracking-tight leading-[0.85] overflow-hidden flex">
          {["M", "O", "D", "E", "R", "N"].map((letter, index) => (
            <span key={index} className="letter relative inline-block">
              <span>{letter}</span>
              <span className="absolute top-full left-0">{letter}</span>
            </span>
          ))}
        </li>

        {/* TECH STACK */}
        <li className="text-[clamp(48px,14vw,250px)] font-bold tracking-tight leading-[0.9] lg:leading-[0.85] overflow-hidden flex">
          {["T", "E", "C", "H"].map((letter, index) => (
            <span
              key={index}
              className={`letter relative inline-block ${index === 3 ? "mr-[clamp(16px,4.5vw,72px)]" : ""}`}
            >
              <span>{letter}</span>
              <span className="absolute top-full left-0">{letter}</span>
            </span>
          ))}
          {["S", "T", "A", "C", "K"].map((letter, index) => (
            <span key={index} className="letter relative inline-block">
              <span>{letter}</span>
              <span className="absolute top-full left-0">{letter}</span>
            </span>
          ))}
        </li>
      </ul>
    </ScrollText>
  );
}

