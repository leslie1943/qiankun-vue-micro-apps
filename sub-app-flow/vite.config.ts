import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
  base: "http://localhost:3002/",
  server: {
    port: 3002,
    cors: true,
    origin: "http://localhost:3002",
  },
  plugins: [
    vue(),
    qiankun("flow-graph", {
      useDevMode: true,
    }),
  ],
});
