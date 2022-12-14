import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "^/ug": {
        target: "https://c.m.163.com/ug",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ug/, ""),
      },
    },
  },
});
