const http = require('http')
const fs = require('fs')

function getBigData() {
    let str = ''
    for (let i = 0; i < 40000; i++) {
        str = str + '是客户反馈激发科技国防科技克拉我看见饿哭了今日份考古发掘口味啊接口'
    }
    return `console.log("${str}")`
}

function startHttp() {
  http
    .createServer((request, response) => {
      const html = fs.readFileSync('./src/cache/max-age/index.html')

      const url = request.url

      if (url === '/getData') {
        response.writeHead(200, {
          'Content-type': 'text/plain',
          'Cache-Control': 'max-age=20' // 客户端缓存，不经过服务端验证
        })
        response.end(getBigData())
      } else {
        response.writeHead(200, {
          'Content-type': 'text/html'
        })
        response.end(html)
      }
    })
    .listen(8888)
}

module.exports = startHttp
