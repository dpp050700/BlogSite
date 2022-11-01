import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
const resolve = path.resolve

export default defineConfig({
  plugins: [react()],
  // publicDir: 'publicDir',
  root: './',
  base: './',
  // base: 'http://www.cijianshaonian.com/',
  // base: '/test/',
  mode: 'development',
  build: {
    outDir: 'ddd',
  },
  resolve: {
    // alias: [{
    //   find: '@',
    //   replacement: resolve(__dirname, 'src')
    // }]
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  json: {
    namedExports: true
  }

})
