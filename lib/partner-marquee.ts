import type { MarqueeLogo } from "@/components/ui/marquee-logo-scroller";

/**
 * Infrastructure partners: aligned with cliste-code-base-1 sub-processors
 * (EEA hosting, telephony, real-time voice, edge security).
 */
export const PARTNER_MARQUEE_LOGOS: MarqueeLogo[] = [
  {
    src: "https://svgl.app/library/supabase.svg",
    alt: "Supabase",
    gradient: { from: "#e8eaee", via: "#22c55e", to: "#1c1f26" },
  },
  {
    src: "https://svgl.app/library/vercel.svg",
    alt: "Vercel",
    gradient: { from: "#f5f6f8", via: "#94a3b8", to: "#0f172a" },
  },
  {
    src: "https://svgl.app/library/railway.svg",
    alt: "Railway",
    gradient: { from: "#f1f5f9", via: "#a855f7", to: "#1c1f26" },
  },
  {
    src: "https://svgl.app/library/twilio.svg",
    alt: "Twilio",
    gradient: { from: "#f1f5f9", via: "#f22f46", to: "#1c1f26" },
  },
  {
    src: "https://cdn.simpleicons.org/livekit/1FD5F9",
    alt: "LiveKit",
    gradient: { from: "#e0f2fe", via: "#0ea5e9", to: "#1c1f26" },
  },
  {
    src: "https://svgl.app/library/cloudflare.svg",
    alt: "Cloudflare",
    gradient: { from: "#fff7ed", via: "#f97316", to: "#1c1f26" },
  },
];
