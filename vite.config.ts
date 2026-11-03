import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // In locale il sito sta alla radice; su GitHub Pages la pubblicazione imposta BASE_PATH (es. /nome-repo/)
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
})
