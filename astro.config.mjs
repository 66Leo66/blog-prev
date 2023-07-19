import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

import remarkParse from "remark-parse";
import remarkMermaid from "remark-mermaidjs";
import torchlight from "remark-torchlight";
import remarkMath from "remark-math";

import rehypeKatex from "rehype-katex";
import "katex/contrib/mhchem";


import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
    vue(),
  ],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      remarkParse,
      remarkMermaid,
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
    rehypePlugins: [
      rehypeKatex
    ],
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
