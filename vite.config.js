import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Define aliases for cleaner imports
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  // Vite's test configuration for Jest
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },

  // Server configuration
  server: {
    open: true,
    port: 3000,
  },

  // Build options
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
