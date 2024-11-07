import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
  base: "http://localhost:3001/",
  server: {
    port: 3001,
    cors: true,
    origin: "http://localhost:3001",
  },
  plugins: [
    vue(),
    qiankun("data-source", {
      useDevMode: true,
    }),
  ],
});
