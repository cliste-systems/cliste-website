import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

export function Nav() {
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center" aria-label="Cliste Systems home">
            <Image
              src="/logo.png"
              alt="Cliste Systems"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-500">
          <a
            href="#solutions"
            className="hover:text-slate-900 transition-colors flex items-center gap-1"
          >
            Solutions <Icon icon="solar:alt-arrow-down-linear" width={12} />
          </a>
          <a
            href="#integrations"
            className="hover:text-slate-900 transition-colors"
          >
            Integrations
          </a>
          <a
            href="#technology"
            className="hover:text-slate-900 transition-colors"
          >
            Technology
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors">
            About
          </a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://app.clistesystems.ie/"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-xl hover:bg-slate-50"
          >
            Sign In
          </a>
          <a
            href="https://app.clistesystems.ie/signup"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-xl hover:bg-slate-50"
          >
            Sign Up
          </a>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white transition-all bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 rounded-xl hover:opacity-90 shadow-lg shadow-slate-200/50 border border-white/10 focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
          >
            Book a Free Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
