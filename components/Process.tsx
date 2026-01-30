export function Process() {
  return (
    <section
      className="bg-white pt-24 pb-24 relative"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase text-[10px] font-bold">
              The Process
            </span>
          </div>
          <h2
            id="process-heading"
            className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6"
          >
            From Audit to Live in 14 Days.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-500">
            We build, configure, and test the system for you.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"
            aria-hidden
          />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <article className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow text-center">
              <div className="w-10 h-10 mx-auto bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 text-white rounded-full flex items-center justify-center font-semibold mb-4 shadow-lg shadow-slate-200/50 border border-white/10">
                1
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                The Audit
              </h3>
              <p className="uppercase text-xs font-semibold text-emerald-600 mb-3">
                Day 1
              </p>
              <p className="text-sm text-slate-500">
                We hop on a call to understand your business rules, operational
                hours, and tone of voice.
              </p>
            </article>

            <article className="text-center bg-white border-slate-200 border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 mx-auto bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 text-white rounded-full flex items-center justify-center font-semibold mb-4 shadow-lg shadow-slate-200/50 border border-white/10">
                2
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                The Build
              </h3>
              <p className="uppercase text-xs font-semibold text-emerald-600 mb-3">
                Days 2-12
              </p>
              <p className="text-sm text-slate-500">
                Our engineers upload your data, configure your custom knowledge
                base, and integrate tools.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 mx-auto bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 text-white rounded-full flex items-center justify-center font-semibold mb-4 shadow-lg shadow-slate-200/50 border border-white/10">
                3
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                The Handoff
              </h3>
              <p className="uppercase text-xs font-semibold text-emerald-600 mb-3">
                Days 12-14
              </p>
              <p className="text-sm text-slate-500">
                We do final test calls, show you the dashboard controls, and flip
                the switch. Automated.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
