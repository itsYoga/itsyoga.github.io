import { Trophy } from "lucide-react";
import { SiApple } from "react-icons/si";

const sizes = {
  sm: { box: "px-2.5 py-1 text-xs", icon: "w-3 h-3" },
  md: { box: "px-3 py-1 text-xs", icon: "w-3.5 h-3.5" },
  lg: { box: "px-3 py-1.5 text-sm", icon: "w-4 h-4" },
};

/** An award pill. Apple's mark belongs only to Apple's award; anything else gets a trophy. */
export default function AwardBadge({ label, size = "md" }: { label: string; size?: keyof typeof sizes }) {
  const Icon = label.includes("WWDC") ? SiApple : Trophy;
  return (
    <span
      className={`shrink-0 inline-flex items-center gap-1.5 font-semibold rounded-full bg-foreground/[0.06] text-foreground/80 border border-border ${sizes[size].box}`}
    >
      <Icon className={`${sizes[size].icon} -mt-px`} />
      {label}
    </span>
  );
}
