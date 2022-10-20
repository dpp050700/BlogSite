const http = require('http')
const fs = require('fs')

const path = require('path')

function getLastModify(){
  const dataPath = path.resolve(__dirname, 'data.json')
  const data = fs.statSync(dataPath)
  return Date.parse(data.mtime)/1000 + ''
}

function startHttp(mkdirPath) {
  http
    .createServer((request, response) => {
      const html = fs.readFileSync(`${mkdirPath}/index.html`)

      const dataPath = path.resolve(__dirname, 'data.json')

      const data = fs.readFileSync(dataPath)

      const url = request.url

      if (url === '/getData') {

        const ifModifiedSince = request.headers['if-modified-since']

        if(ifModifiedSince === getLastModify()) {
          response.writeHead(304, {
            'Content-type': 'text/plain',
            'cache-control': 'max-age=5,must-revalidate',
            'Last-Modified': getLastModify(),
          })
          response.end('命中缓存')
        } else {
          response.writeHead(200, {
            'Content-type': 'text/plain',
            'Cache-Control': 'max-age=5,must-revalidate',
            'Last-Modified': getLastModify()

          })
          response.end(data)
        }
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
