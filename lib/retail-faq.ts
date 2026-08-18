export type RetailFaqItem = {
  question: string;
  answer: string;
};

/** Shop FAQs for /retail */
export const RETAIL_FAQS: readonly RetailFaqItem[] = [
  {
    question: "How much does it cost?",
    answer:
      "Priced per store. We'll visit your shop and talk through how you run it. No fixed price on the website because every shop is different.",
  },
  {
    question: "How long until we're live, and how much of my time?",
    answer:
      "We visit your shop, learn how it runs, then set Cara up within about a week. Nothing for your team to install.",
  },
  {
    question: "Do I have to change my number or install anything?",
    answer:
      "No. Keep your shop number and the phones you already have. Nothing to install on the till, no extra hardware to buy. We configure Cara and connect your line.",
  },
  {
    question: "Can Cara handle multiple calls at once?",
    answer:
      "Yes. Multiple callers at the same time. No engaged tone, nobody put on hold.",
  },
  {
    question: "Can Cara transfer to a department or colleague?",
    answer:
      "Yes. We set Cara up with how your shop runs. Cara can put the caller through to the right person, or take the enquiry if nobody picks up.",
  },
  {
    question: "Can Cara tell callers if something is in stock?",
    answer:
      "From your price lists and what you've told us. If your stock system is connected, Cara can check live on the call. If Cara isn't sure, Cara opens a ticket and your team confirms before the next caller hears it.",
  },
  {
    question: "What if Cara doesn't know the answer?",
    answer:
      "Cara won't guess. Cara takes the details on the call and your team confirms in the dashboard before the next caller hears it.",
  },
  {
    question: "Where do calls and messages go?",
    answer:
      "Your dashboard. Every call leaves a record there, plus anything Cara took for your team to follow up.",
  },
  {
    question: "How do I turn it off, and am I locked in?",
    answer:
      "Switch Cara off any time. Change forwarding and your line is back in minutes. No long lock-in.",
  },
  {
    question: "What happens when we're closed?",
    answer:
      "Cara still answers. Cara can give your opening hours, take a collection or callback request, or leave a message for the next morning.",
  },
  {
    question: "Does Cara work 24/7?",
    answer:
      "Yes. Evenings, Sundays, bank holidays, and whenever nobody's on the shop floor. Most missed shop calls happen outside your usual hours.",
  },
  {
    question: "Does this work for click and collect?",
    answer:
      "Yes. Cara takes what the caller needs and their contact details. Your team gets it to confirm and prepare.",
  },
  {
    question: "Will callers know they're speaking to AI?",
    answer:
      "Every call opens with a clear AI and recording disclosure. Cara sounds natural, with an Irish accent.",
  },
];

/** Homepage FAQ: general on-call questions */
export const RETAIL_FAQS_HOMEPAGE: readonly RetailFaqItem[] = [
  {
    question: "Can Cara handle multiple calls at once?",
    answer:
      "Yes. Multiple callers at the same time. No engaged tone, nobody put on hold.",
  },
  {
    question: "Do I have to change my number or install anything?",
    answer:
      "No. Same number, same phone, nothing to install, nothing for your team to learn.",
  },
  {
    question: "What happens when we're closed?",
    answer: "If nobody gets it, Cara answers.",
  },
  {
    question: "Will callers know they're speaking to AI?",
    answer:
      "Every call opens with a clear AI and recording disclosure.",
  },
  {
    question: "What if Cara doesn't know the answer?",
    answer:
      "Cara won't guess. Cara takes a message and passes it to you.",
  },
  {
    question: "Who hears the calls?",
    answer: "You. They're recorded. Hosted in the EU.",
  },
];
