export type RetailFaqItem = {
  question: string;
  answer: string;
};

export const RETAIL_FAQS: readonly RetailFaqItem[] = [
  {
    question: "Can I keep my existing phone number?",
    answer:
      "Yes. Forward your current number to Cara for every call, or only when you're busy or don't pick up. You can also use a new Irish Cliste number as your main line.",
  },
  {
    question: "Is any extra hardware needed?",
    answer:
      "No. Cara works with the phone line you already have. No desk phones, headsets, or new equipment.",
  },
  {
    question: "Can Cara tell callers if something is in stock?",
    answer:
      "She answers from your price lists and what you've told us. If she's not sure, she logs a stock check for your team to confirm. She won't guess.",
  },
  {
    question: "Does this work for click and collect?",
    answer:
      "Yes. Cara takes what the caller needs and their contact details. Your team gets it to confirm and prepare.",
  },
  {
    question: "Can customers place a shopping order over the phone?",
    answer:
      "Yes. Cara takes phone-in orders: what they want, any notes, and their contact details. Your team gets the full request to confirm and prepare.",
  },
  {
    question: "What happens when we're closed?",
    answer:
      "Cara still answers. She can give your opening hours, take a collection or callback request, or leave a message for the next morning.",
  },
  {
    question: "Will callers know they're speaking to AI?",
    answer:
      "Every call opens with a clear AI and recording disclosure. Cara uses a natural Irish voice, not a generic robot accent.",
  },
  {
    question: "What if Cara doesn't know the answer?",
    answer:
      "She won't guess. Cara takes a message with the caller's name, number, and what they need, straight to your team to follow up.",
  },
  {
    question: "Can she answer questions about hours, location, or what we offer?",
    answer:
      "Yes. We set her up with your opening hours, address, services, and what you don't offer. She answers from your shop, not from the internet.",
  },
  {
    question: "Is our customer data kept in the EU?",
    answer:
      "Yes. Call records are kept in the EU. We're GDPR-compliant and we don't sell your customer data.",
  },
];

/** Homepage FAQ: core questions without retail-page-only items */
export const RETAIL_FAQS_HOMEPAGE: readonly RetailFaqItem[] = [
  RETAIL_FAQS[0],
  RETAIL_FAQS[1],
  RETAIL_FAQS[5],
  RETAIL_FAQS[6],
  RETAIL_FAQS[7],
  RETAIL_FAQS[8],
  RETAIL_FAQS[9],
];
