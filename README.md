![Banner](https://i.imgur.com/rd1kc35.png)

UI kit for Bibleio, including React components and Tailwind configuration with colour styles.

Built with Radix Primitives, and Tailwind CSS.

See the [Figma file](https://www.figma.com/community/file/1398417551065522372/bibleio-design-kit) for design documentation.

Report issues or suggestions in this GitHub repo or in the [Discord](https://discord.gg/7eVCyQ5GGb).

Includes:

- Badge
- Brand (Bibleio logos)
- Button
- Checkbox
- Input
- Input OTP
- List Item & Collapsible variant
- Loader
- Progress
- Radio Group
- Select
- Slider
- Switch
- Tabs
- Tooltip
- Text and colour styles + dark mode

To do:

- Documentation at `dev.bibleio.com/design/docs`
- More components (dialogs, notes, etc.)

# Installation

Install the module:

```bash
# pnpm
pnpm add @bibleio/design
# yarn
yarn add @bibleio/design
# npm
npm install @bibleio/design
```

Add Tailwind style preset:

```ts
// tailwind.config.ts
// Snippet of what to add
import { tailwindCore } from '@bibleio/design'; // Add import

const config: Config = {
  presets: [tailwindCore], // Add preset
};
```

Import main styles in your main layout:

```tsx
import '@bibleio/design/dist/index.css'; // Import styles
```

## Setup fonts

We use Lora for our main font.

Here are guides to setup fonts based on your framework.

### Next.js (plus JetBrains Mono)

Skip to the next section if you don't need JetBrains Mono.

Import Google fonts in `layout.tsx`:

```tsx
import { Lora, JetBrains_Mono } from 'next/font/google'; // Import fonts

const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});
```

Set css variables in your main body layout:

```html
<body className="{`${lora.variable}" ${jetBrainsMono.variable}`}></body>
```

In `tailwind.config.ts` override the default font theme to add variables:

```ts
import defaultTheme from 'tailwindcss/defaultTheme'; // Add default theme import

const config: Config = {
  presets: [tailwindCore],
  theme: {
    fontFamily: {
      serif: ['var(--font-lora)', ...defaultTheme.fontFamily.serif],
      mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],
    },
  },
};
```

### Next.js (just Lora)

Import Google fonts in `layout.tsx`:

```tsx
import { Lora } from 'next/font/google'; // Import fonts

const lora = Lora({ subsets: ['latin'] });
```

Set main font as Lora in your main layout (layout.tsx):

```html
<body className="{`${lora.classname}`}"></body>
```

### Astro / Any other framework that supports Fontsource

**Feel free to get rid of JetBrains Mono if you don't plan on using it.**

Install Fontsource fonts:

```bash
# pnpm
pnpm add @fontsource-variable/lora
pnpm add @fontsource-variable/jetbrains-mono
# yarn
yarn add @fontsource-variable/lora
yarn add @fontsource-variable/jetbrains-mono
# npm
npm install @fontsource-variable/lora
npm install @fontsource-variable/jetbrains-mono
```

Import in your main layout (Astro as an example):

```astro
---
// Layout.astro
import "@fontsource-variable/lora";
import "@fontsource-variable/jetbrains-mono";
---
```

No extra Tailwind config is needed for Fontsource.

# Tailwind

Each material, colour, and shadow has a light and a dark variant. To implement dark mode, you have to add `dark:` that has the dark material variant. This is tedious, and we hope to implement a better solution soon.

The spacing system is literal, so `p-32` means exactly `32px`.

# Development

This project uses Storybook for developing components and tsup for building.

Start up Storybook with `pnpm storybook`.

Build the output to `dist` using `pnpm build`.


# Contributing / License

Feel free to contribute documentation, components, etc. **Note** - we plan on moving docs to `docs.bibleio.com/docs/design` very soon.

All of Bibleio's projects are licensed under the [MIT No Attribution](LICENSE.txt) license. You can copy, translate, modify, and distribute this resource, without restriction, and without needing to ask permission. Why? For the sake of the gospel (Matt 10:8).

Check out why you should do the same by clicking this:

[<img src="https://copy.church/badges/lcc_alt_pde.png" alt="Freely given, no conditions!" width="300"/>](https://copy.church/explain/importance/)
