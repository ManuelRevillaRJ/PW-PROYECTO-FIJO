import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PW-PROYECTO-FIJO/",
  server: {
    // port: 3000,
    // proxy: {
    //   "/api": "http://localhost:3000",
    // },
  },
});
