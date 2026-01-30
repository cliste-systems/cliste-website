import { Icon } from "./Icon";

export function Security() {
  return (
    <section
      className="py-24 bg-white relative"
      aria-labelledby="security-heading"
    >
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-wide uppercase text-[10px] font-bold">
            Security & Compliance
          </span>
        </div>
        <h2
          id="security-heading"
          className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6"
        >
          Enterprise-Grade Security.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-slate-500 max-w-2xl mx-auto">
          We take data protection seriously. Our infrastructure is built on the
          same encrypted standards used by major financial and medical
          institutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <article className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
            <Icon icon="solar:lock-password-linear" className="text-2xl" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">
            End-to-End Encryption
          </h3>
          <p className="text-sm text-slate-500">
            All voice data is encrypted in transit using TLS and SRTP protocols.
            We utilize next-generation streaming infrastructure.
          </p>
        </article>
        <article className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
            <Icon icon="solar:shield-warning-linear" className="text-2xl" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">
            SOC2 Compliance
          </h3>
          <p className="text-sm text-slate-500">
            Our underlying voice and processing partners are SOC2 Type II
            compliant, ensuring rigorous security controls.
          </p>
        </article>
        <article className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
            <Icon icon="solar:server-square-linear" className="text-2xl" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">
            AWS Dublin Hosting
          </h3>
          <p className="text-sm text-slate-500">
            Cliste Systems hosts your customer data locally in AWS eu-west-1
            (Dublin), ensuring EU Data Sovereignty.
          </p>
        </article>
      </div>
    </section>
  );
}
