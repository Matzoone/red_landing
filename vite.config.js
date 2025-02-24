import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import sri from "vite-plugin-sri";

export default defineConfig({
  plugins: [react(), svgr(), sri({ integrityAlgorithm: "sha384" })],
  server: {
    host: true,
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
    },
    headers: {
      // محدود کردن منابعی که سایت می‌تواند بارگذاری کند
      "Content-Security-Policy":
        "default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; font-src 'self' http://localhost:3000 data:; img-src 'self'; connect-src 'self';",

      // جلوگیری از حملات XSS
      "X-XSS-Protection": "1; mode=block",

      // غیرفعال کردن دسترسی‌های خطرناک مانند دوربین، میکروفون و ...
      // "Permissions-Policy":
      //   "accelerometer=(), ambient-light-sensor=(), autoplay=(), camera=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), speaker=(), sync-xhr=(), usb=(), vr=()",

      // جلوگیری از ارسال اطلاعات referrer به سایت‌های دیگر
      "Referrer-Policy": "no-referrer",
    },
  },
});
