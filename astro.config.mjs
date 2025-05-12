// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";
import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
  site: "https://neonmint.efeele.dev",

  experimental: {
    session: true, // Habilitar la funcionalidad experimental de sesiones
  },

  integrations: [preact(), icon(), sitemap({
    filter: (page) =>
      !page.includes("/blog/tags") &&
      !page.includes("/blog/techs"),
  }),],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },

  adapter: netlify({
    edgeMiddleware: true
  }),
});