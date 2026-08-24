import {
  CARA_ANSWER_DISCLOSURE,
  CARA_ANSWER_DOESNT_KNOW,
  CARA_ANSWER_WHO_SEES_RETENTION,
} from "@/lib/cara-shared-answers";

export const HOW_CARA_IS_BUILT_META = {
  title: "How Cara is built",
  description:
    "Your own Cara, built for your business only. No shared brain, nothing goes live unless you approve it, and your calls stay in the EU.",
} as const;

export const HOW_CARA_IS_BUILT_HERO = {
  eyebrow: "How Cara is built",
  titleDark: "Not off the shelf.",
  titleGradient: "Built for you.",
  intro:
    "Your Cara, from how your business runs. You teach Cara. No borrowed answers.",
  primaryCta: "Contact us",
  secondaryCta: "See how we build Cara",
} as const;

export const BUILT_CUSTOM = {
  headingDark: "Yours alone.",
  headingGradient: "No shared brain.",
  body: "Cara knows your business and nothing else. Not the internet, not another business down the road. Nobody else's Cara can see your prices, your customers, or your calls.",
  image: {
    src: "/how-cara-is-built/yours-alone.png",
    alt: "Your Cara knows only your business. No shared brain with anyone else.",
  },
} as const;

export const BUILT_FROM = {
  headingDark: "Built from what you tell us.",
  headingGradient: "Hours, prices, and rules.",
  body: "Your hours, your location, what you offer, your price lists, your policies. Set Cara up in the dashboard yourself, or we'll do it with you.",
  image: {
    src: "/how-cara-is-built/learn.png",
    alt: "We build Cara from your hours, rules, menu, and files.",
  },
} as const;

export const BUILT_LINE = {
  headingDark: "Nothing changes.",
  headingGradient: "Unless you say so.",
  body: "You decide what Cara says. A new answer doesn't go live until you approve it, and you can take it back any time. Change your hours in the morning and Cara has it on the next call.",
  image: {
    src: "/how-cara-is-built/approval.png",
    alt: "You approve every answer before it goes live.",
  },
} as const;

export const BUILT_TICKETS = {
  headingDark: "Cara doesn't guess.",
  headingGradient: "Cara asks you.",
  body: `Cara only answers from your setup. If a caller asks something Cara isn't sure of, ${CARA_ANSWER_DOESNT_KNOW}`,
  image: {
    src: "/how-cara-is-built/tickets.png",
    alt: "If Cara doesn't know, Cara opens a ticket. Your team teaches Cara the answer.",
  },
} as const;

export const BUILT_DASHBOARD = {
  headingDark: "Every call, in one place.",
  headingGradient: "Kept in the EU.",
  body: "Calls, orders, and messages land in your dashboard. Every call leaves a transcript and summary you can review. Your data stays in the EU, it's never sold, and we only text you when something genuinely needs you.",
  image: {
    src: "/how-cara-is-built/dashboard.png",
    alt: "Calls, tickets, and messages in your Cara dashboard.",
  },
} as const;

export const BUILT_DASHBOARD_CONTINUE = {
  label: "Your dashboard",
  href: "/your-dashboard",
} as const;

export const HOW_CARA_IS_BUILT_FAQ_INTRO = {
  heading: "Questions.",
} as const;

export const HOW_CARA_IS_BUILT_FAQS = [
  {
    question: "Can another business's Cara see ours?",
    answer:
      "No. Your Cara is built against your business only. There's no shared pot of answers, and nobody else's Cara can reach your prices, your callers, or your transcripts.",
  },
  {
    question: "Where do our calls end up?",
    answer: CARA_ANSWER_WHO_SEES_RETENTION,
  },
  {
    question: "Who decides what Cara says?",
    answer:
      "You. A new answer doesn't go live until you approve it, and you can take it back any time. Change your hours in the morning and Cara has it on the next call.",
  },
  {
    question: "What if Cara doesn't know the answer?",
    answer: CARA_ANSWER_DOESNT_KNOW,
  },
  {
    question: "Do I set Cara up myself, or do you?",
    answer:
      "Either. Set Cara up in the dashboard yourself, or we'll do it with you.",
  },
  {
    question: "Will people know it's not a real person?",
    answer: CARA_ANSWER_DISCLOSURE,
  },
  {
    question: "What if Cara goes down?",
    answer:
      "Ring us. We'll tell you exactly what's happening on your line and get it sorted.",
  },
  {
    question: "Who actually builds and runs this?",
    answer:
      "A small team in Donegal. Ring us and you'll speak to one of us, not a call centre.",
  },
] as const;

export const HOW_CARA_IS_BUILT_CTA = {
  title: "Ready to build Cara for your business?",
  body: "Set Cara up yourself, or give us a ring and we'll configure with you.",
  button: "Contact us",
} as const;
