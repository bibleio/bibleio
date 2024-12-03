import { bibleioTheme } from "@bibleio/design";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  presets: [bibleioTheme],
  darkMode: ["selector"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          from: { rotate: "0deg" },
          to: { rotate: "360deg" },
        },
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
    },
  },
};
