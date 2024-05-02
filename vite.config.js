// vite.config.js
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@mui/material": resolve(__dirname, "node_modules", "@mui", "material"),
      "@mui/system": resolve(__dirname, "node_modules", "@mui", "system"),
      "@mui/styled-engine": resolve(
        __dirname,
        "node_modules",
        "@mui",
        "styled-engine"
      ),
      "@mui/icons-material": resolve(
        __dirname,
        "node_modules",
        "@mui",
        "icons-material"
      ),
    },
  },
});
