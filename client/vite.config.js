import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@scenes": path.resolve(__dirname, "./src/scenes"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@state": path.resolve(__dirname, "./src/state"),
    },
  },
});
