import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    }
  }

  if (command === 'serve') {
    // Development
    config.base = '/'
    config.server = {
      port: 3000,
      open: true,
      host: true
    }
  } else {
    // Production (GitHub Pages)
    config.base = '/Portofolio/'
  }

  return config
}) 