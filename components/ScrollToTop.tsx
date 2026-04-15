"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll to top only on route changes without a hash fragment.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    rafId.current = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, [pathname]);

  return null;
}
