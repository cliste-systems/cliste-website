"use client";

import { cn } from "@/lib/utils";

export type BgGradientProps = {
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientSize?: string;
  gradientPosition?: string;
  gradientStop?: string;
};

/** reuno-ui / 21st.dev: radial hero gradient background */
export function BgGradient({
  className,
  gradientFrom = "#fff",
  gradientTo = "#63e",
  gradientSize = "125% 125%",
  gradientPosition = "50% 10%",
  gradientStop = "40%",
}: BgGradientProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 h-full w-full", className)}
      style={{
        background: `radial-gradient(${gradientSize} at ${gradientPosition}, ${gradientFrom} ${gradientStop}, ${gradientTo} 100%)`,
      }}
      aria-hidden
    />
  );
}

/** 21st.dev registry export name */
export const Component = BgGradient;
