import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Cliste Systems privacy policy and data protection.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700 mb-8 inline-block"
        >
          ← Back to home
        </Link>
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-slate-500 mb-8">
          This page is a placeholder. Add your privacy policy content here.
        </p>
      </div>
    </main>
  );
}
