import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    caseSensitive: true, // This will make Vite case-sensitive
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries - keep together
          if (id.includes('node_modules/react') ||
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/scheduler')) {
            return 'react-vendor';
          }

          // Routing
          if (id.includes('node_modules/react-router-dom')) {
            return 'router';
          }

          // Internationalization
          if (id.includes('node_modules/i18next') ||
              id.includes('node_modules/react-i18next') ||
              id.includes('node_modules/i18next-browser-languagedetector')) {
            return 'i18n';
          }

          // UI and styling libraries
          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/clsx')) {
            return 'ui';
          }

          // Animation and interaction libraries - don't separate from React
          if (id.includes('node_modules/swiper')) {
            return 'swiper';
          }

          if (id.includes('node_modules/aos')) {
            return 'aos';
          }

          // Email functionality
          if (id.includes('node_modules/@emailjs/browser') || id.includes('node_modules/emailjs')) {
            return 'email';
          }

          // Other vendor libraries
          if (id.includes('node_modules/')) {
            return 'vendor';
          }

          // Split pages into separate chunks for better lazy loading
          if (id.includes('src/pages/')) {
            const pageName = id.split('/').pop()?.replace('.jsx', '');
            return `page-${pageName}`;
          }

          // Split components by category
          if (id.includes('src/components/') && !id.includes('src/components/shared/')) {
            if (id.includes('HexHeadBolts') || id.includes('Nuts') || id.includes('Stud_Bolts')) {
              return 'product-components';
            }
            return 'common-components';
          }

          // Default chunk for other modules
          return undefined;
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
      },
    },
    chunkSizeWarningLimit: 800, // Increased from 500 to reduce warnings
    target: "esnext",
    sourcemap: false,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
