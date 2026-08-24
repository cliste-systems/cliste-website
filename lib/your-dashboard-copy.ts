import {
  CARA_ANSWER_DASHBOARD_ACCESS,
  CARA_ANSWER_DASHBOARD_TEAM,
  CARA_ANSWER_DOESNT_KNOW,
  CARA_ANSWER_WHO_SEES,
} from "@/lib/cara-shared-answers";

export const YOUR_DASHBOARD_META = {
  title: "Your dashboard",
  description:
    "Every call Cara takes, written down and waiting on your screen. A website you log into. Nothing to install.",
} as const;

export const YOUR_DASHBOARD_HERO = {
  eyebrow: "Your dashboard",
  titleDark: "Cara takes the call.",
  titleGradient: "You read it after.",
  intro:
    "Every call, written down. You open it on the computer when you have a minute.",
  primaryCta: "Contact us",
  secondaryCta: "Walk me through it",
} as const;

export const YOUR_DASHBOARD_STEP_1 = {
  eyebrow: "Step 1 of 6",
  headingDark: "It's a website.",
  headingGradient: "You open it on the computer.",
  body: "Same as opening the news or your email. You log in with your email address. Nothing to download, nothing to update, no new gadget in the shop. It's built for a full screen, so it's the computer rather than the phone.",
  image: {
    src: "/your-dashboard/its-a-website.png",
    alt: "The Cara dashboard open in a browser on a desktop computer.",
  },
} as const;

export const YOUR_DASHBOARD_STEP_2 = {
  eyebrow: "Step 2 of 6",
  headingDark: "The call ends.",
  headingGradient: "It's already on the screen.",
  body: "Who rang, the number, the time, and a few lines on what they were after. It's there before the caller has the phone down. You don't press anything to put it there.",
  image: {
    src: "/your-dashboard/call-lands.png",
    alt: "A finished call appearing at the top of the call list.",
  },
} as const;

export const YOUR_DASHBOARD_STEP_3 = {
  eyebrow: "Step 3 of 6",
  headingDark: "Cara writes it down.",
  headingGradient: "You don't listen back.",
  body: "A short summary in plain English, the sort of thing you'd write on the back of a receipt. The word-for-word transcript sits underneath if you want it. The recording isn't kept.",
  image: {
    src: "/your-dashboard/read-the-call.png",
    alt: "One call opened, showing a plain-English summary with the transcript below.",
  },
} as const;

export const YOUR_DASHBOARD_STEP_4 = {
  eyebrow: "Step 4 of 6",
  headingDark: "Some calls need you.",
  headingGradient: "They go in one list.",
  body: "A callback, a quote, a question Cara couldn't answer. They go into your Action Inbox — the only list you have to look at. We text you when one lands. The rest can wait.",
  image: {
    src: "/your-dashboard/action-inbox.png",
    alt: "The Action Inbox holding a callback request and a quote request.",
  },
} as const;

export const YOUR_DASHBOARD_STEP_5 = {
  eyebrow: "Step 5 of 6",
  headingDark: "Cara didn't know.",
  headingGradient: "You tell her once.",
  body: "Cara does not guess. She says she'll find out, takes the details, and opens a ticket. You type the answer in once. From the next call on, everyone who asks gets it right.",
  image: {
    src: "/your-dashboard/teach-cara.png",
    alt: "A caller asks an unknown question. Cara opens a ticket. The owner types the answer in.",
  },
} as const;

export const YOUR_DASHBOARD_TEACH_STEPS = [
  "Somebody asks something Cara wasn't told.",
  "Cara takes their details and opens a ticket.",
  "You type the answer in and approve it.",
  "The next caller who asks hears it.",
] as const;

export const YOUR_DASHBOARD_TEACH_CLOSING =
  "Nothing goes live until you approve it, and you can take it back any time." as const;

export const YOUR_DASHBOARD_STEP_6 = {
  eyebrow: "Step 6 of 6",
  headingDark: "Changed your hours?",
  headingGradient: "Change them here.",
  body: "Same screen. Your hours, prices, answers, and the rules on what Cara should and shouldn't say. Change them over breakfast and Cara has them on the next call. Do it yourself, or ring us and we'll do it with you.",
  image: {
    src: "/your-dashboard/change-cara.png",
    alt: "Changing hours, prices, and rules in Cara Setup.",
  },
} as const;

export const YOUR_DASHBOARD_SCREEN_TOUR = {
  headingDark: "One screen.",
  headingGradient: "Nothing hidden.",
  intro: "A short list down the left-hand side. That's the whole thing.",
  image: {
    src: "/how-cara-is-built/dashboard.png",
    alt: "The Cara dashboard showing the sidebar and Home screen.",
  },
  items: [
    {
      label: "Home",
      description: "How many calls came in, and what's waiting on you.",
    },
    {
      label: "Calls",
      description: "Every call, newest first, with summary and transcript.",
    },
    {
      label: "Action Inbox",
      description: "The few things that need a person.",
    },
    {
      label: "Contacts",
      description: "Who's been ringing, and what about before.",
    },
    {
      label: "Call flow",
      description: "What happens when the phone rings.",
    },
    {
      label: "Cara Setup",
      description: "Your hours, prices, answers, rules.",
    },
    {
      label: "Usage",
      description: "How many calls you've had this month.",
    },
    {
      label: "Support",
      description: "Get us on the phone.",
    },
    {
      label: "Settings",
      description: "Your team, your number, who gets the texts.",
    },
  ],
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
    question: "Can I look at it on my phone?",
    answer:
      "No. The dashboard is built for a full screen, so it's a computer job. Anything urgent comes to you as a text, so you're not caught out when you're away from the desk.",
  },
  {
    question: "How do I get in?",
    answer:
      "You go to the web address we give you and put in your email. We set that up with you on the first call and stay on the line until you're in.",
  },
  {
    question: "Do I have to watch it all day?",
    answer:
      "No. Nothing is lost whether you look today or next week. Only the things waiting on you get a text.",
  },
  {
    question: "Can I hear the actual call?",
    answer:
      "No. The recording isn't kept. You get a short summary and the full transcript in writing instead.",
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
  title: "Want to see the real thing?",
  body: "We'll open it on a call and show you around. Ten minutes and you'll know where everything is.",
  button: "Contact us",
} as const;
