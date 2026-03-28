import { withMermaid } from "vitepress-plugin-mermaid";
import UnoCSS from "unocss/vite";
import {
  presetIcons,
  presetWind3,
  presetAttributify,
  transformerDirectives,
} from "unocss";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Site Title",
  description: "This is a random website.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Posts",
        items: [
          {
            text: "Markdown Examples",
            link: "/posts/markdown-examples",
          },
          // Add more posts here
        ],
      }
      // Add more sidebar items here
    ],
  },
  vite: {
    plugins: [
      UnoCSS({
        inspector: false,
        presets: [presetWind3(), presetAttributify(), presetIcons()],
        transformers: [transformerDirectives()],
      }),
    ],
  },
  markdown: {
    theme: "light-plus",
    math: true,
    languages: [],
  },
  appearance: false,
  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    ["link", { rel: "icon", href: "/favicon-dark.svg", media: "(prefers-color-scheme: dark)" }],
    ["link", { rel: "icon", href: "/favicon.svg", media: "(prefers-color-scheme: light)" }],
  ],
});
