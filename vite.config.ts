import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PW_G2_F/",
  server: {
    // port: 3000,
    // proxy: {
    //   "/api": "http://localhost:3000",
    // },
  },
});
