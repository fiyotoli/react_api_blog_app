import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react_api_blog_app/', // Update to match your GitHub repository name
  build: {
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit (in KB)
  },
})
