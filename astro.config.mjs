// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// Tailwind se procesa vía PostCSS (ver postcss.config.mjs)
export default defineConfig({
  // Dominio público: se usa para URLs canónicas, Open Graph y el sitemap
  site: "https://www.caben.cl",
  integrations: [sitemap()],
});
