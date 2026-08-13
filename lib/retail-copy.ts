export const RETAIL_META = {
  title: "Cara for Retail",
  description:
    "Irish voice on your shop phone line. Cara answers when you're busy, takes orders and messages, and leaves your team a clear follow-up.",
} as const;

export const RETAIL_HERO = {
  eyebrow: "Built for retail",
  titleDark: "Every retail call answered.",
  titleGradient: "Even when you're on the floor.",
  intro:
    "Irish voice on your shop line. Cara answers when you're busy, takes orders and messages, and leaves your team a clear follow-up.",
  titleMobileLines: ["Every retail", "call answered."] as const,
  introMobileLines: [
    "Irish voice on your shop line.",
    "Cara answers when you're busy,",
    "takes orders and messages, and",
    "leaves your team a clear follow-up.",
  ] as const,
  rotatingWords: [
    "on the floor",
    "with a customer",
    "short-staffed",
    "after hours",
    "at the till",
  ],
} as const;

export const RETAIL_CALLER_PHRASES = [
  "Have ye got that in stock?",
  "Can I place an order for collection?",
  "What time do ye close?",
  "Can I click and collect?",
  "Where are ye based?",
] as const;

export type RetailUseCaseIcon =
  | "phone-order"
  | "click-collect"
  | "clock"
  | "package"
  | "users"
  | "moon";

export type RetailUseCaseSpan = "featured" | "default";

export const RETAIL_USE_CASES: ReadonlyArray<{
  title: string;
  body: string;
  icon: RetailUseCaseIcon;
  span: RetailUseCaseSpan;
}> = [
  {
    title: "Phone-in orders",
    body: "Captures the order list for your team to confirm.",
    icon: "phone-order",
    span: "featured",
  },
  {
    title: "Click and collect",
    body: "Takes collection details for your team to confirm.",
    icon: "click-collect",
    span: "featured",
  },
  {
    title: "Hours & directions",
    body: "Hours, directions, and parking answered.",
    icon: "clock",
    span: "default",
  },
  {
    title: "Product enquiries",
    body: "Answers from your price lists, not guesswork.",
    icon: "package",
    span: "default",
  },
  {
    title: "Busy floor cover",
    body: "Overflow calls while your team is with customers.",
    icon: "users",
    span: "default",
  },
  {
    title: "After hours",
    body: "Evening and weekend calls answered and logged.",
    icon: "moon",
    span: "default",
  },
];

export const RETAIL_HOW_IT_WORKS = {
  titleDark: "How it works.",
  titleGradient: "Three steps.",
  intro:
    "Forward the number customers already ring. Cara picks up when you're on the till or out on the floor.",
  steps: [
    {
      step: "01",
      title: "Forward the shop line",
      body: "Your main number, busy hours only, or a new Irish line.",
    },
    {
      step: "02",
      title: "Cara answers the call",
      body: "Irish voice, clear disclosure, set up with your hours and offers.",
    },
    {
      step: "03",
      title: "Your team gets the action",
      body: "Stock answered, orders queued, anything else in Action Inbox.",
    },
  ],
} as const;

export const RETAIL_INBOX = {
  titleDark: "Action Inbox.",
  titleGradient: "Handled on the call.",
  intro:
    "Stock checks against your till or lists. Collection orders taken on the call and queued to pick.",
  flows: [
    {
      caller: "Have ye got that in stock?",
      caraStep: "Checks your till or stock sheet",
      outcome: "Answers the caller on the spot if it's in stock.",
      tag: "Stock check",
    },
    {
      caller: "Can I place an order for collection?",
      caraStep: "Takes the full order on the call",
      outcome: "Adds it to your collection queue, ready to pick.",
      tag: "Collection order",
    },
    {
      caller: "Can I click and collect?",
      caraStep: "Captures items and collection time",
      outcome: "Texts the caller to confirm, order queued for staff.",
      tag: "Confirmed",
    },
  ],
  points: [
    {
      title: "Live stock checks",
      body: "Runs against your till feed or uploaded stock sheet before answering.",
    },
    {
      title: "Ready to pick",
      body: "Phone orders land in your collection queue, not on a scrap of paper.",
    },
    {
      title: "Full fallback",
      body: "When Cara can't finish, the full call lands in Action Inbox.",
    },
  ],
} as const;

export const RETAIL_SETUP = {
  titleDark: "Custom build.",
  titleGradient: "We do the setup.",
  intro:
    "Tell us how your shop runs. We connect Cara to your line, till, and collection queue. No uploads, no DIY.",
  steps: [
    {
      step: "01",
      title: "We learn your shop",
      body: "One call on hours, departments, stock, and how orders get picked.",
    },
    {
      step: "02",
      title: "We wire it up",
      body: "Till feed, price lists, click-and-collect queue, and who gets notified.",
    },
    {
      step: "03",
      title: "We test and go live",
      body: "Test calls on your line, then forward when you are happy.",
    },
  ],
} as const;

export const RETAIL_FAQ_INTRO = {
  titleDark: "Common ",
  titleGradient: "questions.",
  desc: "Straight answers about how Cara works on a shop phone line.",
} as const;

export const RETAIL_CTA = {
  title: "Ready to hear Cara on your shop line?",
  body: "Give us a ring and we'll talk through your shop.",
  button: "Contact us",
} as const;
