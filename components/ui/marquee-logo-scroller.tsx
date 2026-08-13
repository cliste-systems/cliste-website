"use client";

import {
  forwardRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import {
  SECTION_INTRO_DESC,
  SECTION_INTRO_GRID,
  SECTION_INTRO_TITLE,
} from "@/lib/site-layout";

export interface MarqueeLogo {
  src: string;
  alt: string;
  gradient: { from: string; via: string; to: string };
}

export interface MarqueeLogoScrollerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  description: string;
  logos: MarqueeLogo[];
  speed?: "normal" | "slow" | "fast";
  /** Sets `id` on the `h2` and `aria-labelledby` on the section for landmarks */
  titleId?: string;
}

/**
 * Infinitely scrolling logo marquee; pauses on hover.
 * Keyframes: `marquee-x` (scoped in globals to avoid name clashes).
 */
const MarqueeLogoScroller = forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
  (
    { title, description, logos, speed = "normal", titleId, className, ...props },
    ref,
  ) => {
    const durationMap = { normal: "40s", slow: "80s", fast: "5s" };
    const animationDuration = durationMap[speed];

    return (
      <section
        ref={ref}
        aria-label={
          titleId ? undefined : typeof title === "string" ? title : undefined
        }
        aria-labelledby={titleId}
        className={cn(
          "box-border w-full min-w-0 max-w-full overflow-hidden bg-transparent text-foreground",
          className,
        )}
        {...props}
      >
        <div className="px-4 pt-10 pb-6 sm:px-6 sm:pt-12 sm:pb-8 lg:px-8 lg:pt-14 lg:pb-8">
          <div
            className={cn(
              SECTION_INTRO_GRID,
              "mb-0 border-b border-border/80 pb-6 md:pb-8",
            )}
          >
            <h2 id={titleId} className={SECTION_INTRO_TITLE}>
              {title}
            </h2>
            <p className={SECTION_INTRO_DESC}>{description}</p>
          </div>
        </div>

        <div
          className="min-w-0 w-full max-w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="marquee-logo-track flex w-max items-center gap-4 py-4 pr-4 transition-all duration-300 ease-in-out hover:[animation-play-state:paused]"
            style={
              {
                animation: `marquee-x ${animationDuration} linear infinite`,
              } as CSSProperties
            }
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="group relative flex h-24 w-40 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary/80"
              >
                <div
                  style={
                    {
                      "--from": logo.gradient.from,
                      "--via": logo.gradient.via,
                      "--to": logo.gradient.to,
                    } as CSSProperties
                  }
                  className="absolute inset-0 scale-150 bg-gradient-to-br from-[var(--from)] via-[var(--via)] to-[var(--to)] opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
                />
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="relative h-3/4 w-auto max-w-[85%] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);

MarqueeLogoScroller.displayName = "MarqueeLogoScroller";

export { MarqueeLogoScroller };
