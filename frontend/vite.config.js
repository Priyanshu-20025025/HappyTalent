import viteImagemin from 'vite-plugin-imagemin'; // Change to default import
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Allows external access
    allowedHosts: 'all',
    cors: true, // Enables Cross-Origin Requests
  },
  plugins: [
    tailwindcss(),
    react(),
    viteImagemin({ // Use it directly as default import
      // Default configuration (you can customize these)
      gifsicle: { optimizationLevel: 7, interlaced: false },
      jpegtran: { progressive: true, arithmetic: false },
      optipng: { optimizationLevel: 7 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
      webp: { quality: 75 }, // Enable WebP conversion with default quality
    }),
  ],
})