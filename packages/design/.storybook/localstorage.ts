import type { ThemeStorage } from "../src/ThemeProvider";

export const localThemeStorage: ThemeStorage = {
  saveTheme: ({ theme, color }) => {
    localStorage.setItem("theme", JSON.stringify({ theme, color }));
  },
  getTheme: () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const { theme, color } = JSON.parse(savedTheme);
      return { theme, color };
    }
    return { theme: "light", color: "gray" };
  },
};
