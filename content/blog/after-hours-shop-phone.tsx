import Link from "next/link";
import { BlogProse } from "@/components/blog/BlogProse";
import type { BlogPostMeta } from "@/lib/blog-types";

export const afterHoursShopPhoneMeta = {
  slug: "after-hours-phone-coverage-irish-shops",
  title: "After-hours phone cover for Irish shops",
  description:
    "Your shop closes at six, but the phone keeps ringing. A plain look at the options Irish retailers use for evenings and weekends.",
  publishedAt: "2026-08-25",
} satisfies BlogPostMeta;

export function AfterHoursShopPhonePost() {
  return (
    <BlogProse>
      <p>
        The shutters are down. The till is counted. Then your mobile lights up
        with a missed call from the shop line. Someone wanted something after you
        closed.
      </p>
      <p>
        For a lot of Irish retailers, that is a normal week. The hard part is
        deciding what to do about it without living on your phone.
      </p>

      <h2>Why after-hours calls still matter</h2>
      <p>
        People shop and plan outside your opening hours. They ring on the way
        home from work, on a Sunday morning, or late on a Thursday when they
        finally have a minute.
      </p>
      <p>
        If nobody answers, they might leave it. They might also ring a competitor
        who picked up, or assume you are closed for good on that day.
      </p>

      <h2>Option one: let it ring out</h2>
      <p>
        This is what most small shops do by default. It costs nothing extra and
        keeps your evenings quiet.
      </p>
      <p>
        The trade-off is simple. You will not know how many enquiries you missed
        unless someone leaves a voicemail or texts you later. Many will not.
      </p>

      <h2>Option two: divert to a mobile</h2>
      <p>
        Some owners divert the shop line to a personal mobile after hours. You
        can answer when you want to and ignore it when you do not.
      </p>
      <p>
        It works if you are happy being on call. It gets tiring fast, especially
        if the same people ring about things that could wait until morning. You
        also end up mixing shop calls with personal life on one device.
      </p>

      <h2>Option three: a message on the line</h2>
      <p>
        A recorded greeting with your hours and an email address is better than
        silence. Callers at least know they reached the right place.
      </p>
      <p>
        It still puts the burden on them to follow up. A lot will not send the
        email. They wanted to talk to someone there and then.
      </p>

      <h2>Option four: someone else answers for you</h2>
      <p>
        Traditional answering services exist. You pay a monthly fee and a human
        takes messages on your behalf.
      </p>
      <p>
        Quality varies. Some services know your business well. Others read from
        a script and pass on a note that does not tell you much. Cost adds up if
        call volume is steady.
      </p>

      <h2>What to look for in any setup</h2>
      <p>
        Whatever you choose, a few basics matter for a shop phone line:
      </p>
      <ul>
        <li>
          <strong>Callers should know they reached your business.</strong> Not a
          generic call centre. Your name, your tone.
        </li>
        <li>
          <strong>You should get something in writing.</strong> A message left in
          a voicemail is easy to miss. A short summary you can read in the
          morning is easier to act on.
        </li>
        <li>
          <strong>It should match what you actually sell.</strong> Hours, services,
          whether you take orders by phone, collection times. Wrong information
          causes more hassle than no answer.
        </li>
        <li>
          <strong>You stay in control.</strong> You decide what gets answered
          automatically and what gets flagged for you.
        </li>
      </ul>

      <h2>How shops use HelloCara after hours</h2>
      <p>
        HelloCara can answer your line outside opening hours the same way it does
        during the day. A caller gets a normal conversation. You get a written
        record on your dashboard when you open up in the morning.
      </p>
      <p>
        You set your hours and what Cara should say about orders, appointments,
        and callbacks. If something needs a human, it lands in your inbox for
        follow-up.
      </p>
      <p>
        For shop owners who want the phone covered without carrying it home every
        night, that is usually the sweet spot.
      </p>
      <p>
        Read more about{" "}
        <Link
          href="/how-cara-works"
          className="font-medium text-slate-900 underline-offset-2 hover:underline"
        >
          how Cara works
        </Link>
        , or see{" "}
        <Link
          href="/retail/salon"
          className="font-medium text-slate-900 underline-offset-2 hover:underline"
        >
          how salons use it
        </Link>
        .
      </p>
    </BlogProse>
  );
}
