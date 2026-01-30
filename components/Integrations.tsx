import Link from "next/link";
import { Icon } from "./Icon";

const integrations = [
  { icon: "solar:calendar-linear", name: "Google Calendar" },
  { icon: "solar:letter-linear", name: "Outlook" },
  { icon: "solar:card-linear", name: "Stripe" },
  { icon: "solar:wallet-money-linear", name: "Revolut Business" },
  { icon: "solar:phone-linear", name: "Twilio" },
  { icon: "solar:chat-round-linear", name: "WhatsApp" },
];

export function Integrations() {
  return (
    <section
      id="integrations"
      className="py-24 border-t border-slate-100 bg-white relative"
      aria-labelledby="integrations-heading"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative">
        <div className="md:w-1/3">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase text-[10px] font-bold">
              Integrations
            </span>
          </div>
          <h2
            id="integrations-heading"
            className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6"
          >
            Connects To Your Ecosystem.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-500 mb-8">
            Our agents integrate seamlessly with the tools you already use.
          </p>
          <Link
            href="#integrations"
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors"
          >
            View all integrations{" "}
            <Icon icon="solar:arrow-right-linear" width={16} />
          </Link>
        </div>
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all"
            >
              <Icon icon={item.icon} className="text-xl text-emerald-600 shrink-0" />
              <span className="text-sm font-medium text-slate-700">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
