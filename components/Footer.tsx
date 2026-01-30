import Link from "next/link";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-50 pt-24 pb-12 border-t border-slate-200 scroll-mt-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 mb-8 text-xs font-medium text-white bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 border border-white/10 rounded-full shadow-lg shadow-slate-200/50">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-wide uppercase text-[10px] font-bold">
            Get in Touch
          </span>
        </div>
        <h2 className="md:text-5xl text-4xl font-semibold tracking-tight leading-[1.2] pb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 mb-6">
          Ready to Modernise Your Business?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-slate-500 mb-10 max-w-2xl mx-auto">
          Book a technical consultation to see how Cliste can automate your
          workflow.
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 rounded-xl hover:opacity-90 shadow-xl shadow-slate-200/50 border border-transparent mb-16"
        >
          Book Consultation
        </Link>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Cliste Systems. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a
              href="https://clistesystems.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-600 transition-colors"
            >
              clistesystems.ie
            </a>
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-600 transition-colors">
              Terms
            </Link>
            <Link href="#contact" className="hover:text-slate-600 transition-colors">
              Engineering
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
