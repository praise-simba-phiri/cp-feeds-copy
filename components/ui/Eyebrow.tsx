import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  tone?: "accent" | "ink" | "muted" | "white";
  className?: string;
  rule?: boolean;
};

const tones: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  accent: "text-accent",
  ink: "text-ink",
  muted: "text-muted",
  white: "text-white/80",
};

export function Eyebrow({
  children,
  tone = "accent",
  className,
  rule = true,
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em]",
        tones[tone],
        className,
      )}
    >
      {rule ? (
        <span
          aria-hidden
          className="h-px w-6 bg-current"
        />
      ) : null}
      {children}
    </span>
  );
}
