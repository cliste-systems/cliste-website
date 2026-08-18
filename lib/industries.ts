/** Industry cards for platform UI. Header nav uses `PRODUCTS_NAV`. */

export type IndustryCard = {
  label: string;
  image: string;
  alt: string;
};

export const INDUSTRY_CARDS: readonly IndustryCard[] = [
  {
    label: "Salon",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Hair salon",
  },
  {
    label: "Barber",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Barber shop",
  },
  {
    label: "Nails",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Nail studio",
  },
  {
    label: "Spa & sauna",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Spa and wellness",
  },
  {
    label: "Medspa",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc2360?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Medspa treatment",
  },
  {
    label: "Massage",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Massage therapy",
  },
  {
    label: "Fitness & recovery",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Gym and fitness",
  },
  {
    label: "Physical therapy",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Physical therapy",
  },
  {
    label: "Health practices",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Health clinic",
  },
  {
    label: "Tattooing & piercing",
    image:
      "https://images.unsplash.com/photo-1611501275019-9b5fea01b8cb?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Tattoo studio",
  },
  {
    label: "Pet grooming",
    image:
      "https://images.unsplash.com/photo-1516734212186-a972f29ad9d3?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Pet grooming",
  },
  {
    label: "Tanning studio",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800&h=1000",
    alt: "Beauty studio",
  },
];

export const INDUSTRIES: string[] = INDUSTRY_CARDS.map((c) => c.label);

export const HOW_CARA_WORKS_HREF = "/how-cara-works" as const;

export const HOW_CARA_IS_BUILT_HREF = "/how-cara-is-built" as const;

export const HOW_CARA_WORKS_LINK = {
  label: "How Cara works",
  href: HOW_CARA_WORKS_HREF,
} as const;

export const HOW_CARA_IS_BUILT_LINK = {
  label: "How Cara is built",
  href: HOW_CARA_IS_BUILT_HREF,
} as const;

export type HeaderNavItem = {
  label: string;
  href: string;
};

export type HeaderNavMenu = {
  trigger: string;
  items: readonly HeaderNavItem[];
};

/** Mobile menu: Cara section (desktop uses separate top-level links) */
export const CARA_NAV: HeaderNavMenu = {
  trigger: "Cara",
  items: [
    { label: HOW_CARA_WORKS_LINK.label, href: HOW_CARA_WORKS_LINK.href },
    { label: HOW_CARA_IS_BUILT_LINK.label, href: HOW_CARA_IS_BUILT_LINK.href },
  ],
};

/** Header nav: Products dropdown */
export const PRODUCTS_NAV: HeaderNavMenu = {
  trigger: "Products",
  items: [{ label: "Cara for Retail", href: "/retail" }],
};

/** Header nav: Industries → Cara for retail → these verticals only */
export const CLISTE_STUDIO_INDUSTRY_LINKS: readonly {
  label: string;
  href: string;
}[] = [
  { label: "Salon", href: "/retail/salon" },
  { label: "Barber", href: "/retail/barber" },
] as const;
