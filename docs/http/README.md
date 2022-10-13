---
sidebar: auto
---

# 前言

### HTTP 是什么？ 
简单的说 HTTP 是超文本传输协议。所谓**超文本**，就是"超越了普通文本的文本"，他是文字、图片、音频和视频等的混合体，最关键的是含有超链接。我们熟知的 HTML 就是一种"超文本"。传输就是计算机之间传输数据的约定和规范。协议是指使用计算机能够理解的语言确立的的一种计算机之间交流通信的规范，以及相关的各种控制和错误的处理方式。
总结来说，`HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范。`

### TCP/IP 协议



### HTTPS
私钥  服务器通过私钥解密公钥加密过后的数据
公钥  放在互联网上，用来加密传输的数据


### Nginx

```shell
// 查看 nginx 安装目录
weheris nginx

// 启动 nginx
systemctl start nginx

// 停止 nginx
systemctl stop nginx

// 启动 nginx
systemctl reload nginx

// 强制重启 nginx
systemctl restart nginx

// 设置开机启动 nginx
systemctl enable nginx

// 查询 nginx 状态
systemctl status nginx

// 代理缓存       存放目录  是否创建二级文件夹   10m 缓存大小
proxy_cache_path cache levels=1:2 keys_zone=my_cache:10m
// 使用代理缓存的时候 往往需要和 response header  Vary 一起使用

server {
  listen    80;
  server_name test.com;
  
  location / {
    proxy_cache my_cache; // 使用代理缓存
    proxy_pass http://127.0.0.1:8888; // 表示所有的请求都代理到这个地方
    proxy_set_header Host $host;
  }
}

```
