import { Icon } from "./Icon";

export function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 pt-24 pb-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wide uppercase text-[10px] font-bold">
                About Us
              </span>
            </div>
            <h2
              id="about-heading"
              className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6"
            >
              Ireland&apos;s Dedicated AI Voice Engineers.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-500 mb-6">
              Based in Donegal, Cliste Systems was founded on one core belief:
              Local businesses deserve local technology. We are Ireland&apos;s
              premier agency specializing in hyper-realistic Irish voice
              automation.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-500 mb-6">
              While Silicon Valley focuses on American accents, we focus on
              Donegal, Dublin, and Cork. We build technology that sounds like
              home.
            </p>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100 shrink-0">
                <Icon
                  icon="solar:hand-shake-linear"
                  className="text-xl text-emerald-600"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-slate-900">
                  A Partnership, Not a Subscription
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  We don&apos;t just hand you a login; we engineer the solution
                  alongside you.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100 shrink-0">
                <Icon
                  icon="solar:map-linear"
                  className="text-xl text-emerald-600"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-slate-900">
                  Built for Ireland
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  Specialized in local accents and geographic knowledge.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100 shrink-0">
                <Icon
                  icon="solar:settings-minimalistic-linear"
                  className="text-xl text-emerald-600"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-slate-900">
                  Custom Engineering
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  From local barbers to national retail chains. If you can
                  describe it, we can build it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
