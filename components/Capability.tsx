import { Icon } from "./Icon";

export function Capability() {
  return (
    <section
      className="py-24 bg-slate-50 relative"
      aria-labelledby="capability-heading"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase text-[10px] font-bold">
              The Capability
            </span>
          </div>
          <h2
            id="capability-heading"
            className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6"
          >
            Your Phone Line, Fully Automated.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-500">
            The phone is essential, but it is also your biggest distraction. We
            turn that distraction into a productivity engine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <article className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <Icon icon="solar:lock-unlocked-linear" className="text-xl" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-3">
              Unlock Your Staff
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your team shouldn&apos;t have to drop tools, leave a meeting, or
              stop what they are doing just to say &quot;We&apos;re open until
              6.&quot; Let them focus on high-value work while we handle the
              admin.
            </p>
          </article>

          <article className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <Icon icon="solar:stop-circle-linear" className="text-xl" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-3">
              End the Repetition
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Answering the same 5 questions all day is a drain on your
              team&apos;s energy. Our AI handles FAQs, directions, and routine
              checks instantly and consistently.
            </p>
          </article>

          <article className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <Icon icon="solar:clock-circle-linear" className="text-xl" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-3">
              24/7 Reliability
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your AI agent never gets sick, never takes a lunch break, and never
              misses a lead—ensuring your business is reachable even when your
              doors are closed.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
