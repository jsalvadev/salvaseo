# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Design System

> **Before writing any code, read [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) at the root of this project.**
>
> It is the single source of truth for: color tokens, typography rules, component patterns (buttons, cards, sections), animation conventions, accessibility requirements, and Do/Don't rules. All contributions must comply with it.

## Project Overview

SalvaSEO is a static SEO consultant landing site built with Astro 5, Tailwind CSS v4, and TailwindPlus Elements. It has four pages: home, Barcelona SEO landing, SEO Local Barcelona, and Presupuesto SEO Barcelona.

## Development Commands

```bash
pnpm install       # Install dependencies
pnpm dev           # Start dev server at localhost:4321
pnpm build         # Build for production (outputs to ./dist/)
pnpm preview       # Preview production build locally
```

## Architecture

### Pages and Layout

Two pages exist under `src/pages/`:
- `index.astro` — Home page
- `posicionamiento-web-barcelona.astro` — City landing page with JSON-LD structured data inline

Both use `src/layouts/Layout.astro`, which accepts these props:

```ts
interface Props {
  title?: string;
  description?: string;
  noindex?: boolean;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  preloadImageHref?: string;  // LCP image preload hint
}
```

`Layout.astro` handles: HTML structure, Navbar, Footer, WaChatWidget, GTM via Partytown, cookie consent, `@tailwindplus/elements` import, and JSON-LD for the home page only (guarded by `isHomePage`).

### Component Pattern

All page sections are self-contained `.astro` files in `src/components/pages/[page-slug]/`. Pages compose them in order inside `<Layout>`. Each page has its own component folder to avoid coupling between pages.

Shared primitives (`Upheading.astro`, `WhatsAppButton.astro`, `Breadcrumb.astro`) live directly under `src/components/`. Always use these components — do not recreate their patterns inline. See `DESIGN_SYSTEM.md` section 5 for full component API.

### Styling System

- **Tailwind v4** configured as a Vite plugin in `astro.config.mjs`
- **Flowbite** sourced via `@source "../node_modules/flowbite"` and `@plugin "flowbite/plugin"` in `global.css`
- **Custom tokens** defined in `global.css` under `@theme`:
  - Colors: `petrol-*`, `sky-*`, `orange-500`, `warm-white`
  - Semantic aliases: `--color-heading` (petrol-900), `--color-body` (petrol-700), `--color-fg-brand` (sky-600)
- **Custom utilities** available via `@utility` (use these for consistent styling):
  - `text-heading`, `text-body`, `text-fg-brand`
  - `bg-neutral-primary-soft`, `bg-neutral-secondary-medium`
  - `border-default`, `rounded-base`
- **CSS variable**: `--navbar-height: 80px` — used for `scroll-margin-top` on anchor sections

### Integrations

- **`@astrojs/sitemap`**: Only indexes pages listed in `PAGE_LASTMOD` in `astro.config.mjs` — update this map when adding new public pages
- **`@astrojs/partytown`**: Proxies GTM (`dataLayer.push`, `gtag`) to a web worker — GTM script uses `type="text/partytown"`
- **`vanilla-cookieconsent`**: Initialized via `src/scripts/cookieconsent.js`, imported in `Layout.astro`
- **`wa-chat-widget`**: WhatsApp chat widget rendered as `<WaChatWidget />` in Layout
- **`@lucide/astro`**: Icon library used in components
- **`@fontsource/titan-one`**: Custom font available as a dependency

<!-- skilld -->
Before modifying code, evaluate each installed skill against the current task.
For each skill, determine YES/NO relevance and invoke all YES skills before proceeding.
<!-- /skilld -->
