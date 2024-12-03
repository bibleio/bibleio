import type { Preview } from "@storybook/react";
import React from "react";
import "@fontsource-variable/lora";
import "@fontsource-variable/lora/wght-italic.css";
import "@fontsource-variable/jetbrains-mono";
import "../src/index.css";
import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from "@storybook/addon-themes";
import { ThemeProvider } from "../src/ThemeProvider";
import BibleioTheme from "./bibleio-theme";
import { localThemeStorage } from "./localstorage";

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  (Story) => (
    <div className="bg p-32 font-serif">
      <Story />
    </div>
  ),
];

const preview: Preview = {
  parameters: {
    docs: {
      theme: BibleioTheme,
    },
    layout: ["centered"],
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#CCCCCC",
        },
        {
          name: "dark",
          value: "#1B1B1B",
        },
      ],
    },
  },
  decorators: decorators,
};

export default preview;
