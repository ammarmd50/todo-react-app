import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // http: true,
    proxy: {
      "/api": {
        target: "https://todo-app-backend-kpbt.onrender.com", // your backend
        changeOrigin: true,
        secure: false,
        sameSite: "none",
      },
    },
  },
});
