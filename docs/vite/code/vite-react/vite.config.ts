import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
const resolve = path.resolve
import autoprefixer from 'autoprefixer'

const variableScssPath = normalizePath(resolve(__dirname, './src/styles/variable.scss'))

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  mode: 'development',
  css: {
    preprocessorOptions: {
      // 配置全局引入的 scss 文件
      scss: {
        additionalData: `@import "${variableScssPath}";`
      }
    },
    // 通过 generateScopedName 属性来对生成的类名进行自定义
    modules: {
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: "[name]__[local]__[hash:base64:5]"
    },
    // postcss: {
    //   // 插件数组
    //   plugins: [
    //     autoprefixer({
    //       // autoprefixer 配置参数
    //     })
    //   ]
    // }
  }
})
