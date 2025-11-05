// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: false, // 關閉底部工具列
  },

  integrations: [mdx()],
  markdown: {},
  trailingSlash: "never",
});
