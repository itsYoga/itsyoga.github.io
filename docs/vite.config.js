import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Use relative paths for GitHub Pages
  publicDir: 'public', // Copy public assets
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
