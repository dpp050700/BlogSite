const http = require('http')
const fs = require('fs')

function startHttp() {
  http
    .createServer((request, response) => {
      const html = fs.readFileSync('./src/cache/index.html')

      const img = fs.readFileSync('./src/cache/test.jpeg')

      const url = request.url

      if (url === '/test.jpeg') {
        response.writeHead(200, {
          'Content-type': 'image/jpeg',
          'Cache-Control': 'max-age=20' // 客户端缓存，不经过服务端验证
        })
        response.end(img)
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
