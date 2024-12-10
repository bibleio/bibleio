// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import yeskunallumami from "@yeskunall/astro-umami";

import sitemap from "@astrojs/sitemap";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
	site: "https://www.bibleio.com",
	integrations: [
		preact({ compat: true }),
		tailwind(),
		yeskunallumami({
			id: "3f919d73-0804-4662-b4c6-43e1551fe508",
			endpointUrl: "https://umami.cool.duckyhq.com",
		}),
		sitemap(),
	],
	devToolbar: {
		enabled: false,
	},
});
