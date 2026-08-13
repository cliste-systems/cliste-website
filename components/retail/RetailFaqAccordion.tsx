"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { RetailFaqItem } from "@/lib/retail-faq";
import { RETAIL_SECTION_SHELL } from "@/lib/site-layout";
import { cn } from "@/lib/utils";

const FAQ_EASE = [0.22, 1, 0.36, 1] as const;

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  reduceMotion,
}: RetailFaqItem & {
  isOpen: boolean;
  onToggle: () => void;
  reduceMotion: boolean;
}) {
  const panelId = question.replace(/\s+/g, "-").toLowerCase();

  return (
    <div
      className={cn(
        "border-b border-slate-200/80 transition-colors duration-300",
        isOpen && "bg-slate-50/60",
      )}
    >
      <button
        type="button"
        id={`${panelId}-trigger`}
        aria-expanded={isOpen}
        aria-controls={`${panelId}-panel`}
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-4 text-left font-medium text-slate-900 transition-colors hover:bg-slate-50/80 sm:px-5 sm:py-4"
      >
        <span className="pr-2 text-[13px] leading-snug sm:text-sm">
          {question}
        </span>
        <motion.span
          aria-hidden
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.32, ease: FAQ_EASE }
          }
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-[#F8F9FB] text-slate-500 transition-colors duration-300",
            isOpen
              ? "border-slate-300 bg-white text-slate-700"
              : "border-slate-200/90",
          )}
        >
          <ChevronDown className="size-4" strokeWidth={1.75} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${panelId}-panel`}
            role="region"
            aria-labelledby={`${panelId}-trigger`}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.38, ease: FAQ_EASE }
            }
            className="overflow-hidden"
          >
            <div className="px-4 pt-3 pb-4 text-xs leading-snug text-slate-600 sm:px-5 sm:pt-4 sm:pb-5 sm:text-[13px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function RetailFaqAccordion({
  faqs,
  className = "",
}: {
  faqs: readonly RetailFaqItem[];
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set());

  function toggleItem(index: number) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className={`${RETAIL_SECTION_SHELL} ${className}`.trim()}>
      {faqs.map((faq, index) => (
        <FaqItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
          reduceMotion={reduceMotion ?? false}
        />
      ))}
    </div>
  );
}
