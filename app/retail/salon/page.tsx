import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/retail/salon",
  title: "AI Voice Agents for Salons",
  description:
    "Irish AI voice agents for salon phone lines. Answer every call, handle enquiries, and leave clear follow-ups. Donegal-engineered.",
});

export default function RetailSalonPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-10 sm:pt-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
          <Link href="/retail" className="hover:text-slate-800">
            Cara for retail
          </Link>{" "}
          · Salon
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Irish AI voice agents for salons.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Missed salon calls cost appointments. Cliste answers with a local
          Irish voice, handles the conversation, and puts open loops in your
          Action Inbox so your team can follow up.
        </p>

        <ul className="mt-10 space-y-4 text-[15px] leading-relaxed text-slate-700">
          <li>
            <strong className="font-semibold text-slate-900">Answers 24/7</strong>
            : evenings and weekends included.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">
              Handles real salon talk
            </strong>
            : enquiries, hours, directions, and when to escalate to a person.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">
              Clear next steps
            </strong>
            : SMS follow-ups and Action Inbox items, not a booking platform.
          </li>
        </ul>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Book a demo
          </Link>
          <Link
            href="/retail"
            className="inline-flex items-center justify-center rounded-full bg-slate-100 px-7 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
          >
            All retail verticals
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
