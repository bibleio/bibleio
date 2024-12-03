import { bibleioTheme } from "@bibleio/design/src/tailwind";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "../../packages/design/src/components/**/*.{ts,tsx,astro}",
  ],
  presets: [bibleioTheme],
  darkMode: "class",
} satisfies Config;
