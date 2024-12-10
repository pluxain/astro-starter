// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import paraglide from "@inlang/paraglide-astro";

// https://astro.build/config
export default defineConfig({
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
    tailwind(),
  ],
  site: "https://website.com",
});
