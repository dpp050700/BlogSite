const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

function startHttp() {
    http
        .createServer((request, response) => {

            const html = fs.readFileSync('./src/accept/index.html')

            const url = request.url

            if(url === '/form') {
                console.log(request.headers)
                response.writeHead(200, {
                    'Content-type': 'application/json',
                })
                let data = JSON.stringify({name: 111})
                response.end(data)
            } else {
                response.writeHead(200, {
                    'Content-type': 'text/html',
                    'Content-Encoding': 'gzip'
                })
                response.end(zlib.gzipSync(html))
            }
        })
        .listen(8888)
}

module.exports = startHttp
