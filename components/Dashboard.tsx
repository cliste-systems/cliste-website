import { Layers, RefreshCw, ShieldCheck, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: Layers,
    title: "Everything in one place",
    body: "Calls, inbox, and agent setup — no tool-switching.",
  },
  {
    icon: RefreshCw,
    title: "Real-time updates",
    body: "Live data across calls, Action Inbox, and contacts.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & private",
    body: "Bank-grade security. Your data stays yours.",
  },
  {
    icon: TrendingUp,
    title: "Built to scale",
    body: "From one line to many. We scale with you.",
  },
];

export function Dashboard() {
  return (
    <section
      id="dashboard"
      aria-labelledby="dashboard-heading"
      className="relative w-full overflow-hidden bg-[#f5f6f8]"
    >
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        {/* Top: copy */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-500">
                Platform
              </p>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Beta
              </span>
            </div>
            <h2
              id="dashboard-heading"
              className="font-display text-4xl font-semibold leading-[1.18] tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-br from-slate-950 via-slate-700 to-slate-400 sm:text-5xl"
            >
              One dashboard for your voice agent.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Calls, Action Inbox, contacts, and Cara setup — all in one place.
            </p>

            <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
                  >
                    <Icon className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <div className="leading-snug">
                    <p className="font-display text-[15px] font-semibold tracking-tight text-slate-900">
                      {title}
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: dashboard preview, allowed to overflow rightward like the mockup */}
          <div className="relative lg:w-[140%]">
            <ClisteStudioDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function ClisteStudioDashboard() {
  return (
    <div className="w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
      <div className="flex min-h-[620px] text-slate-900">
        {/* Sidebar */}
        <aside className="hidden w-[220px] border-r border-slate-100 bg-white p-6 sm:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-semibold text-white">
              C
            </div>
            <div>
              <div className="font-semibold">Cliste</div>
              <div className="text-xs text-slate-500">Dashboard</div>
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-3 text-[10px] tracking-[0.16em] uppercase text-slate-400">
              Logged in as
            </div>
            <div className="text-sm font-semibold">Brendan O&apos;Toole</div>
            <div className="text-xs text-slate-500">Admin</div>
          </div>

          <nav className="space-y-1 text-sm">
            {[
              "Home",
              "Action Inbox",
              "Calls",
              "Contacts",
              "Call flow",
              "Cara Setup",
              "Usage",
              "Support",
              "Settings",
            ].map((item, i) => (
              <div
                key={item}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 ${
                  i === 0
                    ? "bg-white font-medium shadow-sm ring-1 ring-slate-200"
                    : "text-slate-500"
                }`}
              >
                <span>{item}</span>
                {(item === "Calls" || item === "Action Inbox") && (
                  <span className="rounded-full bg-slate-950 px-1.5 py-0.5 text-[10px] text-white">
                    2
                  </span>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 bg-[#fbfcfe] p-6 sm:p-10">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-start">
            <div>
              <h3 className="font-display text-[28px] font-semibold tracking-tight text-slate-950 sm:text-[34px]">
                Today at a glance
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                An overview of your AI receptionist&rsquo;s performance and
                recent business activity.
              </p>
            </div>

            <div className="flex rounded-full border border-slate-200 bg-white p-1 text-xs shadow-sm">
              {["Today", "Yesterday", "Last 7 days", "Last 4 weeks"].map(
                (item, i) => (
                  <button
                    key={item}
                    type="button"
                    className={`rounded-full px-4 py-2 ${
                      i === 0 ? "bg-slate-950 text-white" : "text-slate-500"
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Stat
              title="Calls handled"
              subtitle="Answered by AI · today"
              value="7"
            />
            <Stat
              title="Actions open"
              subtitle="Needs your team"
              value="2"
            />
            <Stat
              title="Avg handle"
              subtitle="Talk time · today"
              value="48s"
            />
            <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-lg">
              <div className="text-sm font-medium">Line status</div>
              <div className="mt-1 text-xs text-slate-400">
                Agent live
              </div>
              <div className="mt-10 text-5xl font-light">On</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-[1.4fr_0.9fr]">
            <section>
              <div className="mb-5 flex items-end justify-between">
                <div>
                  <h4 className="text-lg font-semibold">Action Inbox</h4>
                  <p className="text-sm text-slate-500">
                    Open loops from recent calls.
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-500"
                >
                  View all
                </button>
              </div>

              <div className="space-y-3">
                <Booking
                  name="Brandon"
                  service="CALLBACK"
                  time="Today, 3:12 pm"
                />
                <Booking
                  name="Martin"
                  service="QUOTE REQUEST"
                  time="Today, 1:40 pm"
                />
              </div>
            </section>

            <section>
              <div className="mb-5">
                <h4 className="text-lg font-semibold">AI Event Log</h4>
                <p className="text-sm text-slate-500">
                  Latest autonomous interactions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-600">
                    ● HANDLED
                  </span>
                  <span className="text-xs text-slate-400">
                    23 Apr, 3:42 pm
                  </span>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                  <div className="text-sm font-semibold">Incoming call</div>
                  <div className="mt-2 text-sm text-slate-500">
                    +353 87 271 5938
                  </div>
                  <div className="mt-4 text-xs text-slate-500">3s duration</div>
                </div>

                <div className="mt-8 text-xs text-slate-300 italic">
                  Scroll call history for more events.
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function Stat({
  title,
  subtitle,
  value,
}: {
  title: string;
  subtitle: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-sm font-medium">{title}</div>
      <div className="mt-1 text-xs text-slate-500">{subtitle}</div>
      <div className="mt-9 text-5xl font-light tracking-tight text-slate-950">
        {value}
      </div>
    </div>
  );
}

function Booking({
  name,
  service,
  time,
}: {
  name: string;
  service: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-medium shadow-sm">
          {name[0]}
        </div>
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="mt-1 inline-flex rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold tracking-wide text-slate-500">
            {service}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500">
        {time}
      </div>
    </div>
  );
}
