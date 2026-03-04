---
name: unlighthouse-skilld
description: "ALWAYS use when writing code importing \"unlighthouse\". Consult for debugging, best practices, or modifying unlighthouse."
metadata:
  version: 0.17.7
  generated_by: Claude Code · Opus 4.6
  generated_at: 2026-03-04
---

# harlan-zw/unlighthouse `unlighthouse`

**Version:** 0.17.7 (Mar 2026)
**Deps:** @unlighthouse/cli@0.17.7, @unlighthouse/client@0.17.7, @unlighthouse/core@0.17.7
**Tags:** latest: 0.17.7 (Mar 2026)

**References:** [package.json](./.skilld/pkg/package.json) — exports, entry points • [README](./.skilld/pkg/README.md) — setup, basic usage • [Docs](./.skilld/docs/_INDEX.md) — API reference, guides • [GitHub Issues](./.skilld/issues/_INDEX.md) — bugs, workarounds, edge cases • [GitHub Discussions](./.skilld/discussions/_INDEX.md) — Q&A, patterns, recipes • [Releases](./.skilld/releases/_INDEX.md) — changelog, breaking changes, new APIs

## Search

Use `skilld search` instead of grepping `.skilld/` directories — hybrid semantic + keyword search across all indexed docs, issues, and releases. If `skilld` is unavailable, use `npx -y skilld search`.

```bash
skilld search "query" -p unlighthouse
skilld search "issues:error handling" -p unlighthouse
skilld search "releases:deprecated" -p unlighthouse
```

Filters: `docs:`, `issues:`, `releases:` prefix narrows by source type.

## API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

- NEW: `defineUnlighthouseConfig()` — v0.16.0 added a typed config helper, replacing raw `defineConfig()` which had broken types. Import from `unlighthouse/config`, not `unlighthouse`. LLMs trained on older data may suggest `defineConfig` or the wrong import path [source](./.skilld/releases/v0.16.0.md#features)

- BREAKING: `defineConfig()` types — v0.16.0 fixed broken types with `defineConfig`. The old `defineConfig` export had incorrect typings; `defineUnlighthouseConfig()` is now the canonical replacement [source](./.skilld/releases/v0.16.0.md#bug-fixes)

- NEW: `userAgent` config option — v0.14.0 added top-level `userAgent` config to set a custom user agent for all requests (Axios and Puppeteer). Prior versions had no built-in way to override user agent [source](./.skilld/releases/v0.14.0.md#features)

- NEW: Async function support in `unlighthouse.config.ts` — v0.15.0 added support for async config functions, enabling `defineUnlighthouseConfig(async () => { ... })` for dynamic configuration [source](./.skilld/releases/v0.15.0.md#features)

- BREAKING: `scanner.ignoreI18nPages` cross-origin interaction — v0.17.0 fixed a bug where `ignoreI18nPages` was incorrectly applied when cross-origin default is set for `/`. The option is now automatically disabled in that scenario, changing scanning behavior for i18n sites [source](./.skilld/releases/v0.17.0.md#bug-fixes)

- DEPRECATED: `@unlighthouse/nuxt` — build tool integration deprecated, will be removed in v1.0. Use `@unlighthouse/cli` or CI integration instead. LLMs may still suggest adding `@unlighthouse/nuxt` as a Nuxt module [source](./.skilld/docs/integration-deprecations.md:L13:L17)

- DEPRECATED: `@unlighthouse/vite` — build tool integration deprecated, will be removed in v1.0. Use CLI instead. LLMs may suggest importing `Unlighthouse from '@unlighthouse/vite'` in `vite.config.ts` [source](./.skilld/docs/integration-deprecations.md:L13:L17)

- DEPRECATED: `@unlighthouse/webpack` — build tool integration deprecated, will be removed in v1.0. Use CLI instead [source](./.skilld/docs/integration-deprecations.md:L13:L17)

- BREAKING: `/config` subpath export — v0.17.2 fixed a broken `/config` subpath export from the `unlighthouse` package. Before this fix, `import { defineUnlighthouseConfig } from 'unlighthouse/config'` could fail at runtime [source](./.skilld/releases/v0.17.2.md#bug-fixes)

- BREAKING: `--config-file` CLI flag — v0.17.5 fixed a bug where `--config-file` was not always respected. Before this fix, custom config file paths could be silently ignored [source](./.skilld/releases/v0.17.5.md#bug-fixes)

- NEW: Modern CLI progress UI — v0.17.0 replaced the old CLI output with a modern interactive progress display using `@clack/prompts` [source](./.skilld/releases/v0.17.0.md#features)

- BREAKING: Type exports — v0.16.1 fixed broken type exports that were introduced in v0.16.0. Code using TypeScript types from `@unlighthouse/core` may have failed between v0.16.0 and v0.16.1 [source](./.skilld/releases/v0.16.1.md#bug-fixes)

- BREAKING: Chrome auto-download fallback — v0.15.0 added automatic Chrome download when no local Chrome paths exist. Previously, scans would fail with a cryptic error if Chrome was not installed [source](./.skilld/releases/v0.15.0.md#bug-fixes)

- BREAKING: Auto-disable sandbox as root — v0.17.5 automatically disables Chromium sandbox when running as root (e.g., Docker). Previously required manual `--no-sandbox` configuration [source](./.skilld/releases/v0.17.5.md#bug-fixes)

**Also changed:** FID deprecated in client UI, warns about INP replacement v0.13.5 · `radix3` now explicit dependency v0.15.0 · corrupt cached reports handled gracefully v0.15.0 · WSL2/Docker support improved v0.15.0 · query strings now respected in URL matching v0.14.0 · false positive redirect warnings for trailing slashes fixed v0.14.0 · max CPU core limit enforced v0.17.0 · infinite requeuing on path failure prevented v0.17.0

## Best Practices

- Wrap config in `defineUnlighthouseConfig()` imported from `unlighthouse/config` for type inference and dynamic config support (accepts a function returning config for environment-based switching) [source](./.skilld/docs/1.guide/guides/0.config.md:L28-L36)

- For CI accuracy, combine `samples: 3-5`, `throttle: true`, and `maxConcurrency: 1` together -- using samples alone without reducing concurrency still produces inconsistent scores due to CPU contention between parallel Chrome instances [source](./.skilld/docs/1.guide/recipes/improving-accuracy.md#recommended-production-config)

- When a sitemap contains over 50 paths, the crawler is automatically disabled to avoid redundant discovery -- if you need both sitemap and crawl-based discovery on large sites, explicitly set `scanner.crawler: true` to override [source](./.skilld/docs/1.guide/guides/url-discovery.md:L56-L57)

- Use `scanner.dynamicSampling` (default: 5) to cap scans per URL group on sites with many similar pages (blogs, products) -- set it to `false` only when route definitions are unavailable and the automatic grouping produces poor results [source](./.skilld/docs/1.guide/guides/dynamic-sampling.md#disable-dynamic-sampling)

- For SPAs (React/Vue/Angular), set `scanner.skipJavascript: false` -- the default is `true` which skips JS execution, causing the crawler to miss client-side routes and producing inaccurate scores on JS-rendered content [source](./.skilld/docs/1.guide/recipes/spa.md#enable-javascript-execution)

- When auth tokens don't persist between page scans, set `lighthouseOptions.disableStorageReset: true` alongside `puppeteerOptions.userDataDir` -- Lighthouse clears storage between pages by default, which drops session cookies and localStorage tokens [source](./.skilld/docs/1.guide/guides/authentication.md#auth-not-sticking)

- Use the `hooks.authenticate` callback for complex login flows instead of static cookies -- it runs Puppeteer commands once before scanning starts and the session persists for all subsequent pages automatically [source](./.skilld/docs/1.guide/guides/authentication.md#programmatic-login-complex-flows)

- In Docker environments, always pass `--no-sandbox` and `--disable-setuid-sandbox` via `puppeteerOptions.args`, and prefer `unlighthouse-ci` over the standard `unlighthouse` binary -- the standard binary starts an interactive server that has no known Docker support [source](./.skilld/docs/1.guide/guides/docker.md#unlighthouse-config)

- Use the `puppeteer:before-goto` hook (not `authenticate`) for per-page setup like injecting localStorage tokens via `page.evaluateOnNewDocument()` -- the `authenticate` hook runs only once at startup, while `before-goto` fires before every page navigation [source](./.skilld/docs/1.guide/guides/puppeteer.md#before-page-load)

- Build tool integrations (`@unlighthouse/nuxt`, `@unlighthouse/vite`, `@unlighthouse/webpack`) are deprecated and will be removed in v1.0 -- migrate to the CLI (`npx unlighthouse --site localhost:3000`) which covers all use cases including route discovery from a project with a `pages` directory [source](./.skilld/docs/integration-deprecations.md#why-deprecate)
