import { readdirSync } from "node:fs";
import { basename, resolve } from "node:path";
import { defineConfig } from "vite";

const projectPages = Object.fromEntries(
  readdirSync(resolve(import.meta.dirname, "assets"))
    .filter((file) => file.endsWith(".html"))
    .map((file) => [
      `project-${basename(file, ".html")}`,
      resolve(import.meta.dirname, "assets", file),
    ]),
);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        connect: resolve(import.meta.dirname, "connect/index.html"),
        ...projectPages,
      },
    },
  },
});
