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
  data/site.ts          ← all copy: products, services, FAQ, nav, stats
  layouts/Layout.astro  ← <head>, SEO/OG, pre-paint theme script, reveal observer
  styles/global.css     ← OKLCH design tokens + Tailwind theme + utilities
  components/            ← Navbar, Footer, Button, Section, SolutionCard, FeatureCard,
                            ShinyBadge, Background, Faq, ThemeToggle, Icon, Logo, …
  pages/
    index.astro             ← single-page landing (hero, services, solutions, why,
                                process, FAQ, contact)
    solutions/[slug].astro  ← one detail page per product (getStaticPaths)
    404.astro
public/fonts/           ← Instrument Sans + Monaspace Neon (self-hosted)
public/og.png           ← social share image
```

## Editing content

Almost everything lives in `src/data/site.ts`. Add or edit a product in the
`products` array and a detail page is generated automatically at `/solutions/<slug>`.

## Before going live: replace these placeholders

- `site.whatsapp` and `site.email` in `src/data/site.ts`
- `site` URL in `astro.config.mjs` (used for canonical/OG URLs) if not `autometa.ae`
- `name` in `wrangler.jsonc` if you want a different Worker name
