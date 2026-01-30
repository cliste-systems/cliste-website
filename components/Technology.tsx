import { Icon } from "./Icon";

export function Technology() {
  return (
    <section
      id="technology"
      className="border-y bg-slate-50 border-slate-200 pt-24 pb-24 relative"
      aria-labelledby="technology-heading"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase text-[10px] font-bold">
              The Technology
            </span>
          </div>
          <h2
            id="technology-heading"
            className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6"
          >
            Built on &quot;Cliste Core.&quot;
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-500 mb-6">
            We don&apos;t just wrap generic APIs. We engineered a proprietary
            real-time voice stack designed specifically for the Irish market.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Icon
                icon="solar:bolt-circle-linear"
                className="text-emerald-600 text-xl shrink-0"
              />
              <span className="text-sm font-medium text-slate-700">
                Latency-Free: Responses in &lt;600ms
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Icon
                icon="solar:map-point-linear"
                className="text-emerald-600 text-xl shrink-0"
              />
              <span className="text-sm font-medium text-slate-700">
                Trained on Irish towns, slang, and phonetics
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Icon
                icon="solar:database-linear"
                className="text-emerald-600 text-xl shrink-0"
              />
              <span className="text-sm font-medium text-slate-700">
                EU Data Sovereignty: Hosted in AWS Dublin
              </span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-semibold text-slate-900 mb-1">
                &lt;600<span className="text-lg text-slate-400">ms</span>
              </div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                Response Time
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-semibold text-slate-900 mb-1">
                99.9<span className="text-lg text-slate-400">%</span>
              </div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                Uptime SLA
              </div>
            </div>
            <div className="col-span-2 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 p-6 rounded-2xl shadow-xl shadow-slate-200/50 text-white border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Icon icon="solar:code-scan-linear" />
                <span className="text-xs font-medium uppercase tracking-wide opacity-80">
                  Architecture
                </span>
              </div>
              <div className="text-lg font-medium">
                Event-Driven WebSocket Stream
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
