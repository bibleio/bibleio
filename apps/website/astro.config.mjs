// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import yeskunallumami from "@yeskunall/astro-umami";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bibleio.com",
  integrations: [
    react(),
    tailwind(),
    yeskunallumami({
      // id: import.meta.env.UMAMI_SITE_ID,
      // endpointUrl: import.meta.env.UMAMI_ENDPOINT_URL,
      id: "3f919d73-0804-4662-b4c6-43e1551fe508",
      endpointUrl: "https://umami.cool.duckyhq.com",
    }),
    sitemap(),
  ],
  devToolbar: {
    enabled: false,
  },
});
