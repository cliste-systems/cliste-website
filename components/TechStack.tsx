import { Icon } from "./Icon";

export function TechStack() {
  return (
    <section
      className="py-24 border-y border-slate-100 bg-slate-50/50"
      aria-label="Technology partners"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-wide uppercase text-[10px] font-bold">
            Powered by Enterprise Infrastructure
          </span>
        </div>
        <h2 className="md:text-5xl text-4xl font-display font-semibold tracking-tight leading-[1.28] pb-2.5 bg-clip-text text-transparent bg-gradient-to-br from-slate-950 via-slate-600 to-slate-300 mb-6">
          Built on the Best.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-12">
          Supabase, Vercel, Twilio, LiveKit. Enterprise-grade infrastructure powering every Cliste voice agent.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-xl font-semibold text-slate-700">
            <Icon icon="simple-icons:supabase" width={32} className="grayscale" />
          </div>
          <div className="flex items-center gap-2 text-xl font-semibold text-slate-700">
            <Icon icon="logos:vercel-icon" width={28} className="grayscale" />
          </div>
          <div className="flex items-center gap-2 text-xl font-semibold text-slate-700">
            <Icon icon="logos:twilio" width={80} className="grayscale" />
          </div>
          <div className="flex items-center gap-2 text-xl font-semibold text-slate-700">
            <Icon icon="simple-icons:livekit" width={32} className="grayscale" />
            <span className="text-sm font-medium tracking-tight">LiveKit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
