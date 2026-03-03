// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

const TODAY = new Date().toISOString().split("T")[0];

// https://astro.build/config
export default defineConfig({
  site: "https://salvaseo.com",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) =>
        page === "https://salvaseo.com/" ||
        page === "https://salvaseo.com/posicionamiento-web-barcelona/" ||
        page === "https://salvaseo.com/seo-local-barcelona/" ||
        page === "https://salvaseo.com/presupuesto-seo-barcelona/",
      serialize: (item) => {
        item.lastmod = TODAY;
        return item;
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    }),
  ],
});
