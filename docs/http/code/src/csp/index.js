
const http = require('http')
const fs = require('fs')

function startHttp(mkdirPath) {
  http
    .createServer((request, response) => {

      const html = fs.readFileSync(`${mkdirPath}/index.html`)

      if (url === '/') {
        response.writeHead(200, {
          'Content-type': 'text/html',
          'Content-Security-Policy': "default-src 'self'; form-action 'self'; report-uri /report" // 限制 form-action 提交的范围, report-uri 浏览器自动上报
          // 'Content-Security-Policy': "default-src 'self' https://shadow.zhaogangimg.com/" // 只能加载本域名下的  或者指定域名
          // 'Content-Security-Policy': 'default-src http: https:' // 声明只能通过外链的方式加载
        })
        response.end(html)
      } else {
        response.writeHead(200, {
          'Content-type': 'application/javascript'
        })
        response.end('console.log("loader")')
      }
    })
    .listen(8888)
}

module.exports = startHttp
