// vite.config.js - Clean config (Tailwind works through PostCSS)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
