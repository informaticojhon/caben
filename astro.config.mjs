// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Dominio público: se usa para URLs canónicas, Open Graph y el sitemap
  site: "https://www.caben.cl",
  integrations: [tailwind(), sitemap()],
  vite: {
    css: {
      postcss: {},
    },
  },
});
