## 前言
本文我们将介绍 Vite 一些常用的简单配置，更多复杂配置将会在后续的文章中一一介绍。

## root
- 类型：string
- 默认值：process.cwd()

项目根目录（index.html 文件所在的位置）。可以是一个绝对路径，或者一个相对于该配置文件本身`(vite.config.ts)`的相对路径。

## base
- 类型：string
- 默认值：/

开发或生产环境服务的公共基础路径。可以是一个绝对 URL 路径名、完整的 URL 地址、空字符串或 `./`

1. 绝对 URL 路径名

```js
// 设置 base 为一个 绝对 URL 路径名
export default defineConfig({
  // ...
  base: '/test/'
})
```
之后，我们查看打包之后的产物，可以发现资源引入的路径都发生来改变

![](../../images/vite-base-1.jpg)

2. 完整的 URL 地址

```js
// 设置 base 为一个 完整的 URL 地址
export default defineConfig({
  // ...
  base: 'http://www.cijianshaonian.com/'
})
```
之后，我们查看打包之后的产物，可以发现资源都是引入指定 `URL` 下的资源

![](../../images/vite-base-2.jpg)

3. 设置 base 为 `./`

```js
// 设置 base 为一个 完整的 URL 地址
export default defineConfig({
  // ...
  base: './'
})
```
之后，我们查看打包之后的产物，可以发现资源都是引入相对路径下的文件

![](../../images/vite-base-3.jpg)

## mode

## plugins

## publicDir

## resolve.alas

## resolve.extensions

## json.namedExports

## json.stringify

## esbuild

## envDir

## envPrefix