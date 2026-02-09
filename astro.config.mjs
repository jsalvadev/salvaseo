// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://salvaseo.com',
  output: 'server',

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      RESEND_API_KEY: {
        context: 'server',
        access: 'secret',
        type: 'string'
      },
      EMAIL_TO: {
        context: 'server',
        access: 'secret',
        type: 'string'
      },
      EMAIL_FROM: {
        context: 'server',
        access: 'secret',
        type: 'string'
      }
    }
  },

  integrations: [
    sitemap({
      filter: (page) => page === 'https://salvaseo.com/'
    }),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ]
});