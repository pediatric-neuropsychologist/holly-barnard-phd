import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://hollybarnardphd.com",
  publicDir: "public",
  integrations: [sitemap()],
});
