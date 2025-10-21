// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: false, // 關閉底部工具列
  },

  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
