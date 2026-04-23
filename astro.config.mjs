// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

const PAGE_LASTMOD = {
  "https://salvaseo.com/": "2026-04-21",
  "https://salvaseo.com/posicionamiento-web-barcelona/": "2026-04-21",
  "https://salvaseo.com/seo-local-barcelona/": "2026-04-21",
  "https://salvaseo.com/presupuesto-seo-barcelona/": "2026-04-21",
};

// https://astro.build/config
export default defineConfig({
  site: "https://salvaseo.com",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.names?.some((n) => n.endsWith(".css"))) {
              return "_astro/styles.[hash][extname]";
            }
            return "_astro/[name].[hash][extname]";
          },
        },
      },
    },
  },

  integrations: [
    sitemap({
      filter: (page) => page in PAGE_LASTMOD || page.includes('/blog/'),
      serialize: (item) => {
        item.lastmod = PAGE_LASTMOD[item.url] ?? new Date().toISOString().split('T')[0];
        return item;
      },
    }),
  ],
});
