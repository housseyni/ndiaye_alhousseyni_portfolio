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
  // Public folder is used to serve static files that don’t need to be processed by Astro. This can include anything in the `public` directory, such as images, fonts, or other assets.
  public: {
    src: ["public"],
  },
  
}); 

