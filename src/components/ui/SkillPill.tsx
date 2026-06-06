import { cn } from "@/lib/cn";
import type { CSSProperties } from "react";

type Props = {
  label: string;
  rotation: number;
  className?: string;
  style?: CSSProperties;
};

export function SkillPill({ label, rotation, className, style }: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 rounded-full",
        "border border-ink/60 bg-cream",
        "font-shadows text-sm text-ink",
        "shadow-[1px_1px_0px_oklch(22.4%_0.032_68.1/0.12)]",
        "cursor-grab active:cursor-grabbing select-none whitespace-nowrap",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
    >
      {label}
    </div>
  );
}