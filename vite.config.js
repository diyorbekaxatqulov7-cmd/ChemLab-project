import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ChemLab - Vite konfiguratsiyasi
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
