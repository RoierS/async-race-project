import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@services": path.resolve(__dirname, "./src/services"),
    },
  },
});
