import { defineConfig } from 'vite';

export default defineConfig({
  mode: 'development',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [],
  server: {
    port: 3000,
  },
});
