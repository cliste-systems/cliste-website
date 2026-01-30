"use client";

import { Icon } from "./Icon";

const faqs = [
  {
    question: "Does it sound like a robot?",
    answer:
      "No. We use the most advanced voice synthesis available. It breathes, pauses, and uses local Irish cadence. Most callers do not realize they are speaking to an AI.",
  },
  {
    question:
      "What if a customer asks a question the AI doesn't know?",
    answer:
      "The AI is trained to politely take a message or forward the call to your mobile if it's an emergency. You can also monitor calls live and jump in if needed.",
  },
  {
    question: "Can I turn it off?",
    answer:
      "Yes. You have full control. You can set it to answer only when you are busy (overflow mode), only after hours, or 24/7.",
  },
  {
    question: "Is it safe for my data?",
    answer:
      "Absolutely. We use End-to-End encryption and host data in AWS Dublin. We are fully GDPR compliant and never sell your customer data.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 bg-white relative"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase text-[10px] font-bold">
              FAQ
            </span>
          </div>
          <h2
            id="faq-heading"
            className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6"
          >
            Common Questions.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg open:ring-2 open:ring-emerald-100 open:border-emerald-200 transition-all"
            >
              <summary className="flex cursor-pointer list-none font-medium text-slate-800 p-6 items-center justify-between rounded-2xl">
                {faq.question}
                <span className="transition-transform group-open:rotate-180 flex-shrink-0 ml-2 text-emerald-600">
                  <Icon icon="solar:alt-arrow-down-linear" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
