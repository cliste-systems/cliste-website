import {
  CARA_ANSWER_CLOSED,
  CARA_ANSWER_DISCLOSURE,
  CARA_ANSWER_DOESNT_KNOW,
  CARA_ANSWER_NUMBER,
  CARA_ANSWER_SEVERAL_CALLERS,
  CARA_ANSWER_TRANSFER,
  CARA_ANSWER_WHO_SEES,
} from "@/lib/cara-shared-answers";

export const HOW_CARA_WORKS_META = {
  title: "How Cara works",
  description:
    "Customers call your number. If nobody gets it, Cara answers. Cara only knows what you tell us.",
} as const;

export const HOW_CARA_WORKS_HERO = {
  eyebrow: "How Cara works",
  titleDark: "Not a phone system.",
  titleGradient: "Cara answers it.",
  intro: "Customers call your number. Cara steps in when nobody can get to it.",
  primaryCta: "Contact us",
  secondaryCta: "See how it works",
} as const;

export const WHEN_SOMEONE_RINGS = {
  headingDark: "Someone picks up first.",
  headingGradient: "Cara answers if they can't.",
  body:
    "Customers call your number as they always do. If someone gets it, nothing changes. If nobody can, or you're closed, Cara answers. Or Cara can answer every call, 24/7.",
  image: {
    src: "/how-cara-works/when-someone-rings.png",
    alt: "Customers call your number. Someone picks up if they can. Cara answers if they can't, or 24/7.",
  },
} as const;

export const IF_SHE_DOESNT_KNOW = {
  headingDark: "Cara never makes it up.",
  headingGradient: "Cara asks you.",
  body:
    `You teach Cara how your business runs: your hours, what you do, prices, and how you want calls handled. Cara only answers from that. If someone asks something Cara doesn't know, ${CARA_ANSWER_DOESNT_KNOW}`,
  image: {
    src: "/how-cara-works/if-she-doesnt-know.png",
    alt: "You teach Cara how your business runs. If Cara doesn't know, Cara asks you. Cara never guesses.",
  },
} as const;

export const ON_YOUR_LINE = {
  headingDark: "Keep your number.",
  headingGradient: "Nothing to install.",
  body:
    "Keep the number customers already use. They call as normal. Same phone. No new hardware. Nothing to install. When nobody picks up, or you're busy, the call forwards to Cara. We set that up with you. Cara takes the calls you miss, or every call if you want that.",
  image: {
    src: "/how-cara-works/on-your-line.png",
    alt: "Keep your number. Customers call as normal. Missed and busy calls forward to Cara. Nothing to install.",
  },
} as const;

export const HOW_CARA_WORKS_FAQ_INTRO = {
  heading: "Questions.",
} as const;

export const HOW_CARA_WORKS_FAQS = [
  {
    question: "How does Cara know about my business?",
    answer: `You tell Cara. Hours, what you do, what you don't. That's all Cara has. Cara doesn't look it up. ${CARA_ANSWER_DOESNT_KNOW}`,
  },
  {
    question: "Will people know it isn't a person?",
    answer: CARA_ANSWER_DISCLOSURE,
  },
  {
    question: "Can I keep my number?",
    answer: `Yes. ${CARA_ANSWER_NUMBER}`,
  },
  {
    question: "What if I only want Cara when we're busy?",
    answer: "Your phone rings first. Cara takes the ones you miss.",
  },
  {
    question: "Do I need a computer, or new phones?",
    answer: "No. Same phone. Nothing to install.",
  },
  {
    question: "What happens when we're closed?",
    answer: CARA_ANSWER_CLOSED,
  },
  {
    question: "Can Cara put the caller through?",
    answer: CARA_ANSWER_TRANSFER,
  },
  {
    question: "Can Cara take more than one call at once?",
    answer: CARA_ANSWER_SEVERAL_CALLERS,
  },
  {
    question: "Who sees the calls?",
    answer: CARA_ANSWER_WHO_SEES,
  },
] as const;

export const HOW_CARA_WORKS_CTA = {
  title: "Get Cara on the phone.",
  body: "You tell Cara how the place runs. You point your number. That's it.",
  button: "Contact us",
} as const;
