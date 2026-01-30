# Cliste Systems Website

Next.js 16 marketing site for **Cliste Systems** — AI Voice Engineers (Ireland). Converted from aura.build HTML to a modern stack with best-in-class SEO.

## Stack

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS 4**
- **TypeScript**
- **@iconify/react** (Solar icon set)
- **next/font** (Inter)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## SEO & Meta

- **Metadata API**: Title, description, keywords, Open Graph, Twitter Cards
- **JSON-LD**: Organization + WebSite schemas
- **Sitemap**: `/sitemap.xml` (dynamic)
- **Robots**: `/robots.txt` (allows all, points to sitemap)
- **Canonical URL**: Set via `NEXT_PUBLIC_SITE_URL` (see `.env.example`)

### Optional

- Add **`/public/og-image.png`** (1200×630) for social previews.
- Set **`NEXT_PUBLIC_SITE_URL`** in `.env.local` to your production URL for correct canonical and OG URLs.

## Project Structure

- `app/` — Routes, layout, globals, sitemap, robots
- `components/` — Nav, Footer, Hero, sections (TechStack, Demo, Capability, Solutions, Integrations, Dashboard, Security, Technology, Process, About, FAQ)

## Build

```bash
npm run build
npm start
```

## License

Private — Cliste Systems.
