import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Free Demo",
  description:
    "Schedule a 30-minute call with Cliste Systems. See how our Irish voice agents can automate your phone line.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8 mt-4">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase text-[10px] font-bold">
              Get in Touch
            </span>
          </div>
          <h1 className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6">
            Book a Free Demo
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-slate-500 max-w-2xl mx-auto">
            Choose a time that works for you. We&apos;ll walk you through how
            Cliste can automate your phone line in a 30-minute call.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden bg-slate-50">
          <CalendlyEmbed />
        </div>
      </div>
    </main>
  );
}
