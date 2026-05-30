import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// GitHub Pages: repository 이름이 homo-promptus일 때
const base = process.env.GITHUB_PAGES === "true" ? "/homo-promptus/" : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  publicDir: "public",
});
