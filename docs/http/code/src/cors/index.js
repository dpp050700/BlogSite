
const http = require('http')
const fs = require('fs')

function startHttp() {
  http
    .createServer((request, response) => {

      response.writeHead(200, {
        'Access-Control-Allow-Origin': '*', // 允许所有源的请求跨域，这样做不安全
        // 'Access-Control-Allow-Origin': 'http://127.0.0.1:8888', // 指定固定源的请求允许跨域
        'Access-Control-Allow-headers': 'X-Test-Cors', // 允许自定义头跨域
        'Access-Control-Allow-Methods': 'POST,PUT,Delete,GET',
        'Access-Control-Max-Age': '10' // 10s 内再次发起请求不需要预请求
      })

      response.end('123')
    })
    .listen(8888)
}

module.exports = startHttp
