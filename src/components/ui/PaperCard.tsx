import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  tapeLeft?: boolean;
  tapeRight?: boolean;
};

export function PaperCard({ children, className, tapeLeft = true, tapeRight = true }: Props) {
  return (
    <div className={cn("relative", className)}>
      {tapeLeft && (
        <div className="tape" style={{ top: -11, left: 72, transform: "rotate(-2deg)" }} />
      )}
      {tapeRight && (
        <div className="tape" style={{ top: -11, right: 72, transform: "rotate(2deg)" }} />
      )}
      <div className="texture-paper shadow-paper rounded-sm border border-ink/5 px-10 py-10">
        {children}
      </div>
    </div>
  );
}