const http = require('http')
const fs = require('fs')
const crypto = require('crypto')

const path = require('path')

function getContentHash(){
  const dataPath = path.resolve(__dirname, 'data.json')
  let buffer = fs.readFileSync(dataPath)
  let hash = crypto.createHash('md5')
  hash.update(buffer)
  return  hash.digest('hex')
  // const data = fs.statSync(dataPath)
  // return Date.parse(data.mtime)/1000 + ''
}

function startHttp(mkdirPath) {
  http
    .createServer((request, response) => {
      const html = fs.readFileSync(`${mkdirPath}/index.html`)

      const dataPath = path.resolve(__dirname, 'data.json')

      const data = fs.readFileSync(dataPath)

      const url = request.url

      if (url === '/getData') {

        const ifMatch = request.headers['if-none-match']

        if(ifMatch === getContentHash()) {
          response.writeHead(304, {
            'Content-type': 'text/plain',
            'cache-control': 'no-cache',
            'Etag': getContentHash(),
          })
          response.end('命中缓存')
        } else {
          response.writeHead(200, {
            'Content-type': 'text/plain',
            'Cache-Control': 'no-cache',
            'Etag': getContentHash()

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
