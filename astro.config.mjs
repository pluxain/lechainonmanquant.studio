// @ts-check
import paraglide from "@inlang/paraglide-astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),

  env: {
    schema: {
      LOG_LEVEL: envField.enum({
        access: "public",
        context: "server",
        default: "trace",
        values: ["debug", "error", "fatal", "info", "trace", "warn"],
      }),
    },
  },

  experimental: {
    svg: true,
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      fallbackType: "redirect",
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
    // tailwind({
    //   // Example: Disable injecting a basic `base.css` import on every page.
    //   // Useful if you need to define and/or import your own custom `base.css`.
    //   applyBaseStyles: false,

    //   // Example: Allow writing nested CSS declarations
    //   // alongside Tailwind's syntax
    //   nesting: true,
    // }),
  ],

  site: "https://lechainonmanquant.studio",

  vite: {
    plugins: [tailwindcss()],
  },
});
