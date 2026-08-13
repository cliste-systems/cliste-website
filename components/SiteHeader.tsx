"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { NICHE_NAV_LINKS } from "@/lib/industries";
import { scrollToSectionAfterMenuClose } from "@/lib/scroll-to-section";
import { LoginLink } from "./LoginLink";
import { ClisteLogo } from "./ClisteLogo";

type SiteHeaderProps = {
  /** Hero entrance fades (homepage only). */
  animated?: boolean;
  /** Smooth-scroll to #cara on Hear it work (homepage mobile menu). */
  homeScroll?: boolean;
  /** Hero gradient vs plain white page background. */
  surface?: "hero" | "light";
  className?: string;
};

function fadeClass(animated: boolean, delay: string) {
  return animated ? `hero-fade ${delay}` : "";
}

function ServicesNav({
  surface,
  className = "",
  onNavigate,
}: {
  surface: "hero" | "light";
  className?: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const showMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const hideMenuSoon = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const triggerClassName =
    surface === "hero"
      ? "group/trigger flex cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-neutral-800 transition-all hover:bg-white/55 hover:text-neutral-950 data-[open=true]:bg-white/70"
      : "group/trigger flex cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-neutral-700 transition-all hover:bg-slate-100/80 hover:text-neutral-950 data-[open=true]:bg-slate-100";

  const menuItemClassName =
    surface === "hero"
      ? "group/item flex items-center justify-between gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-900 shadow-[0_8px_28px_-14px_rgba(15,23,42,0.22)] backdrop-blur-md transition-all hover:border-white/80 hover:bg-white/90 hover:shadow-[0_12px_32px_-14px_rgba(15,23,42,0.26)]"
      : "group/item flex items-center justify-between gap-3 rounded-full border border-slate-200/90 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition-all hover:border-slate-300/90 hover:bg-slate-50 hover:shadow-md";

  return (
    <div
      ref={rootRef}
      className={`relative ${className}`.trim()}
      onMouseEnter={showMenu}
      onMouseLeave={hideMenuSoon}
      onFocus={showMenu}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          hideMenuSoon();
        }
      }}
    >
      <button
        type="button"
        className={triggerClassName}
        data-open={open}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        Services
        <ChevronDown
          className={`h-3.5 w-3.5 text-neutral-500 transition-transform duration-200 group-hover/trigger:text-neutral-700 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.75}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-[calc(100%+0.35rem)] z-50 min-w-[11.5rem]"
            role="menu"
            aria-label="Services"
          >
            {NICHE_NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className={menuItemClassName}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                {item.navLabel}
                <ChevronRight
                  className="size-3.5 shrink-0 text-slate-400 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-slate-600"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function SiteHeader({
  animated = false,
  homeScroll = false,
  surface = animated ? "hero" : "light",
  className = "",
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const hearItWorkClassName =
    "flex w-full cursor-pointer items-center justify-center rounded-full bg-slate-500/10 px-7 py-4 text-base font-normal text-slate-900 transition-colors hover:bg-slate-500/15";

  const loginClassName =
    surface === "hero"
      ? "cursor-pointer rounded-full border border-white/50 bg-white/50 px-5 py-2 text-sm font-medium text-neutral-950 shadow-sm backdrop-blur-sm transition-all hover:bg-white/80"
      : "cursor-pointer rounded-full border border-slate-200/90 bg-white px-5 py-2 text-sm font-medium text-neutral-950 shadow-sm transition-all hover:bg-slate-50";

  return (
    <>
      <header
        className={`flex w-full shrink-0 items-center justify-between ${className}`.trim()}
      >
        <div className="z-10 flex min-w-0 items-center gap-4 sm:gap-6 lg:gap-8">
          <Link
            href="/"
            className={`${fadeClass(animated, "hero-fade-d1")} flex shrink-0 cursor-pointer items-center`}
            aria-label="Hello Cara home"
          >
            <ClisteLogo />
          </Link>

          <button
            type="button"
            className={`${fadeClass(animated, "hero-fade-d2")} hidden min-w-0 cursor-pointer items-center gap-2 rounded-full bg-black/5 px-3.5 py-1.5 transition-colors hover:bg-black/10 lg:flex`}
          >
            <span className="truncate text-sm font-medium text-neutral-800">
              A Donegal-engineered startup
            </span>
            <ChevronRight
              className="h-4 w-4 shrink-0 text-neutral-600"
              strokeWidth={1.5}
              aria-hidden
            />
          </button>
        </div>

        <nav
          className={`${fadeClass(animated, "hero-fade-d2")} z-10 hidden items-center gap-3 lg:flex`}
        >
          <ServicesNav surface={surface} />
          <LoginLink className={loginClassName}>Log in</LoginLink>
        </nav>

        <button
          type="button"
          className={`${fadeClass(animated, "hero-fade-d2")} -mr-2 z-10 cursor-pointer p-2 text-neutral-950 lg:hidden`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-6 w-6" strokeWidth={1.5} aria-hidden />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.04,
              }}
              className="flex w-full items-center justify-between px-10 py-12 sm:px-16"
            >
              <Link
                href="/"
                className="flex cursor-pointer items-center"
                aria-label="Hello Cara home"
                onClick={() => setMenuOpen(false)}
              >
                <ClisteLogo />
              </Link>
              <button
                type="button"
                className="-mr-2 cursor-pointer p-2 text-neutral-950"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </button>
            </motion.div>

            <div className="flex w-full flex-col gap-8 px-10 pb-12 sm:px-16">
              <nav className="flex flex-col gap-6 text-2xl font-medium tracking-tight text-neutral-900">
                <motion.div
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.08,
                  }}
                  className="flex flex-col gap-4"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
                    Services
                  </p>
                  {NICHE_NAV_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="cursor-pointer transition-colors hover:text-neutral-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1,
                  }}
                >
                  <LoginLink
                    className="cursor-pointer transition-colors hover:text-neutral-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    Log in
                  </LoginLink>
                </motion.div>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.38 }}
                className="my-2 h-px w-full bg-neutral-100"
              />

              <motion.div
                initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.42,
                }}
                className="flex flex-col gap-4"
              >
                <Link
                  href="/book"
                  className="flex w-full cursor-pointer items-center justify-center rounded-full bg-slate-600 px-7 py-4 text-base font-normal text-white transition-colors hover:bg-slate-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact us
                </Link>
                {homeScroll ? (
                  <button
                    type="button"
                    onClick={() =>
                      scrollToSectionAfterMenuClose("cara", () =>
                        setMenuOpen(false),
                      )
                    }
                    className={hearItWorkClassName}
                  >
                    Hear it work
                  </button>
                ) : (
                  <Link
                    href="/#cara"
                    className={hearItWorkClassName}
                    onClick={() => setMenuOpen(false)}
                  >
                    Hear it work
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
