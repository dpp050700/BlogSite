
const http = require('http')
const fs = require('fs')

function startHttp() {
  http
    .createServer((request, response) => {

      const html = fs.readFileSync('./src/redirect/index.html')

      const url = request.url

      if(url === '/') {
        response.writeHead(301, {
          Location: '/index'
        })
        response.end('')
      } else if(url === '/index') {
        response.writeHead(200, {
          'Content-type': 'text/html'
        })
        response.end(html)
      } else {
        response.end(`other`)
      }
    })
    .listen(8888)
}

module.exports = startHttp
