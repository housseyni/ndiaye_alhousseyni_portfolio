import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://housseyni.github.io",
  sitemap: {
    hostname: "https://housseyni.github.io",
  },
  build: {
    outDir: "dist",
  },
  pages: {
    src: "src/pages/**/*.astro",
  },
  public: {
    src: ["public"],
  },
  projectRoot: ".",
  // Définir la base à la racine du domaine
  base: "/",
});
