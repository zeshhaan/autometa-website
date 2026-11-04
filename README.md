# Autometa portfolio website

Marketing/portfolio site for Autometa, built with **Astro** + **Tailwind CSS v4**,
deployed as static assets on **Cloudflare Workers**. Design language is adapted from
the nocta reference: an OKLCH violet-neutral token system, Instrument Sans + Monaspace
Neon, a floating pill navbar, shiny badges, dark/light theming, and subtle blur-reveal
scroll animations.

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
```

## Build & deploy (Cloudflare Workers)

```bash
npm run build        # static output → ./dist
npm run deploy       # astro build + wrangler deploy (static-assets Worker)
```

`wrangler.jsonc` serves `./dist` as a static-assets-only Worker. First time:

```bash
npx wrangler login
npm run deploy
```

`npm run cf:preview` builds and serves the Worker locally via `wrangler dev`.

## Structure

```
src/
  data/site.ts          ← all copy: what we build, industries, capabilities, FAQ, nav
  layouts/Layout.astro  ← <head>, SEO/OG, pre-paint theme script, reveal observer
  styles/global.css     ← OKLCH design tokens + Tailwind theme + utilities
  components/            ← Navbar, Footer, Button, Section, SolutionCard, FeatureCard,
                            ShinyBadge, Background, Faq, ThemeToggle, Icon, Logo, …
  pages/
    index.astro             ← single-page landing (hero, what we build, industries,
                                capabilities, integrations, why, process, FAQ, contact)
    solutions/[slug].astro  ← unlinked detail page per product (getStaticPaths)
    404.astro
public/fonts/           ← Instrument Sans + Monaspace Neon (self-hosted)
public/og.png           ← social share image
```

## Editing content

Almost everything lives in `src/data/site.ts`.

- `buildAreas`: the "What we build" rows (consulting, web, mobile, desktop, agent-ready
  websites, ecommerce, AI). Each row shows a styled mock by default. To use a real
  screenshot or a licensed stock photo instead, drop the file in `public/images/build/`
  (4:3, about 1600px wide, `.webp` preferred) and set
  `image: { src: '/images/build/<file>', alt: '…' }` on that entry.
- `industries`: the industries we have built for.
- `capabilities`: the disciplines we deliver with.

- `products`: detailed pages generated at `/solutions/<slug>` by `src/pages/solutions/[slug].astro`.
  They stay reachable by URL but are deliberately not linked from the nav, homepage or footer.

## Before going live: replace these placeholders

- `site.whatsapp` and `site.email` in `src/data/site.ts`
- `site` URL in `astro.config.mjs` (used for canonical/OG URLs) if not `autometa.ae`
- `name` in `wrangler.jsonc` if you want a different Worker name
