import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'publicDir',
  root: './',
  base: './',
  // base: 'http://www.cijianshaonian.com/',
  // base: '/test/',
  mode: 'development',
  build: {
    outDir: 'ddd',
  }
})
