import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portofolio/', // GitHub Pages repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 3000,        // Your preferred port
    open: true,        // Automatically open browser
    host: true,        // Allow external connections
    middlewareMode: false,
    // Add middleware to handle direct access to files
    configureServer(server) {
      server.middlewares.use('/resume.pdf', (req, res, next) => {
        res.writeHead(301, { Location: '/Portofolio/resume.pdf' });
        res.end();
      });
    }
  }
}) 