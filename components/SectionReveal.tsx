"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { SECTION_REVEAL_ROOT_MARGIN } from "@/lib/site-layout";

/**
 * Scroll-triggered fade-up wrapper. Same animation language as the hero.
 *
 * Design notes (to avoid the timing issues we hit before):
 * - Uses `rootMargin` with a NEGATIVE bottom so the reveal fires slightly
 *   BEFORE the section's top edge reaches the bottom of the viewport, not
 *   once it's already scrolled into the middle. This prevents the
 *   "animation plays after I've already read it" feeling.
 * - Disconnects after the first trigger so it never re-fires on scroll.
 * - Respects `prefers-reduced-motion`.
 * - If the section is already in view on mount (e.g. deep-link / refresh
 *   mid-page), IntersectionObserver fires synchronously on next frame and
 *   reveals immediately, with no flash of invisible content.
 */
export function SectionReveal({
  as: Tag = "div",
  children,
  className = "",
  rootMargin = SECTION_REVEAL_ROOT_MARGIN,
  threshold = 0,
}: {
  as?: keyof React.JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number | number[];
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the user prefers reduced motion, just reveal immediately.
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setRevealed(true);
      return;
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      io.disconnect();
      setRevealed(true);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal();
        }
      },
      { threshold, rootMargin },
    );

    const raf = requestAnimationFrame(() => io.observe(el));

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [rootMargin, threshold]);

  const Component = Tag as unknown as React.ElementType;

  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={`section-reveal${revealed ? " is-revealed" : ""} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
