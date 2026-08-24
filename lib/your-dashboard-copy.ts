import {
  CARA_ANSWER_DASHBOARD_ACCESS,
  CARA_ANSWER_DASHBOARD_TEAM,
  CARA_ANSWER_DOESNT_KNOW,
  CARA_ANSWER_WHO_SEES,
} from "@/lib/cara-shared-answers";

export const YOUR_DASHBOARD_META = {
  title: "Dashboard",
  description:
    "Every call Cara takes, written up and waiting in your dashboard.",
} as const;

export const YOUR_DASHBOARD_HERO = {
  eyebrow: "Dashboard",
  titleDark: "Cara takes the call.",
  titleGradient: "You read it after.",
  intro: "When the call's over, it's all here.",
  primaryCta: "Contact us",
  secondaryCta: "Walk me through it",
} as const;

export const YOUR_DASHBOARD_STEP_1 = {
  headingDark: "Nothing to download.",
  headingGradient: "Open it in the browser.",
  body: "A web app on the computer. Log in with your account. Nothing to install on the till or the phone.",
  image: {
    src: "/your-dashboard/not-an-app.png",
    alt: "The Cara dashboard open in a browser on a desktop computer.",
  },
} as const;

export const YOUR_DASHBOARD_STEP_2 = {
  headingDark: "Call ends.",
  headingGradient: "It's on your screen.",
  body: "Name, number, time, what they wanted. On screen before the caller puts the phone down. Cara puts it there.",
  image: {
    src: "/your-dashboard/call-lands.png",
    alt: "A finished call appearing at the top of the call list.",
  },
} as const;

export const YOUR_DASHBOARD_STEP_3 = {
  headingDark: "Nothing to listen back to.",
  headingGradient: "It's all in writing.",
  body: "A few lines in plain English. The full transcript underneath if you want it. Audio is discarded when the call ends. The writing is what stays.",
  image: {
    src: "/your-dashboard/read-the-call.png",
    alt: "Barry Nolan's call showing a plain-English summary and transcript excerpt in the dashboard.",
  },
} as const;

export const YOUR_DASHBOARD_STEP_4 = {
  headingDark: "Most calls need nothing.",
  headingGradient: "The odd one needs you.",
  body: "A callback. A quote. An order to hold. A question Cara couldn't answer. Those go to Action Inbox. We text you. Everything else waits.",
  image: {
    src: "/your-dashboard/action-inbox.png",
    alt: "The Action Inbox holding a callback request and a quote request.",
  },
} as const;

export const YOUR_DASHBOARD_STEP_5 = {
  headingDark: "Answer it once.",
  headingGradient: "Every caller after gets it.",
  body: "Cara does not guess. Caller asks something Cara wasn't told. Cara opens a ticket. You type the answer and approve it. The next caller hears it.",
  image: {
    src: "/your-dashboard/teach-cara.png",
    alt: "A caller asks an unknown question. Cara opens a ticket. The owner types the answer in.",
  },
} as const;

export const YOUR_DASHBOARD_STEP_6 = {
  headingDark: "Hours, services, rules.",
  headingGradient: "Change them here.",
  body: "What you offer, your prices, and how Cara should answer. All in Cara Setup. Change your hours in the morning and Cara has it on the next call. Set it up yourself, or ring us and we'll do it with you.",
  image: {
    src: "/your-dashboard/change-cara.png",
    alt: "Changing hours, services, prices, and rules in Cara Setup.",
  },
} as const;

export const YOUR_DASHBOARD_FAQ_INTRO = {
  heading: "Questions.",
} as const;

export const YOUR_DASHBOARD_FAQS = [
  {
    question: "Do I need a computer?",
    answer: CARA_ANSWER_DASHBOARD_ACCESS,
  },
  {
    question: "Do I have to watch it all day?",
    answer:
      "No. Callbacks, quotes, and orders land in Action Inbox and we text you. Nothing is lost whether you look today or next week.",
  },
  {
    question: "Can I hear the actual call?",
    answer:
      "No. Audio is discarded when the call ends. You get the summary and the full transcript in writing instead.",
  },
  {
    question: "Who sees the calls?",
    answer: CARA_ANSWER_WHO_SEES,
  },
  {
    question: "Can my staff see it too?",
    answer: CARA_ANSWER_DASHBOARD_TEAM,
  },
  {
    question: "What if Cara doesn't know the answer?",
    answer: CARA_ANSWER_DOESNT_KNOW,
  },
] as const;

export const YOUR_DASHBOARD_CTA = {
  title: "Want to see it?",
  body: "Book a call and we'll show you around. Ten minutes and you'll know where everything is.",
  button: "Book a call",
} as const;
