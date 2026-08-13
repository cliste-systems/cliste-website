"use client";

import type { ReactNode } from "react";
import { MutedFeatureVideo } from "@/components/MutedFeatureVideo";
import { cn } from "@/lib/utils";
import {
  SECTION_CONTENT_INSET,
  SECTION_INTRO_DESC,
  SECTION_INTRO_GRID,
  SECTION_INTRO_TITLE,
  SECTION_SHELL_PAD,
} from "@/lib/site-layout";

const VOICE_FEATURE_VIDEO_SRC =
  "/grok-video-1713f820-29af-405d-b43f-f7f2a31367e4.mp4";
const CALL_FLOW_FEATURE_VIDEO_SRC =
  "/grok-video-1713f820-29af-405d-b43f-f7f2a31367e78%20(1).mp4";

export function Features9() {
  return (
    <div className={cn("relative w-full", SECTION_SHELL_PAD)}>
      {/* Section intro: mirrors the Partners marquee header for consistency */}
      <div className={SECTION_INTRO_GRID}>
        <h2 id="features-heading" className={SECTION_INTRO_TITLE}>
          <span className="text-slate-900">Irish AI voice agents </span>
          <span className="bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
            for your phone line.
          </span>
        </h2>
        <p className={SECTION_INTRO_DESC}>
          Cliste builds AI voice agents that answer like a local, handle the
          conversation, and leave your team with clear follow-ups.
          <br />
          Engineered in Donegal for businesses that live on the phone.
        </p>
      </div>

      {/* Outer card: clean white shell; all atmosphere comes from each row */}
      <div className={SECTION_CONTENT_INSET}>
        <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_20px_60px_-30px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/80 lg:rounded-[3rem]">
        <div className="relative">
          <VoiceAiRow />

          <RowDivider />

          <CallFlowRow />

          <RowDivider />

          <InboxRow />
        </div>
        </div>
      </div>
    </div>
  );
}

function RowDivider() {
  return (
    <div
      aria-hidden
      className="mx-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent sm:mx-10 md:mx-14 lg:mx-20"
    />
  );
}

/* ------------------------------ shared media card ------------------------------ */

function MediaCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[20px] bg-slate-100"
      style={{ boxShadow: "0 20px 40px rgba(15,23,42,0.08)" }}
    >
      {children}
      {/* Subtle slate overlay at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.06) 100%)",
        }}
      />
    </div>
  );
}

/* ------------------------------ Voice AI row ------------------------------ */

type IconProps = { className?: string };

function WaveformIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className={className}
    >
      <line x1="4" y1="10" x2="4" y2="14" />
      <line x1="8" y1="7" x2="8" y2="17" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="16" y1="7" x2="16" y2="17" />
      <line x1="20" y1="10" x2="20" y2="14" />
    </svg>
  );
}

function ChatIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8A2.5 2.5 0 0 1 17.5 17H12l-4 3.5V17H6.5A2.5 2.5 0 0 1 4 14.5v-8Z" />
    </svg>
  );
}

function BoltIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function LinkIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 1 0-5.7-5.7L11.5 7" />
      <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 1 0 5.7 5.7L12.5 17" />
    </svg>
  );
}

const VOICE_PROOFS: {
  title: string;
  body: string;
  icon: (props: IconProps) => React.ReactElement;
}[] = [
  {
    title: "Understands real conversations",
    body: "Cara handles interruptions, pauses, and natural back-and-forth, just like a person would.",
    icon: ChatIcon,
  },
  {
    title: "Responds instantly",
    body: "No delays, no awkward gaps. Every reply from Cara feels immediate and natural.",
    icon: BoltIcon,
  },
  {
    title: "Always consistent",
    body: "Every caller gets the same clear, confident experience from Cara, every time.",
    icon: ShieldCheckIcon,
  },
];

function VoiceAiRow() {
  return (
    <div className="relative grid grid-cols-1 gap-10 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-12 md:gap-12 md:px-14 lg:px-20 lg:py-24">
      {/* Branded signal-surface background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-white" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(128deg, rgba(252,252,253,0.96) 0%, rgba(245,246,248,0.92) 18%, rgba(232,234,238,0.72) 38%, rgba(207,211,218,0.35) 58%, rgba(138,143,153,0.12) 78%, rgba(28,31,38,0.06) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(520px circle at 26% 46%, rgba(148,163,184,0.20), transparent 62%)",
        }}
      />
      {/* Faint dot grid top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-6 right-6 hidden md:block"
        style={{
          width: "220px",
          height: "160px",
          backgroundImage:
            "radial-gradient(rgba(148,163,184,0.35) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          opacity: 0.35,
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      {/* Left: text */}
      <div className="relative order-2 flex flex-col justify-center md:order-none md:col-span-5">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 text-slate-500">
          <WaveformIcon className="size-4" />
          <span className="text-[12px] font-medium tracking-[0.2em] uppercase">
            Voice AI
          </span>
        </div>

        {/* Headline */}
        <h3 className="mt-5 font-display text-[40px] font-semibold leading-[1.18] tracking-tight text-balance sm:text-[48px] lg:text-[56px]">
          <span className="block text-slate-900">Sounds Irish.</span>
          <span className="mt-0.5 block bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
            Feels Human.
          </span>
        </h3>

        {/* Body */}
        <p className="mt-7 max-w-md text-[16px] leading-[1.6] text-slate-500">
          Not robotic. Not Americanised. Cara is engineered to sound Irish, and
          unmistakably local.
        </p>

        {/* Proof lines */}
        <div className="mt-10 space-y-6">
          {VOICE_PROOFS.map(({ title, body, icon: Icon }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="mt-0.5 size-4 shrink-0 text-slate-900" />
              <div className="leading-tight">
                <p className="text-[14px] font-medium text-slate-900">
                  {title}
                </p>
                <p className="mt-0.5 max-w-sm text-[13px] leading-[1.55] text-slate-500">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: media */}
      <div className="relative order-1 flex items-center justify-center md:order-none md:col-span-7">
        <MediaCard>
          <MutedFeatureVideo
            src={VOICE_FEATURE_VIDEO_SRC}
            label="Sounds Irish. Feels Human., product preview"
          />
        </MediaCard>
      </div>
    </div>
  );
}

/* ------------------------------ Call flow row ------------------------------ */

function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 3.5h3.2l1.2 3.2-1.8 1.3a11 11 0 0 0 5.4 5.4l1.3-1.8 3.2 1.2V16a2.5 2.5 0 0 1-2.5 2.5A13.5 13.5 0 0 1 4.5 6 2.5 2.5 0 0 1 7 3.5Z" />
    </svg>
  );
}

function InboxIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 13h4l2 3h4l2-3h4v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5Z" />
      <path d="M4 13 7 5h10l3 8" />
    </svg>
  );
}

const CALL_FLOW_PROOFS: {
  title: string;
  body: string;
  icon: (props: IconProps) => React.ReactElement;
}[] = [
  {
    title: "Understands why they called",
    body: "Cara matches intent on the line: a quote, a callback, directions, or the right next step.",
    icon: ChatIcon,
  },
  {
    title: "Sends the right follow-up",
    body: "Links, forms, and SMS when they help. Messages for your team when a person needs to take over.",
    icon: LinkIcon,
  },
  {
    title: "Built for real phone lines",
    body: "LiveKit and Twilio voice rails, engineered so callers get a clean, reliable experience.",
    icon: PhoneIcon,
  },
];

function CallFlowRow() {
  return (
    <div className="relative grid grid-cols-1 gap-10 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-12 md:gap-12 md:px-14 lg:px-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-white" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(128deg, rgba(252,252,253,0.96) 0%, rgba(245,246,248,0.92) 18%, rgba(232,234,238,0.72) 38%, rgba(207,211,218,0.35) 58%, rgba(138,143,153,0.12) 78%, rgba(28,31,38,0.06) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(520px circle at 26% 46%, rgba(148,163,184,0.20), transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-6 right-6 hidden md:block"
        style={{
          width: "220px",
          height: "160px",
          backgroundImage:
            "radial-gradient(rgba(148,163,184,0.35) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          opacity: 0.35,
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div className="relative flex items-center justify-center md:order-1 md:col-span-7">
        <MediaCard>
          <MutedFeatureVideo
            src={CALL_FLOW_FEATURE_VIDEO_SRC}
            label="Call flow product preview"
          />
        </MediaCard>
      </div>

      <div className="relative flex flex-col justify-center md:order-2 md:col-span-5">
        <div className="flex items-center gap-2.5 text-slate-500">
          <PhoneIcon className="size-4" />
          <span className="text-[12px] font-medium tracking-[0.2em] uppercase">
            Call flow
          </span>
        </div>

        <h3 className="mt-5 font-display text-[40px] font-semibold leading-[1.18] tracking-tight text-balance sm:text-[48px] lg:text-[56px]">
          <span className="block text-slate-900">Answers.</span>
          <span className="mt-0.5 block bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
            Then routes.
          </span>
        </h3>

        <p className="mt-7 max-w-md text-[16px] leading-[1.6] text-slate-500">
          Your agent does more than pick up. She runs the conversation and
          moves each caller to the right outcome.
        </p>

        <div className="mt-10 space-y-6">
          {CALL_FLOW_PROOFS.map(({ title, body, icon: Icon }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="mt-0.5 size-4 shrink-0 text-slate-900" />
              <div className="leading-tight">
                <p className="text-[14px] font-medium text-slate-900">
                  {title}
                </p>
                <p className="mt-0.5 max-w-sm text-[13px] leading-[1.55] text-slate-500">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Action Inbox row ------------------------------ */

function BellIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" />
      <path d="M10.5 19a1.5 1.5 0 0 0 3 0" />
    </svg>
  );
}

function SyncIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 9" />
      <path d="M20 4v5h-5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15" />
      <path d="M4 20v-5h5" />
    </svg>
  );
}

const INBOX_PROOFS: {
  title: string;
  body: string;
  icon: (props: IconProps) => React.ReactElement;
}[] = [
  {
    title: "Action Inbox",
    body: "Anything that still needs a person lands in one place: callbacks, quotes, and open loops.",
    icon: InboxIcon,
  },
  {
    title: "Call history you can trust",
    body: "See what was said, what Cara handled, and what still needs a reply.",
    icon: BellIcon,
  },
  {
    title: "Live as it happens",
    body: "Calls and actions update in real time so your team is never guessing.",
    icon: SyncIcon,
  },
];

function InboxRow() {
  return (
    <div className="relative grid grid-cols-1 gap-10 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-12 md:gap-12 md:px-14 lg:px-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-white" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(128deg, rgba(252,252,253,0.96) 0%, rgba(245,246,248,0.92) 18%, rgba(232,234,238,0.72) 38%, rgba(207,211,218,0.35) 58%, rgba(138,143,153,0.12) 78%, rgba(28,31,38,0.06) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(520px circle at 26% 46%, rgba(148,163,184,0.20), transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-6 right-6 hidden md:block"
        style={{
          width: "220px",
          height: "160px",
          backgroundImage:
            "radial-gradient(rgba(148,163,184,0.35) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          opacity: 0.35,
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />

      <div className="relative order-2 flex flex-col justify-center md:order-none md:col-span-5">
        <div className="flex items-center gap-2.5 text-slate-500">
          <InboxIcon className="size-4" />
          <span className="text-[12px] font-medium tracking-[0.2em] uppercase">
            Dashboard
          </span>
        </div>

        <h3 className="mt-5 font-display text-[40px] font-semibold leading-[1.18] tracking-tight text-balance sm:text-[48px] lg:text-[56px]">
          <span className="block text-slate-900">Calls.</span>
          <span className="mt-0.5 block bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
            Actions. Clear.
          </span>
        </h3>

        <p className="mt-7 max-w-md text-[16px] leading-[1.6] text-slate-500">
          Run your voice agent from one dashboard: calls handled, open actions,
          and what still needs your team.
        </p>

        <div className="mt-10 space-y-6">
          {INBOX_PROOFS.map(({ title, body, icon: Icon }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="mt-0.5 size-4 shrink-0 text-slate-900" />
              <div className="leading-tight">
                <p className="text-[14px] font-medium text-slate-900">
                  {title}
                </p>
                <p className="mt-0.5 max-w-sm text-[13px] leading-[1.55] text-slate-500">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative order-1 flex items-center justify-center md:order-none md:col-span-7">
        <MediaCard>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/payments-imessage-v2.png"
            alt="Cliste voice agent follow-up on iPhone"
            className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-center"
          />
        </MediaCard>
      </div>
    </div>
  );
}
