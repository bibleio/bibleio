import { bibleioTheme } from "./src/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [bibleioTheme],
  darkMode: ["class", '[data-mode="dark"]'],
};
