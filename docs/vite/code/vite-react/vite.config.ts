import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";
const resolve = path.resolve
import autoprefixer from 'autoprefixer'
import windi from "vite-plugin-windicss";
import eslint from "vite-plugin-eslint"
import viteStylelint from 'vite-plugin-stylelint';
const variableScssPath = normalizePath(resolve(__dirname, './src/styles/variable.scss'))

import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    windi(),
    eslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: ['node_modules', 'windicss']
    }),
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9],
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ],
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
    postcss: {
      // 插件数组
      plugins: [
        autoprefixer({
          // autoprefixer 配置参数
        })
      ]
    }
  },
  build: {
    assetsInlineLimit: 8 * 1024 // 8kb
  }
})
