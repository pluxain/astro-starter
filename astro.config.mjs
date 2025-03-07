import paraglide from "@inlang/paraglide-astro";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Change this back to ./dist, or remove when there is backen code
  outDir: "./dist/client",
  env: {
    schema: {
      LOG_LEVEL: envField.enum({
        context: "client",
        access: "public",
        default: "trace",
        optional: true,
        values: ["debug", "error", "fatal", "info", "trace", "warn"],
      }),
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
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
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://website.com",
});
