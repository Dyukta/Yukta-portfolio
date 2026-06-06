import type { CSSProperties } from "react";

export function getFabricStyle(color: string): CSSProperties {
  return {
    backgroundImage: `
      repeating-linear-gradient(
        0deg,
        rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px,
        transparent 1px, transparent 4px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px,
        transparent 1px, transparent 4px
      ),
      repeating-linear-gradient(
        45deg,
        rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px,
        transparent 1px, transparent 6px
      ),
      repeating-linear-gradient(
        -45deg,
        rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px,
        transparent 1px, transparent 6px
      )
    `,
    backgroundColor: color,
    backgroundSize: "4px 4px, 4px 4px, 6px 6px, 6px 6px",
  };
}