import Link from "next/link";
import { Icon } from "./Icon";

const solutions = [
  {
    icon: "solar:scissors-square-linear",
    title: "Cliste Salon",
    description:
      "For Hairdressers & Beauty. Handles color formulas, timing rules, and patch tests. Includes Booking Dashboard.",
    cta: "Explore Salon",
    href: "#solutions",
    variant: "default" as const,
  },
  {
    icon: "solar:user-id-linear",
    title: "Cliste Barber",
    description:
      "For Barbershops. Handles queue systems and quick slot filling. Designed for high volume speed.",
    cta: "Explore Barber",
    href: "#solutions",
    variant: "default" as const,
  },
  {
    icon: "solar:stethoscope-linear",
    title: "Cliste Clinic",
    description:
      "For MedSpas & Physios. Engineered for triage protocols with strict privacy and data controls.",
    cta: "Explore Clinic",
    href: "#solutions",
    variant: "default" as const,
  },
  {
    icon: "solar:code-square-linear",
    title: "Custom Build",
    description:
      "Retail, Trades, Hospitality. We are an engineering firm. If you can describe it, we can build it.",
    cta: "Contact Engineering",
    href: "#contact",
    variant: "custom" as const,
  },
];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="py-24 bg-white"
      aria-labelledby="solutions-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase text-[10px] font-bold">
              The Cliste Suite
            </span>
          </div>
          <h2
            id="solutions-heading"
            className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6"
          >
            Custom-Built for Your Workflow.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-500">
            Every Cliste Agent is custom-configured to your specific rules. We
            have Specialized Dashboards ready for these sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <article
              key={s.title}
              className={`group p-6 rounded-2xl border flex flex-col ${
                s.variant === "custom"
                  ? "border-slate-200 border-dashed bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all"
                  : "border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all bg-white"
              }`}
            >
              <div
                className={`mb-4 ${s.variant === "custom" ? "text-slate-400" : "text-slate-900"}`}
              >
                <Icon icon={s.icon} className="text-4xl" />
              </div>
              <h3 className="text-base font-medium text-slate-900 mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-slate-500 mb-6 flex-grow">
                {s.description}
              </p>
              <Link
                href={s.href}
                className={`w-full py-2 text-xs font-medium text-center rounded-xl transition-all block ${
                  s.variant === "custom"
                    ? "text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-transparent hover:opacity-90 shadow-lg shadow-slate-200/50"
                    : "text-slate-700 bg-slate-50 border border-slate-200 group-hover:bg-gradient-to-br group-hover:from-slate-900 group-hover:via-slate-700 group-hover:to-slate-400 group-hover:text-white group-hover:border-transparent"
                }`}
              >
                {s.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
