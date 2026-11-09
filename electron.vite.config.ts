import { defineConfig } from "electron-vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
export default defineConfig({
  main: { entry: "electron/main/index.ts" },
  preload: { input: { index: resolve("electron/preload/index.ts") } },
  renderer: { resolve: { alias: { "@": resolve("src") } }, plugins: [react()] },
});