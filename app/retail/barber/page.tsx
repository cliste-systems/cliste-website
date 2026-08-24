import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/retail/barber",
  title: "AI Voice Agents for Barbers",
  description:
    "Irish AI voice agents for barbershop phones. Catch walk-ins, callbacks, and busy-line chaos. Donegal-engineered.",
});

export default function RetailBarberPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-10 sm:pt-14">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
          <Link href="/retail" className="hover:text-slate-800">
            Cara for retail
          </Link>{" "}
          · Barber
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Irish AI voice agents for barbers.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          When the shop is full, the phone still rings. Cliste picks up with a
          Donegal-engineered Irish voice, keeps the conversation moving, and
          leaves your team clear actions, not another booking system.
        </p>

        <ul className="mt-10 space-y-4 text-[15px] leading-relaxed text-slate-700">
          <li>
            <strong className="font-semibold text-slate-900">
              Built for busy lines
            </strong>
            : walk-ins, callbacks, and “when are ye free?” handled without
            stopping the chair.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">Sounds local</strong>
            : not Americanised robot voice. Callers know they&apos;re through to
            the shop.
          </li>
          <li>
            <strong className="font-semibold text-slate-900">
              Action Inbox
            </strong>
            : anything that still needs a person lands where you can see it.
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
