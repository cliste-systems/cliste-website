import Link from "next/link";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 md:pt-48 md:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-wide uppercase text-[10px] font-bold">
            Irish Start Up
          </span>
        </div>

        <h1
          id="hero-heading"
          className="md:text-6xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6"
        >
          The New Standard for <br className="hidden md:block" /> AI Voice in
          Ireland.
        </h1>

        <p className="md:text-xl leading-relaxed text-lg font-normal text-slate-500 max-w-2xl mx-auto mb-8">
          Automate the ringing phone. We build hyper-realistic Irish voice
          agents to handle admin 24/7 so your team can focus on their work.
        </p>

        <div
          className="flex items-center justify-center gap-1 mb-10 opacity-30 h-8 [&>*]:animate-sound"
          aria-hidden
        >
          <div className="w-1 h-3 bg-slate-900 rounded-full" style={{ animationDelay: "0s" }} />
          <div className="w-1 h-5 bg-slate-900 rounded-full" style={{ animationDelay: "0.1s" }} />
          <div className="w-1 h-8 bg-slate-900 rounded-full" style={{ animationDelay: "0.2s" }} />
          <div className="w-1 h-5 bg-slate-900 rounded-full" style={{ animationDelay: "0.3s" }} />
          <div className="w-1 h-3 bg-slate-900 rounded-full" style={{ animationDelay: "0.4s" }} />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-slate-200 border border-transparent"
          >
            <Icon
              icon="solar:play-circle-bold"
              className="text-xl text-emerald-400 group-hover:scale-110 transition-transform"
            />
            Hear the Tech
          </Link>
          <Link
            href="#solutions"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-center"
          >
            View Solutions
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-400 uppercase tracking-wide">
          <span className="flex items-center gap-1.5">
            <Icon icon="solar:check-circle-bold" className="text-emerald-600" />{" "}
            Proprietary Latency Engine
          </span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="flex items-center gap-1.5">
            <Icon icon="solar:shield-check-bold" className="text-emerald-600" />{" "}
            GDPR Compliant
          </span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span className="flex items-center gap-1.5">
            <Icon icon="solar:check-circle-bold" className="text-emerald-600" />{" "}
            Native Accents
          </span>
        </div>
      </div>
    </section>
  );
}
