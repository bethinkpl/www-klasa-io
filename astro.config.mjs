import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

export default defineConfig({
  site: 'https://klasa.io',
  integrations: [tailwind(), vue()],
	server: {
		port: 3005
	}
});
