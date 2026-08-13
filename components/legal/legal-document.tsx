"use client";

import type { ReactNode } from "react";
import { LEGAL_LAST_UPDATED } from "@/lib/legal-pages";
import { cn } from "@/lib/utils";

function legalLastUpdatedIso(): string {
  const parsed = new Date(LEGAL_LAST_UPDATED);
  if (Number.isNaN(parsed.getTime())) return "2026-06-12";
  return parsed.toISOString().slice(0, 10);
}

export { LEGAL_LAST_UPDATED };

type LegalPageHeaderProps = {
  title: string;
  description?: string;
  lastUpdated?: string;
};

export function LegalPageHeader({
  title,
  description,
  lastUpdated = LEGAL_LAST_UPDATED,
}: LegalPageHeaderProps) {
  return (
    <header className="space-y-3 border-b border-slate-200 pb-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
        Legal document
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
      <p className="text-sm text-slate-500">
        Last updated{" "}
        <time dateTime={legalLastUpdatedIso()} className="font-medium text-slate-700">
          {lastUpdated}
        </time>
      </p>
    </header>
  );
}

type LegalSectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 space-y-3">
      <h2 className="text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-slate-700 [&_p]:leading-relaxed">
        {children}
      </div>
    </section>
  );
}

type LegalTableProps = {
  headers: string[];
  rows: ReactNode[][];
};

export function LegalTable({ headers, rows }: LegalTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50/90">
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-slate-100 last:border-0 even:bg-slate-50/40"
            >
              {cells.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 align-top text-slate-700 [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-xs"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LegalList({
  children,
  ordered,
}: {
  children: ReactNode;
  ordered?: boolean;
}) {
  if (ordered) {
    return (
      <ol className="list-decimal space-y-2 pl-5 marker:text-slate-500">
        {children}
      </ol>
    );
  }
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-slate-400">{children}</ul>
  );
}

export function LegalCallout({
  children,
  variant = "neutral",
}: {
  children: ReactNode;
  variant?: "neutral" | "info";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border px-4 py-3.5 text-sm leading-relaxed",
        variant === "info"
          ? "border-slate-200 bg-slate-50 text-slate-800"
          : "border-slate-200 bg-slate-50/80 text-slate-700",
      )}
    >
      {children}
    </div>
  );
}

export function LegalDocumentBody({ children }: { children: ReactNode }) {
  return <div className="space-y-10 text-sm leading-relaxed">{children}</div>;
}
