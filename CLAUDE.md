# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SalvaSEO is a static SEO consultant landing site built with Astro 5, Tailwind CSS v4, and TailwindPlus Elements. It has two pages: a home page and a Barcelona landing page.

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
}
```

`Layout.astro` handles: HTML structure, Navbar, Footer, WaChatWidget, GTM via Partytown, cookie consent, `@tailwindplus/elements` import, and JSON-LD for the home page only (guarded by `isHomePage`).

### Component Pattern

All page sections are self-contained `.astro` files in `src/components/`. Pages compose them in order inside `<Layout>`. The Barcelona page has its own set of `*Barcelona.astro` components to avoid coupling with home page content.

The shared `Upheading.astro` component renders a colored section label above headings — use it when adding new sections.

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

- **`@astrojs/sitemap`**: Only indexes `/` and `/posicionamiento-web-barcelona/` (see filter in `astro.config.mjs`)
- **`@astrojs/partytown`**: Proxies GTM (`dataLayer.push`, `gtag`) to a web worker — GTM script uses `type="text/partytown"`
- **`vanilla-cookieconsent`**: Initialized via `src/scripts/cookieconsent.js`, imported in `Layout.astro`
- **`wa-chat-widget`**: WhatsApp chat widget rendered as `<WaChatWidget />` in Layout
- **`@lucide/astro`**: Icon library used in components
- **`@fontsource/titan-one`**: Custom font available as a dependency
