"use client";

import { useEffect, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/brendan-clistesystems/30min";
const SCRIPT_URL = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
        autoLoad?: boolean;
        doNotHash?: boolean;
        doNotScroll?: boolean;
      }) => void;
    };
  }
}

export function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent) return;

    function init() {
      if (window.Calendly && parent) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: parent,
          autoLoad: true,
          doNotHash: true,
          doNotScroll: true,
        });
      }
    }

    if (window.Calendly) {
      init();
      return;
    }

    const existing = document.querySelector(`script[src="${SCRIPT_URL}"]`);
    if (existing) {
      existing.addEventListener("load", init);
      return () => existing.removeEventListener("load", init);
    }

    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="calendly-embed"
      style={{
        minWidth: "320px",
        width: "100%",
        height: "950px",
      }}
      aria-label="Calendly booking"
    />
  );
}
