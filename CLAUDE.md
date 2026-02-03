# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based static site project for SalvaSEO, built with Tailwind CSS v4 and TailwindPlus Elements. The site is a single-page landing page with multiple section components.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server at localhost:4321
pnpm dev

# Build for production (outputs to ./dist/)
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro [command]
```

## Architecture

### Component-Based Structure

The site follows a single-page layout pattern where `src/pages/index.astro` imports and renders section components in sequence:

1. **Hero** - Header navigation and hero section with skewed background
2. **AboutMe** - About section
3. **Services** - Feature list with icons
4. **Cta** - Call-to-action section
5. **Timeline** - Timeline component
6. **WorkWithMe** - Contact/work section

All components are rendered through the `Layout.astro` wrapper which provides:
- HTML document structure
- Global CSS imports (`src/styles/global.css`)
- Meta tags and page configuration

### Styling System

- **Framework**: Tailwind CSS v4 integrated via Vite plugin
- **UI Components**: TailwindPlus Elements (`@tailwindplus/elements`) for enhanced components like `<el-dialog>` and `<el-dialog-panel>`
- **Configuration**: Tailwind is configured in `astro.config.mjs` as a Vite plugin
- **Global Styles**: Imported via `src/styles/global.css` which contains `@import "tailwindcss"`

### Key Technical Details

- **TypeScript**: Uses Astro's strict TypeScript configuration (`astro/tsconfigs/strict`)
- **Component Pattern**: All components are `.astro` files using Astro's component syntax
- **Interactive Elements**: Mobile menu uses TailwindPlus Elements' dialog system with `command` and `commandfor` attributes
- **Asset Management**: Images are referenced both locally (`src/assets/hero.jpg`) and from external sources (Unsplash)

### Build Configuration

- **Astro Config** (`astro.config.mjs`): Minimal configuration with Tailwind CSS integrated as a Vite plugin
- **No Static Site Generation Config**: Uses Astro's default SSG behavior
- **No Routing Config**: Single page application with no custom routing

## Working with Components

When modifying or creating components:
- Components are self-contained `.astro` files in `src/components/`
- Use Tailwind utility classes for styling
- TailwindPlus Elements are available for enhanced interactive components
- Follow the existing pattern of importing components into `src/pages/index.astro`
