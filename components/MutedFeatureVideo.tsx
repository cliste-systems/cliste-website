"use client";

import { useEffect, useRef } from "react";

export function MutedFeatureVideo({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const silence = () => {
      el.muted = true;
      try {
        el.defaultMuted = true;
      } catch {
        /* ignore */
      }
    };
    silence();

    const tryPlay = () => {
      silence();
      void el.play().catch(() => {});
    };

    const onVolume = () => {
      if (!el.muted) silence();
    };
    el.addEventListener("volumechange", onVolume);

    /**
     * Only play while the video is actually visible.
     * Three autoplaying/looping videos kept decoding while offscreen,
     * which made scrolling over the features section feel janky.
     */
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            tryPlay();
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      el.removeEventListener("volumechange", onVolume);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className="pointer-events-none h-full w-full object-cover object-center"
      src={src}
      muted
      playsInline
      loop
      preload="metadata"
      aria-label={label}
    />
  );
}
