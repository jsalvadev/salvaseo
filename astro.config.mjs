// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

const PAGE_LASTMOD = {
  "https://salvaseo.com/": "2026-03-03",
  "https://salvaseo.com/posicionamiento-web-barcelona/": "2026-03-03",
  "https://salvaseo.com/seo-local-barcelona/": "2026-03-03",
  "https://salvaseo.com/presupuesto-seo-barcelona/": "2026-03-03",
};

// https://astro.build/config
export default defineConfig({
  site: "https://salvaseo.com",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => page in PAGE_LASTMOD,
      serialize: (item) => {
        item.lastmod = PAGE_LASTMOD[item.url] ?? item.url;
        return item;
      },
    }),
  ],
});
