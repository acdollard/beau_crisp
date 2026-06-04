// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [tailwind()],

  vite: {
    build: {
      target: "esnext",
    },
    server: {
      fs: {
        allow: [".."],
      },
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    },
    optimizeDeps: {
      include: ["@sanity/client"],
    },
  },
});
