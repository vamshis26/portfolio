import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    // Inline assets up to 10KB as data URIs so all skill logos are bundled
    // into the JS (no per-logo network requests at runtime).
    assetsInlineLimit: 10240,
  },
})
