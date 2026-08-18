export const RETAIL_META = {
  title: "Cara for Retail",
  description:
    "Cara on your shop phone line when your team is busy. Multiple calls, department transfers, priced per store.",
} as const;

/** Placeholder until live demo line is configured */
export const RETAIL_DEMO_PHONE_DISPLAY = "0XX XXX XXXX" as const;
export const RETAIL_DEMO_PHONE_HREF = "tel:+353000000000" as const;

export const RETAIL_HERO = {
  eyebrow: "Built for retail",
  titleDark: "Every retail call answered.",
  titleGradient: "Even when you're on the floor.",
  intro: "Your shop phone still rings. If nobody gets it, Cara answers.",
  titleMobileLines: ["Every retail", "call answered."] as const,
  introMobileLines: [
    "Your shop phone still rings.",
    "If nobody gets it,",
    "Cara answers.",
  ] as const,
} as const;

export const RETAIL_BACKUP = {
  headingDark: "When nobody can get it.",
  headingGradient: "Cara answers.",
  body: "If someone's on the floor, nothing changes. Multiple calls at once. No engaged tone. Especially when the line's engaged all day.",
  image: {
    src: "/how-cara-works/retail-shop-calls.png",
    alt: "Your shop phone still rings. Cara answers if nobody gets it.",
  },
} as const;

export const RETAIL_SHOP = {
  headingDark: "Whatever they ring about.",
  headingGradient: "Cara routes or takes it.",
  body: "Send them to the right person or counter, or take the details if nobody picks up. Stock, prices, opening hours, orders to hold or collect. From what you've told us, or live when connected. If Cara isn't sure, your team confirms.",
  image: {
    src: "/how-cara-works/retail-on-the-call.png",
    alt: "Cara routes callers to the right person or takes shop enquiries.",
  },
} as const;

export const RETAIL_CUSTOM = {
  headingDark: "Completely custom.",
  headingGradient: "Cara does what you want.",
  body: "Not a script off the shelf. Your shop, your rules. Take orders, route callers, check stock, leave a message for the morning. Tell us what you want on the line and we build Cara around it.",
  image: {
    src: "/how-cara-works/retail-custom.png",
    alt: "Cara configured for your shop only, built around what you want on the line.",
  },
} as const;

export const RETAIL_SETUP = {
  headingDark: "We visit your shop.",
  headingGradient: "Live in about a week.",
  body: "We visit your shop and see how it runs, then work with you to configure Cara around that. Priced per store, one dashboard per shop. Your team still picks up when they're free. Keep your number. Calls and follow-ups in your dashboard. We text management when something needs you.",
  image: {
    src: "/how-cara-works/retail-setup.png",
    alt: "We visit your shop and configure Cara. Live in about a week.",
  },
} as const;

export const RETAIL_HEAR_CARA = {
  headingDark: "Ring Cara now.",
  headingGradient: "Hear what your customers hear.",
  body: "Call below and ask what a customer would. Or press play.",
  ringLabel: "Ring Cara now",
  demoPhoneDisplay: RETAIL_DEMO_PHONE_DISPLAY,
  demoPhoneHref: RETAIL_DEMO_PHONE_HREF,
} as const;

export const RETAIL_FAQ_INTRO = {
  titleDark: "Common ",
  titleGradient: "questions.",
} as const;

export const RETAIL_CTA = {
  title: "Ready to hear Cara on your shop line?",
  body: "Give us a ring. We'll visit your shop and talk through pricing per store.",
  button: "Contact us",
} as const;
