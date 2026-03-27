# SalvaSEO Design System

> **This document is the single source of truth for visual design, component patterns, and coding conventions in the SalvaSEO project. All contributors — human or AI — must follow these rules before writing or modifying any code.**

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Design Tokens](#2-design-tokens)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Components](#5-components)
6. [Animation System](#6-animation-system)
7. [Accessibility](#7-accessibility)
8. [Page Composition](#8-page-composition)
9. [Do / Don't Rules](#9-do--dont-rules)

---

## 1. Design Principles

These five principles govern every visual and structural decision in SalvaSEO.

**1. Dark with luminous accents.** The primary aesthetic is dark (`bg-petrol-900`) with controlled, intentional pops of color (sky blue for CTAs, orange for highlights). Light sections exist but are the exception.

**2. Accessibility is non-negotiable.** Every interactive element must be keyboard-accessible with visible focus rings. Contrast ratios follow WCAG AA (4.5:1 minimum for body text). Motion must respect `prefers-reduced-motion`.

**3. Restraint over decoration.** Decorative elements (watermarks, gradients, dot grids, diagonal lines) must be subtle and always marked `aria-hidden="true"` with `pointer-events-none`. They support the content; they never compete with it.

**4. Consistent rhythm.** Sections, cards, and typography follow a predictable visual rhythm. Spacing tokens are reused, not invented per-section.

**5. SEO-first semantics.** Every section that contains a heading must use the correct HTML element (`h1`, `h2`, `h3`). Structured data and canonical URLs are managed centrally in `Layout.astro` — never inline in section components.

---

## 2. Design Tokens

All tokens are defined in `src/styles/global.css` under `@theme`. **Never hardcode hex values that have a token equivalent.**

### 2.1 Color Palette

#### Petrol — Supporting neutrals (dark backgrounds, text)

| Token | Value | Usage |
|---|---|---|
| `petrol-50` | `#F7F9FA` | Soft card background (light sections) |
| `petrol-100` | `#EEF3F5` | Medium card background (light sections) |
| `petrol-600` | `#3A6D82` | Muted text on dark backgrounds |
| `petrol-700` | `#2A5566` | Body text on light backgrounds |
| `petrol-800` | `#1e4d5e` | Hover state for dark section cells |
| `petrol-900` | `#1A3C4A` | **Primary dark background** |

#### Sky — Primary brand / CTA

| Token | Value | Usage |
|---|---|---|
| `sky-50` | `#f0f9ff` | Very soft sky tint |
| `sky-100` | `#e0f2fe` | Soft sky background |
| `sky-500` | `#0ea5e9` | Primary CTA button, section upheadings, step pills |
| `sky-600` | `#0284c7` | Brand foreground (`text-fg-brand`) |
| `sky-a11y` | `#0279b8` | Sky text on **white** backgrounds (WCAG AA 4.5:1) |

#### Orange — Secondary accent / highlight

| Token | Value | Usage |
|---|---|---|
| `orange-50` | `#fff7ed` | Soft orange background |
| `orange-400` | `#fb923c` | Accent text, step labels, card hover text |
| `orange-500` | `#f97316` | Decorative rules, card left accent bar, step pills |

#### Semantic aliases

Always prefer these semantic utilities over raw palette tokens:

| Utility class | Maps to | Use for |
|---|---|---|
| `text-heading` | `petrol-900` | All headings on light backgrounds |
| `text-body` | `petrol-700` | All body text on light backgrounds |
| `text-fg-brand` | `sky-600` | Brand-colored inline text on light backgrounds |
| `text-sky-a11y` | `sky-a11y` | Sky-colored text on white (accessibility-safe) |
| `bg-neutral-primary-soft` | `petrol-50` | Card/section backgrounds (light) |
| `bg-neutral-secondary-medium` | `petrol-100` | Slightly darker card backgrounds (light) |
| `border-default` | `#d5dde2` | Default border color on light sections |
| `rounded-base` | `0.5rem` | Standard border radius |

#### Special colors (use only for their specific purpose)

| Token | Value | Usage |
|---|---|---|
| `warm-white` | `#FAFAF8` | Site background (page root) |
| `sandstone-50` | `#fdf8f3` | Barcelona landing page warm accent |
| `maps-green` | `#34a853` | Google Maps pin icon |
| `#25D366` / `#1FAD54` | WhatsApp brand green | **WhatsApp button only** |

---

## 3. Typography

### 3.1 Font Families

| Role | Font | How to apply |
|---|---|---|
| Body / UI | DM Sans Variable | Applied globally via `body { font-family: var(--font-family-sans) }` — no additional class needed |
| Display / Headlines | Titan One | Apply inline: `style='font-family: "Titan One", cursive;'` |

**Do not** use Titan One for body text, labels, or anything below `text-2xl`. It is exclusively for large hero and section headings.

### 3.2 Type Scale

#### Display headings (Titan One)

| Context | Classes | Approximate output |
|---|---|---|
| H1 hero | `text-[clamp(3.2rem,7.5vw,5.5rem)] leading-[0.9] tracking-tight` | ~51–88px fluid |
| H1 hero sub-line | `text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.9] tracking-tight` | ~32–56px fluid |
| H2 section | `text-4xl sm:text-5xl tracking-tight` | 36px / 48px |
| H2 section (fluid) | `text-[clamp(2rem,4.5vw,3.5rem)] tracking-tight` | ~32–56px fluid |

#### Section labels / eyebrows (DM Sans)

```
text-[0.7rem] font-bold uppercase tracking-[0.22em] text-orange-400
```
Used as small all-caps labels with a horizontal rule before them. Always pair with `aria-label` or ensure a parent heading provides context.

```
text-xs font-semibold tracking-[0.15em] uppercase text-sky-400
```
Used inside step pills (process cards).

#### Upheading component labels

```
text-base/7 font-semibold
```
Rendered via `<Upheading>` component — color passed as prop.

#### Body text

| Context | Classes |
|---|---|
| Body paragraph (dark bg) | `text-base/7 text-white/85` or `text-base md:text-lg text-white/55 leading-relaxed text-pretty` |
| Body paragraph (light bg) | `text-body text-base/7` or `text-lg leading-relaxed text-pretty` |
| Body paragraph (muted dark) | `text-petrol-600` or `text-petrol-100` |
| Small / caption | `text-sm text-white/50` or `text-sm text-petrol-600` |

#### Heading hierarchy rules

- Each page has **exactly one `<h1>`** — in the `<Hero>` component.
- All other section headings use `<h2>`.
- Sub-headings within cards or list items use `<p>` or `<h3>` depending on semantic depth.
- Never skip heading levels.

---

## 4. Spacing & Layout

### 4.1 Section Vertical Spacing

All top-level `<section>` elements use:

```html
class="... py-24 md:py-32"
```

This is the standard section rhythm. Do not deviate without a strong visual reason.

### 4.2 Content Container

All sections use the same max-width container:

```html
<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
```

Never use a different `max-w-*` for page sections. Modals, tooltips, or widgets are exempt.

### 4.3 Grid Patterns

| Layout | Classes |
|---|---|
| Two-column editorial (main + sidebar) | `grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-12 lg:gap-20` |
| Two-column balanced | `grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-20` |
| Three-column grid | `grid grid-cols-1 md:grid-cols-3 gap-px` |
| Four-column grid | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` |

The three-column process card layout uses `gap-px bg-white/5 rounded-2xl overflow-hidden` to create hairline dividers between cells.

### 4.4 Card & Block Internal Spacing

| Size | Padding |
|---|---|
| Standard card | `p-8` |
| Large card | `p-8 lg:p-10` |
| Compact card / list item | `px-6 py-5` |
| Blockquote / callout | `px-8 py-7` |

### 4.5 Section Header Margin

The spacing between a section header block and the section body is `mb-16`.

Spacing between an upheading and its `<h2>` is `mt-2`.
Spacing between the `<h2>` and the decorative rule is `mt-6`.
Spacing between the rule and the body paragraph is `mt-6`.

### 4.6 Navbar Height

```css
--navbar-height: 56px
```

All anchor sections include `scroll-margin-top: var(--navbar-height)` via the scroll-offset rules in `global.css`. When adding a new anchor section, add its `id` to the list in `global.css`.

---

## 5. Components

### 5.1 Section Shell

Every page section follows this structure:

```astro
<section
  id="section-id"   <!-- Required for sections with anchor navigation -->
  class="relative overflow-hidden bg-petrol-900 py-24 md:py-32">

  <!-- DECORATIVE LAYER — always pointer-events-none, aria-hidden="true" -->
  <!-- (dot grid, gradient overlay, watermark, hairlines) -->

  <!-- CONTENT LAYER -->
  <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
    <!-- section content -->
  </div>

</section>
```

Light-background sections replace `bg-petrol-900` with `bg-neutral-primary-soft` or `bg-warm-white`.

### 5.2 Section Header Block

Used to open a section with an upheading label + display heading:

```astro
<div data-animate-direction="left" class="mb-16 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
  <div>
    <Upheading as="p" text="Section label text" color="var(--color-sky-500)" />
    <h2
      class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl"
      style='font-family: "Titan One", cursive; font-weight: 400;'>
      Section heading
    </h2>
  </div>
</div>
```

For orange-accented sections, replace `color="var(--color-sky-500)"` with `color="var(--color-orange-500)"`.

### 5.3 Upheading Component

**File:** `src/components/Upheading.astro`

```astro
<Upheading
  text="Label text"
  color="var(--color-sky-500)"  <!-- default; use orange-500 for orange sections -->
  as="p"                         <!-- default; use "h2" only if no sibling h2 follows -->
  class=""                       <!-- optional extra classes -->
/>
```

Renders as `text-base/7 font-semibold` with the given color. Do not recreate this pattern manually.

### 5.4 Card — Dark List Item (EstoEsParaTi pattern)

```astro
<li
  data-animate
  class="group relative rounded-xl border border-white/[0.07] bg-white/[0.03] px-6 py-5
         transition-all duration-300 hover:border-orange-500/30 hover:bg-white/[0.055] overflow-hidden cursor-default">

  <!-- Left accent bar -->
  <div class="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-orange-500
              scale-y-0 origin-top rounded-r-full transition-transform duration-300 group-hover:scale-y-100"
       aria-hidden="true" />

  <!-- Ghost ordinal number -->
  <div class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none leading-none
              opacity-60 group-hover:opacity-100 transition-opacity duration-300"
       aria-hidden="true"
       style='font-family: "Titan One", cursive; font-size: 5rem; color: rgba(249,115,22,0.07); line-height: 1;'>
    01
  </div>

  <!-- Content -->
  <div class="relative flex items-start gap-4">
    <!-- check badge, heading, body -->
  </div>
</li>
```

**Rules for this card pattern:**
- Always use `border-white/[0.07]` (bracket notation), never `border-white/8` — these are not equivalent in Tailwind v4.
- Ghost number opacity must be `rgba(249,115,22,0.07)` — not a Tailwind class.
- Left accent bar uses `scale-y-0 → group-hover:scale-y-100` with `origin-top`.

### 5.5 Card — Process Step (WorkWithMe pattern)

```astro
<div
  data-animate
  class="group relative overflow-hidden bg-petrol-900 p-8 lg:p-10 flex flex-col gap-6
         hover:bg-petrol-800 transition-colors duration-300">

  <!-- Giant watermark number -->
  <div class="pointer-events-none absolute -bottom-6 -right-4 select-none leading-none
              text-white/[0.04] group-hover:text-white/[0.07] transition-all duration-500"
       aria-hidden="true"
       style='font-family: "Titan One", cursive; font-size: clamp(8rem, 16vw, 13rem); line-height: 1;'>
    01
  </div>

  <!-- Step pill -->
  <div class="flex items-center gap-3">
    <span class="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full
                 text-xs font-bold text-white bg-sky-500">
      1
    </span>
    <span class="text-xs font-semibold tracking-[0.15em] uppercase text-sky-400">
      Step label
    </span>
  </div>

  <!-- Body -->
  <p class="relative text-base/7 text-petrol-100 text-pretty" set:html={step.body} />
</div>
```

### 5.6 Buttons

There are three button variants. Use the correct one for each context.

#### Primary — WhatsApp CTA

Use `<WhatsAppButton>` component. Do not recreate the button HTML manually.

```astro
import WhatsAppButton from '../../WhatsAppButton.astro'

<WhatsAppButton
  text="Analiza mi web"
  href={waHref}
  class="px-6 py-3 text-[0.9375rem]"  <!-- override size only if needed -->
/>
```

Base classes (already in component, do not duplicate):
```
inline-flex items-center gap-2 rounded-md bg-[#25D366] px-3.5 py-2.5
text-sm font-bold text-white shadow-sm hover:bg-[#1FAD54]
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]
```

#### Secondary — Internal CTA (sky)

```html
<a
  href="#section-id"
  class="rounded-md bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-sm
         hover:bg-sky-400 active:bg-sky-600
         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400
         transition-all">
  Button label
</a>
```

#### Tertiary — Text link / muted

```html
<span class="text-sm text-petrol-600">Supporting text or muted link</span>
```

**Button rules:**
- Never create a fourth button style. If a new variant feels needed, revisit the existing three first.
- Always include `focus-visible:outline-2 focus-visible:outline-offset-2` on interactive elements.
- Never use `focus:outline-*` — always `focus-visible:outline-*`.
- Buttons linking to external domains always include `target="_blank" rel="noopener noreferrer nofollow"`.

### 5.7 Decorative Elements

These elements appear in almost every section. They must always have `pointer-events-none`, `aria-hidden="true"`, and `absolute` positioning inside the section's overflow container.

#### Dot-grid texture

```html
<div
  class="pointer-events-none absolute inset-0"
  aria-hidden="true"
  style="background-image: radial-gradient(circle, rgba(255,255,255,0.028) 1px, transparent 1px); background-size: 32px 32px;">
</div>
```

#### Gradient radial ambient (top-right corner)

```html
<div
  class="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
  aria-hidden="true"
  style="background: radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 65%);">
</div>
```

#### Hairline section dividers (top/bottom)

```html
<!-- Top -->
<div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/35 to-transparent" aria-hidden="true"></div>
<!-- Bottom -->
<div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" aria-hidden="true"></div>
```

#### Large watermark word

```html
<div
  class="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none leading-none"
  aria-hidden="true"
  style='font-family: "Titan One", cursive; font-size: clamp(14rem, 28vw, 24rem); color: rgba(249,115,22,0.055); line-height: 1; white-space: nowrap;'>
  WORD
</div>
```

**Do not** use opacity values above `0.08` for watermark text — they must remain clearly background elements.

### 5.8 Breadcrumb

Use `src/components/Breadcrumb.astro` on all landing pages (not the home page). It accepts an `items` array. Do not build inline breadcrumbs.

### 5.9 Blockquote / Callout

For testimonials and single key statements:

```html
<div class="mt-8 flex items-start gap-6 rounded-2xl border border-white/8 bg-white/[0.03] px-8 py-7">
  <span class="flex-shrink-0 mt-0.5 text-5xl text-sky-500/30 font-serif leading-none select-none" aria-hidden="true">"</span>
  <blockquote class="text-lg/8 italic text-petrol-100 text-pretty">
    Quote text here.
  </blockquote>
</div>
```

Note: `border-white/8` (numeric slash) is used here intentionally to match the existing established pattern for this specific component.

---

## 6. Animation System

### 6.1 Scroll-triggered animations

Apply `data-animate` to any element that should fade-in-up on scroll. The IntersectionObserver in `src/scripts/animations.js` (or equivalent) adds `.is-visible` when the element enters the viewport.

```html
<div data-animate>Content that fades in on scroll</div>
```

For directional animations:
```html
<div data-animate-direction="left">Slides in from left</div>
<div data-animate-direction="right">Slides in from right</div>
```

CSS classes added by JS:
- `.is-visible` → for `[data-animate]`
- `.is-visible-left` → for `[data-animate-direction="left"]`
- `.is-visible-right` → for `[data-animate-direction="right"]`

### 6.2 CSS animation utilities

| Utility | Use case |
|---|---|
| `animate-fade-in-up` | Immediate page-load animations (Hero elements) |
| `animate-fade-in` | Simple opacity fade on load |

For staggered entrance in Hero sections, use `[animation-delay:Xms]` in increments of 100–200ms.

### 6.3 Named keyframe animations

| Animation | Defined | Use for |
|---|---|---|
| `fade-in-up` | global.css | Hero text entrance |
| `fade-in` | global.css | Logo/badge entrance |
| `subtle-float` | global.css | Floating decorative SVGs or icons |
| `pulse-glow` | global.css | Button or badge attention effect |
| `serp-scan` | global.css | SERP mockup scanner line in Hero |

Do not create new keyframe animations in component files. Add them to `global.css` and document here.

### 6.4 Transition standards

| Context | Classes |
|---|---|
| Card hover transitions | `transition-all duration-300` |
| Color-only transitions | `transition-colors duration-300` |
| Long reveal transitions | `transition-all duration-500` |
| Button hover | `transition-all` (no explicit duration — inherits default 150ms) |

### 6.5 Reduced motion

All scroll-triggered animations and CSS animations are automatically disabled when the user has `prefers-reduced-motion: reduce` set. This is handled globally in `global.css`. Do not add per-component reduced-motion overrides.

---

## 7. Accessibility

### 7.1 Color contrast

| Background | Text | Token to use | Ratio |
|---|---|---|---|
| White / warm-white | Sky brand text | `text-sky-a11y` | 4.74:1 ✓ |
| White / warm-white | Body text | `text-body` (petrol-700) | ≥4.5:1 ✓ |
| petrol-900 dark | Body text | `text-petrol-100` or `text-white/85` | ✓ |
| petrol-900 dark | Muted text | `text-white/55` minimum | Verify with checker |

Never use `text-white/50` or lower for text that carries meaning. Decorative or supporting text can be dimmer, but never the primary content of a paragraph.

### 7.2 Focus styles

All interactive elements must have:

```
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color]
```

The outline color must match or relate to the element's brand color (sky for CTAs, WhatsApp green for WhatsApp buttons).

### 7.3 Decorative elements

Every purely decorative element must have **both**:
- `aria-hidden="true"`
- `pointer-events-none`

This includes: watermarks, gradients, dot grids, SVG dividers, ghost numbers, and decorative rules.

### 7.4 Interactive semantics

- Use `<a>` for navigation (links that change the URL or scroll to an anchor).
- Use `<button>` for actions (open modal, toggle accordion, submit).
- Never use `<div>` or `<span>` as interactive elements.
- Form inputs must have associated `<label>` elements.

### 7.5 Scroll anchors

When adding a new `id`-anchored section, add the id to the scroll-margin-top list in `global.css`:

```css
#new-section-id {
  scroll-margin-top: var(--navbar-height);
}
```

---

## 8. Page Composition

### 8.1 File structure

```
src/
  components/
    pages/
      home/             ← Components exclusive to the home page
      posicionamiento-web-barcelona/  ← Components for that landing page
      seo-local-barcelona/
      presupuesto-seo-barcelona/
    shared/             ← Shared utility components (e.g., GoogleMapEmbed)
    Navbar.astro        ← Global
    Footer.astro        ← Global
    Upheading.astro     ← Global shared primitive
    WhatsAppButton.astro ← Global shared primitive
    Breadcrumb.astro    ← Global shared primitive
  layouts/
    Layout.astro        ← Single layout for all pages
  pages/
    index.astro
    posicionamiento-web-barcelona.astro
    ...
  data/
    site.ts             ← Brand config, navigation, contact info
  styles/
    global.css          ← All design tokens and global CSS
```

### 8.2 Layout props

```typescript
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

JSON-LD structured data for the home page is managed inside `Layout.astro` guarded by `isHomePage`. Do not add JSON-LD inside section components.

### 8.3 Naming conventions

- **Home-page-exclusive components:** `src/components/pages/home/ComponentName.astro`
- **City landing page components:** `src/components/pages/[city-slug]/ComponentName.astro`
- **Shared cross-page components:** `src/components/shared/ComponentName.astro` or root of `src/components/`

When the same section type (e.g., Hero, FAQ, CTA) appears on multiple pages, **each page has its own version** in its own folder. Do not create shared section components with conditional logic per page — keep pages decoupled.

### 8.4 Site data

All brand data (phone, WhatsApp message, navigation links, social links) lives in `src/data/site.ts`. Never hardcode contact information in component files.

```typescript
import { siteConfig, buildWhatsAppHref } from '../../../data/site'
```

### 8.5 Sitemap

Only pages listed in `PAGE_LASTMOD` in `astro.config.mjs` are included in the sitemap. Update `PAGE_LASTMOD` when adding new public pages.

---

## 9. Do / Don't Rules

### Colors

| ✅ DO | ❌ DON'T |
|---|---|
| Use `text-heading` for headings on light backgrounds | Use `text-petrol-900` directly when `text-heading` exists |
| Use `text-body` for paragraphs on light backgrounds | Use `text-petrol-700` directly when `text-body` exists |
| Use `text-sky-a11y` for sky text on white backgrounds | Use `text-sky-600` for text on white (contrast 4.48:1, borderline) |
| Use `text-white/55` minimum for meaningful text on dark bg | Use `text-white/40` or lower for content text |
| Use `rgba(249,115,22,0.07)` for ghost card numbers | Use Tailwind opacity classes for ghost numbers (precision matters) |

### Typography

| ✅ DO | ❌ DON'T |
|---|---|
| Apply Titan One via `style='font-family: "Titan One", cursive;'` | Add Titan One to a CSS class or Tailwind utility |
| Use `text-pretty` on paragraphs and headings for better wrapping | Leave long text without wrap control |
| Use one `<h1>` per page in the Hero component | Put `<h1>` anywhere outside the Hero |
| Use `<h2>` for all section headings | Use `<p>` styled as a heading for actual section titles |

### Spacing

| ✅ DO | ❌ DON'T |
|---|---|
| Use `py-24 md:py-32` for all section padding | Use different vertical padding per section without strong reason |
| Use `max-w-7xl px-6 lg:px-8` for all content containers | Use `max-w-6xl`, `max-w-5xl`, or other widths for page sections |
| Use `mb-16` between section header and body | Invent arbitrary margin values |

### Components

| ✅ DO | ❌ DON'T |
|---|---|
| Use `<WhatsAppButton>` for all WhatsApp CTAs | Copy-paste the WhatsApp button HTML inline |
| Use `<Upheading>` for section eyebrow labels | Recreate the upheading pattern with a `<p>` manually |
| Use `<Breadcrumb>` for breadcrumb navigation | Build inline breadcrumb markup |
| Mark all decorative elements with `aria-hidden="true"` and `pointer-events-none` | Leave decorative overlays accessible or interactive |

### Animations

| ✅ DO | ❌ DON'T |
|---|---|
| Add `data-animate` to scroll-animated elements | Use custom JS `IntersectionObserver` in individual components |
| Keep animation durations at `300ms` (hover) or `500ms` (reveal) | Use durations longer than 600ms without `prefers-reduced-motion` fallback |
| Define new keyframes in `global.css` | Add `@keyframes` in component `<style>` blocks |
| Use `transition-colors` when only color changes on hover | Use `transition-all` when only color changes (excess recalculation) |

### Architecture

| ✅ DO | ❌ DON'T |
|---|---|
| Keep all contact data in `src/data/site.ts` | Hardcode phone numbers, WhatsApp links, or emails in components |
| Add new colors to `@theme` in `global.css` | Add `style="color: #hex"` for brand colors not in the palette |
| Keep page sections decoupled (one folder per page) | Share section components with `if (page === 'home')` conditionals |
| Add new anchor IDs to the scroll-margin list in `global.css` | Use `scroll-margin-top` inline in components |
| Update `PAGE_LASTMOD` in `astro.config.mjs` when adding a public page | Leave new pages out of the sitemap |

---

*Last updated: 2026-03-27*
