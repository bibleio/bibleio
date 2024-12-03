import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  // Typography
  fontBase: '"Lora", "Lora Variable", serif',
  fontCode: "serif",

  brandTitle: "Bibleio Design",
  brandImage: "/storybook-brand-logo.png",
  brandTarget: "_blank",
  brandUrl: "https://dev.bibleio.com/design/docs",

  //
  colorPrimary: "#006197",
  colorSecondary: "#006197",

  // UI
  appBg: "#CCCCCC",
  appContentBg: "#DDDDDD",
  appPreviewBg: "#D4D4D4",
  appBorderColor: "#000000",
  appBorderRadius: 12,

  // Text colors
  textColor: "#000000",
  textInverseColor: "#000000",

  // Toolbar default and active colors
  barTextColor: "#000000",
  barSelectedColor: "#006197",
  barHoverColor: "#006197",
  barBg: "#D4D4D4",

  // Form colors
  inputBg: "#DDDDDD",
  inputBorder: "#000000",
  inputTextColor: "#000000",
  inputBorderRadius: 8,
});
