import Link from "next/link";
import { BlogProse } from "@/components/blog/BlogProse";
import type { BlogPostMeta } from "@/lib/blog-types";

export const missedCallsSmallBusinessMeta = {
  slug: "missed-calls-small-business-ireland",
  title: "What happens when a small business misses a phone call",
  description:
    "Most callers will not leave a voicemail. Here is what usually happens next, and what shop owners in Ireland can do about it.",
  publishedAt: "2026-08-25",
} satisfies BlogPostMeta;

export function MissedCallsSmallBusinessPost() {
  return (
    <BlogProse>
      <p>
        You are with a customer. The phone rings. You let it go because you are
        already mid-sale. That happens all day in a busy shop.
      </p>
      <p>
        The question is what the caller does next. In most cases, they do not
        wait around.
      </p>

      <h2>Most people will not leave a voicemail</h2>
      <p>
        Voicemail feels slow. People are used to texting, WhatsApp, or just
        ringing the next place on the list. If your line rings out, a lot of
        callers hang up and try someone else.
      </p>
      <p>
        That is especially true for first-time enquiries. Someone asking about
        stock, opening hours, or an appointment slot has not built any loyalty
        yet. They want a quick answer.
      </p>

      <h2>They might text, or they might not</h2>
      <p>
        Some callers will follow up on WhatsApp or SMS if they already have your
        number saved. Many will not. They called because calling felt easier at
        that moment.
      </p>
      <p>
        If nobody picks up, the enquiry often just disappears. You never know
        what they wanted.
      </p>

      <h2>Repeat customers are more forgiving, but not forever</h2>
      <p>
        Regulars might try again later in the day. They know you. But even loyal
        customers get frustrated if it keeps happening, especially when they need
        something sorted quickly.
      </p>
      <p>
        A missed call from a regular is still a missed chance to take an order,
        book them in, or sort a problem before they show up at the counter.
      </p>

      <h2>It is hard to measure what you lost</h2>
      <p>
        Unlike a walk-out, a missed call leaves no trace. There is no empty
        basket on the floor. You just never hear from that person.
      </p>
      <p>
        Shop owners often underestimate this because the phone feels like
        background noise until they look at how many calls went unanswered in a
        week.
      </p>

      <h2>What actually helps</h2>
      <p>
        You do not need a complicated setup. You need the line answered when
        your team cannot get to it.
      </p>
      <ul>
        <li>
          <strong>Answer every call, even when you are busy.</strong> That might
          mean another person on the floor, a backup mobile, or a system that
          picks up when the main line is engaged.
        </li>
        <li>
          <strong>Give the caller a clear next step.</strong> If you cannot take
          the order on the spot, tell them what will happen. A callback time, a
          text confirmation, or a note for the team to follow up.
        </li>
        <li>
          <strong>Read missed calls at the end of the day.</strong> Even a short
          list of who rang and what they wanted helps you spot patterns. Monday
          mornings and Saturday afternoons are common pinch points.
        </li>
      </ul>

      <h2>Where HelloCara fits in</h2>
      <p>
        HelloCara answers your shop line when nobody can get to the phone. The
        caller gets a real conversation, not a menu of buttons. When the call
        ends, you get a written summary on your dashboard so you can see what
        came in while you were on the floor.
      </p>
      <p>
        It is not a replacement for your team. It covers the gaps when everyone
        is busy, on lunch, or gone for the evening.
      </p>
      <p>
        If missed calls are a regular thing in your shop,{" "}
        <Link
          href="/how-cara-works"
          className="font-medium text-slate-900 underline-offset-2 hover:underline"
        >
          see how Cara handles them
        </Link>{" "}
        or{" "}
        <Link
          href="/retail"
          className="font-medium text-slate-900 underline-offset-2 hover:underline"
        >
          read about Cara for retail
        </Link>
        .
      </p>
    </BlogProse>
  );
}
