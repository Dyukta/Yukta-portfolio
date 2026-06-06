import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "butter";

type Props = {
  children: ReactNode;
  variant?: Variant;
  onClick?: () => void;
  href?: string;
  className?: string;
};

export function PillButton({ children, variant = "outline", onClick, href, className = "" }: Props) {
  const base = "pill inline-flex items-center gap-1 ";

  const variants: Record<Variant, string> = {
    primary:
      "bg-pink text-white border-2 border-pink shadow-[0_4px_14px_oklch(57.2%_0.148_358.4/0.30)] hover:brightness-105",
    outline:
      "bg-cream text-ink border-2 border-ink hover:bg-butter active:bg-butter",
    butter:
      "bg-butter text-ink border-2 border-ink/60 hover:bg-butter active:bg-butter",
  };

  const cls = base + variants[variant] + " " + className;

  if (href) return <a href={href} className={cls}>{children}</a>;
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}