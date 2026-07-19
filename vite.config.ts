import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        connect: resolve(import.meta.dirname, "connect/index.html"),
      },
    },
  },
});
