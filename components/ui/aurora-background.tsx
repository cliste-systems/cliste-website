"use client";

import { useMemo, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type AuroraBackgroundProps = {
  className?: string;
  children?: ReactNode;
  starCount?: number;
  gradientColors?: [string, string];
  pulseDuration?: number;
};

function starLayout(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const t = (i * 2654435761) >>> 0;
    return {
      id: i,
      x: `${(t % 10000) / 100}%`,
      y: `${((t >> 8) % 10000) / 100}%`,
      peak: 0.15 + ((t >> 16) % 50) / 100,
      duration: 2 + ((t >> 4) % 30) / 10,
      delay: ((t >> 12) % 50) / 10,
    };
  });
}

export function AuroraBackground({
  className,
  children,
  starCount = 40,
  gradientColors = [
    "rgba(207, 211, 218, 0.4)",
    "rgba(138, 143, 153, 0.28)",
  ],
  pulseDuration = 10,
}: AuroraBackgroundProps) {
  const reduceMotion = useReducedMotion();
  const [colorA, colorB] = gradientColors;
  const stars = useMemo(() => starLayout(starCount), [starCount]);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,#000_0%,#000_72%,transparent_100%),radial-gradient(ellipse_90%_80%_at_50%_38%,#000_52%,transparent_100%)] [mask-composite:intersect]"
        aria-hidden
      >
        <div
          className="absolute inset-0 opacity-55 aurora-pulse"
          style={{
            backgroundImage: `
              radial-gradient(circle at 14% 12%, ${colorA} 0%, transparent 48%),
              radial-gradient(circle at 86% 18%, ${colorB} 0%, transparent 46%),
              radial-gradient(circle at 72% 78%, ${colorB} 0%, transparent 42%)
            `,
            animationDuration: `${pulseDuration}s`,
          }}
        />

        {!reduceMotion ? (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute left-[4%] top-[2%] h-[32%] w-[32%] rounded-full bg-slate-400/22 blur-3xl"
              animate={{ x: [-8, 8, -8], y: [-6, 6, -6], scale: [1, 1.06, 1] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute right-[4%] top-[4%] h-[30%] w-[30%] rounded-full bg-neutral-400/18 blur-3xl"
              animate={{ x: [8, -8, 8], y: [-6, 6, -6], scale: [1, 1.08, 1] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-[6%] right-[10%] h-[24%] w-[24%] rounded-full bg-slate-300/16 blur-3xl"
              animate={{ x: [6, -6, 6], y: [4, -4, 4], scale: [1, 1.05, 1] }}
              transition={{
                duration: 45,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ) : null}

        {!reduceMotion
          ? stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute h-0.5 w-0.5 rounded-full bg-slate-400/50"
                style={{ left: star.x, top: star.y }}
                animate={{ opacity: [0, star.peak, 0] }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                  ease: "easeInOut",
                }}
              />
            ))
          : null}
      </div>

      <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}
