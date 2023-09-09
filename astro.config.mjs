import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import remarkParse from "remark-parse";
// import remarkMermaid from "remark-mermaidjs";
import torchlight from "remark-torchlight";
import remarkMath from "remark-math";
import rehypeFigure from "rehype-figure";
import rehypeKatex from "rehype-katex";
import "katex/contrib/mhchem";
import react from "@astrojs/react";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    react(),
    prefetch(),
  ],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      remarkParse,
      // remarkMermaid,
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
      [
        torchlight,
        {
          token: process.env.TORCHLIGHT_TOKEN,
          theme: "nord",
        },
      ],
      remarkMath,
    ],
    rehypePlugins: [rehypeFigure, rehypeKatex],
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    service: sharpImageService(),
  },
});
