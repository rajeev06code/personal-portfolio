import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    allowedHosts: [
      "4847-2401-4900-3b3e-47e6-79cc-1ee7-95af-e643.ngrok-free.app",
    ],
  },
});
