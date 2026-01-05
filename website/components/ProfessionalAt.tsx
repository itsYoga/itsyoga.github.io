"use client";

import MouseFollow from "./MouseFollow";
import Copy from "./Copy";
import Link from "next/link";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiPython, SiPytorch, 
  SiTailwindcss, SiSupabase, SiFigma, SiFramer, SiFlutter,
  SiFirebase, SiDocker
} from "react-icons/si";

// Category colors using oklch for consistency
const categoryColors = {
  frontend: "hover:bg-blue-500/10 hover:border-blue-500/30",
  ai: "hover:bg-orange-500/10 hover:border-orange-500/30",
  backend: "hover:bg-green-500/10 hover:border-green-500/30",
  mobile: "hover:bg-cyan-500/10 hover:border-cyan-500/30",
  design: "hover:bg-purple-500/10 hover:border-purple-500/30",
};

const categoryLabels = {
  frontend: { label: "Frontend", color: "bg-blue-500" },
  ai: { label: "AI/ML", color: "bg-orange-500" },
  backend: { label: "Backend", color: "bg-green-500" },
  mobile: { label: "Mobile", color: "bg-cyan-500" },
  design: { label: "Design", color: "bg-purple-500" },
};

// Tech stack items with their icons, links and categories
const techStack = [
  // First row (3 items)
  {
    name: "React",
    href: "https://react.dev/",
    Icon: SiReact,
    size: 90,
    category: "frontend" as const,
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    Icon: SiNextdotjs,
    size: 150,
    category: "frontend" as const,
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    Icon: SiTypescript,
    size: 70,
    category: "frontend" as const,
  },
  // Second row (7 items)
  {
    name: "Python",
    href: "https://www.python.org/",
    Icon: SiPython,
    size: 80,
    category: "ai" as const,
  },
  {
    name: "PyTorch",
    href: "https://pytorch.org/",
    Icon: SiPytorch,
    size: 80,
    category: "ai" as const,
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    Icon: SiTailwindcss,
    size: 70,
    category: "frontend" as const,
  },
  {
    name: "Framer Motion",
    href: "https://www.framer.com/motion/",
    Icon: SiFramer,
    size: 50,
    category: "frontend" as const,
  },
  {
    name: "Flutter",
    href: "https://flutter.dev/",
    Icon: SiFlutter,
    size: 50,
    category: "mobile" as const,
  },
  {
    name: "Supabase",
    href: "https://supabase.com/",
    Icon: SiSupabase,
    size: 50,
    category: "backend" as const,
  },
  {
    name: "Figma",
    href: "https://www.figma.com/",
    Icon: SiFigma,
    size: 60,
    category: "design" as const,
  },
];

export default function ProfessionalAt() {
  const firstRow = techStack.slice(0, 3);
  const secondRow = techStack.slice(3);

  return (
    <section className="pb-24 px-4 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <Copy delay={0.1}>
          <h4 className="font-semibold uppercase text-foreground">
            Professional at
          </h4>
        </Copy>

        {/* Category Legend */}
        <div className="flex flex-wrap gap-3 text-sm">
          {Object.entries(categoryLabels).map(([key, { label, color }]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
              <span className="text-muted-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <MouseFollow className="relative">
        {/* Desktop Grid - 2 rows */}
        <div className="hidden lg:grid grid-rows-2">
          {/* First row - 3 columns */}
          <div className="grid grid-cols-3 border-b border-border h-[clamp(200px,20vw,400px)]">
            {firstRow.map((tech) => (
              <Link
                key={tech.name}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`grid-item flex flex-col items-center justify-center gap-3 border-r border-border last:border-r-0 group cursor-pointer bg-background transition-all duration-300 ${categoryColors[tech.category]}`}
                aria-label={`Visit ${tech.name} website`}
              >
                <tech.Icon
                  className="z-10 transition-all duration-300 text-foreground group-hover:scale-110"
                  style={{ width: tech.size, height: tech.size }}
                />
                <span className="text-sm font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.name}</span>
              </Link>
            ))}
          </div>

          {/* Second row - 7 columns */}
          <div className="grid grid-cols-7 h-[clamp(200px,15vw,400px)]">
            {secondRow.map((tech, index) => (
              <Link
                key={tech.name}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`grid-item flex flex-col items-center justify-center gap-2 border-r border-border ${index === secondRow.length - 1 ? 'border-r-0' : ''} group cursor-pointer bg-background transition-all duration-300 ${categoryColors[tech.category]}`}
                aria-label={`Visit ${tech.name} website`}
              >
                <tech.Icon
                  className="z-10 transition-all duration-300 text-foreground group-hover:scale-110"
                  style={{ width: tech.size, height: tech.size }}
                />
                <span className="text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Grid - 2 columns */}
        <div className="grid grid-cols-2 lg:hidden">
          {techStack.map((tech, index) => {
            const isLastRow = index >= techStack.length - 2;
            const isRightColumn = index % 2 === 1;

            return (
              <Link
                key={tech.name}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`grid-item flex flex-col items-center justify-center gap-2 border-r border-b border-border ${isRightColumn ? 'border-r-0' : ''} ${isLastRow ? 'border-b-0' : ''} group cursor-pointer h-[clamp(150px,25vw,300px)] bg-background transition-all duration-300 ${categoryColors[tech.category]}`}
                aria-label={`Visit ${tech.name} website`}
              >
                <tech.Icon
                  className="z-10 transition-all duration-300 text-foreground"
                  style={{ width: tech.size * 0.7, height: tech.size * 0.7 }}
                />
                <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
              </Link>
            );
          })}
        </div>
      </MouseFollow>
    </section>
  );
}

