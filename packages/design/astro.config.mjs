// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  devToolbar: {
    enabled: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
