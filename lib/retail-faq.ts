import {
  CARA_ANSWER_CLOSED,
  CARA_ANSWER_CLOSED_SHOP,
  CARA_ANSWER_DISCLOSURE,
  CARA_ANSWER_DOESNT_KNOW,
  CARA_ANSWER_NUMBER,
  CARA_ANSWER_NUMBER_SHOP,
  CARA_ANSWER_SEVERAL_CALLERS,
  CARA_ANSWER_TRANSFER,
  CARA_ANSWER_WHO_SEES,
} from "@/lib/cara-shared-answers";

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
    question: "Does my team still pick up when they're free?",
    answer:
      "Yes. Your shop phone still rings. If someone gets it, nothing changes. Cara answers the ones they miss.",
  },
  {
    question: "Do I have to change my number or install anything?",
    answer: `No. ${CARA_ANSWER_NUMBER_SHOP}`,
  },
  {
    question: "Can Cara handle multiple calls at once?",
    answer: CARA_ANSWER_SEVERAL_CALLERS,
  },
  {
    question: "Can Cara transfer to a department or colleague?",
    answer: CARA_ANSWER_TRANSFER,
  },
  {
    question: "Can Cara tell callers if something is in stock?",
    answer: `From your price lists and what you've told us. If your stock system is connected, Cara can check live on the call. ${CARA_ANSWER_DOESNT_KNOW}`,
  },
  {
    question: "What if Cara doesn't know the answer?",
    answer: CARA_ANSWER_DOESNT_KNOW,
  },
  {
    question: "Where do calls and messages go?",
    answer: CARA_ANSWER_WHO_SEES,
  },
  {
    question: "How do I turn it off, and am I locked in?",
    answer:
      "Switch Cara off any time. Change forwarding and your line is back in minutes. No long lock-in.",
  },
  {
    question: "What happens when we're closed?",
    answer: CARA_ANSWER_CLOSED_SHOP,
  },
  {
    question: "Does this work for click and collect?",
    answer:
      "Yes. Cara takes what the caller needs and their contact details. Your team gets it to confirm and prepare.",
  },
  {
    question: "Will callers know they're speaking to AI?",
    answer: CARA_ANSWER_DISCLOSURE,
  },
];

/** Homepage FAQ: general on-call questions */
export const RETAIL_FAQS_HOMEPAGE: readonly RetailFaqItem[] = [
  {
    question: "Can Cara handle multiple calls at once?",
    answer: CARA_ANSWER_SEVERAL_CALLERS,
  },
  {
    question: "Do I have to change my number or install anything?",
    answer: `No. ${CARA_ANSWER_NUMBER}`,
  },
  {
    question: "What happens when we're closed?",
    answer: CARA_ANSWER_CLOSED,
  },
  {
    question: "Will callers know they're speaking to AI?",
    answer: CARA_ANSWER_DISCLOSURE,
  },
  {
    question: "What if Cara doesn't know the answer?",
    answer: CARA_ANSWER_DOESNT_KNOW,
  },
  {
    question: "Who sees the calls?",
    answer: CARA_ANSWER_WHO_SEES,
  },
];
