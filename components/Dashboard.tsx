import { Icon } from "./Icon";

export function Dashboard() {
  return (
    <section
      className="py-16 md:py-24 bg-white relative"
      aria-labelledby="dashboard-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wide uppercase text-[10px] font-bold">
                Control Center
              </span>
            </div>

            <h2
              id="dashboard-heading"
              className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6"
            >
              Your Dedicated Dashboard.
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-slate-500 mb-10 max-w-lg">
              We build the system, but you hold the keys. Get full visibility
              into every interaction with a beautifully designed control panel.
            </p>

            <div className="space-y-4">
              <div className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Icon icon="solar:calendar-add-linear" className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Live Calendar
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Watch appointments drop into your schedule instantly as they
                    happen.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Icon icon="solar:user-check-linear" className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Human Override
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Full admin rights to edit, cancel, or intervene in bookings
                    manually.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Icon icon="solar:document-text-linear" className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Call Transcripts
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Read exactly what the customer asked and the AI&apos;s
                    response.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 perspective-normal group">
            <div className="relative w-full aspect-[4/3] bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden transform transition-all duration-700 ease-out md:-rotate-y-10 md:rotate-x-5 md:group-hover:rotate-y-0 md:group-hover:rotate-x-0">
              <div className="h-12 bg-white border-b border-slate-100 flex items-center justify-between px-5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">
                    System Online
                  </span>
                </div>
              </div>

              <div className="flex h-full bg-slate-50/30">
                <div className="w-16 h-full border-r border-slate-100 bg-white flex flex-col items-center py-6 gap-6 hidden sm:flex">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 flex items-center justify-center text-white shadow-lg shadow-slate-200">
                    <Icon icon="solar:command-bold" />
                  </div>
                  <div className="w-full px-4">
                    <div className="h-px bg-slate-100" />
                  </div>
                  <div className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer">
                    <Icon icon="solar:home-linear" className="text-lg" />
                  </div>
                  <div className="w-8 h-8 rounded-lg text-emerald-600 bg-emerald-50 flex items-center justify-center transition-colors cursor-pointer">
                    <Icon icon="solar:calendar-bold" className="text-lg" />
                  </div>
                  <div className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer">
                    <Icon icon="solar:users-group-rounded-linear" className="text-lg" />
                  </div>
                  <div className="mt-auto w-8 h-8 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer">
                    <Icon icon="solar:settings-linear" className="text-lg" />
                  </div>
                </div>

                <div className="flex-1 p-6 overflow-hidden">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Calls Today
                      </div>
                      <div className="flex items-end justify-between">
                        <div className="text-2xl font-bold text-slate-900">
                          42
                        </div>
                        <div className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                          <Icon icon="solar:arrow-right-up-linear" className="mr-0.5" />
                          12%
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Bookings
                      </div>
                      <div className="flex items-end justify-between">
                        <div className="text-2xl font-bold text-slate-900">
                          18
                        </div>
                        <div className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                          <Icon icon="solar:arrow-right-up-linear" className="mr-0.5" />
                          5%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-sm font-semibold text-slate-900">
                      Recent Activity
                    </h5>
                    <div className="text-xs font-medium text-emerald-600 cursor-pointer">
                      View All
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm hover:border-emerald-100 transition-colors cursor-default">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">
                        JD
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-slate-900 truncate">
                          John Doe - Booking Inquiry
                        </div>
                        <div className="text-[10px] text-slate-400">
                          2 mins ago • 04:12 duration
                        </div>
                      </div>
                      <div className="text-[10px] font-medium px-2 py-1 rounded bg-emerald-50 text-emerald-600">
                        Success
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm hover:border-emerald-100 transition-colors cursor-default">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-xs font-medium text-emerald-600">
                        SM
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-slate-900 truncate">
                          Sarah Miller - Reschedule
                        </div>
                        <div className="text-[10px] text-slate-400">
                          15 mins ago • 01:45 duration
                        </div>
                      </div>
                      <div className="text-[10px] font-medium px-2 py-1 rounded bg-amber-50 text-amber-600">
                        Pending
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm hover:border-emerald-100 transition-colors cursor-default">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">
                        MK
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-slate-900 truncate">
                          Mike Kelly - Pricing Q
                        </div>
                        <div className="text-[10px] text-slate-400">
                          32 mins ago • 02:10 duration
                        </div>
                      </div>
                      <div className="text-[10px] font-medium px-2 py-1 rounded bg-emerald-50 text-emerald-600">
                        Answered
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>

            <div
              className="absolute -right-4 top-1/2 translate-x-0 -translate-y-1/2 bg-white p-3 rounded-lg shadow-xl border border-slate-100 z-10 hidden lg:flex items-center gap-3 animate-bounce"
              style={{ animationDuration: "3s" }}
              aria-hidden
            >
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <Icon icon="solar:check-circle-bold" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  New Appointment
                </div>
                <div className="text-[10px] text-slate-500">
                  Auto-booked just now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
