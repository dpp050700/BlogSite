const http = require('http')
const fs = require('fs')

function startHttp() {
    http
        .createServer((request, response) => {

            // const html = fs.readFileSync('./src/accept/index.html')
            const image = fs.readFileSync('./src/accept/test.jpeg')

            response.writeHead(200, {
                'Content-type': 'image/jpeg'
            })
            response.end(image)
        })
        .listen(8888)
}

module.exports = startHttp
