// const http = require('http')
// const fs = require('fs')
//
// function startHttp() {
//     http
//         .createServer((request, response) => {
//
//             const html = fs.readFileSync('./src/accept/index.html')
//
//             response.writeHead(200, {
//                 'Content-type': 'text/plain'
//             })
//             response.end(html)
//         })
//         .listen(8888)
// }
//
// module.exports = startHttp


// const http = require('http')
// const fs = require('fs')
//
// function startHttp() {
//     http
//         .createServer((request, response) => {
//
//             const image = fs.readFileSync('./src/accept/test.jpeg')
//
//             response.writeHead(200, {
//                 'Content-type': 'image/jpeg'
//             })
//             response.end(image)
//         })
//         .listen(8888)
// }
//
// module.exports = startHttp


// const http = require('http')
// const fs = require('fs')
//
// function startHttp() {
//     http
//         .createServer((request, response) => {
//
//             response.writeHead(200, {
//                 'Content-type': 'application/json'
//             })
//             response.end(JSON.stringify({name: '此间少年'}))
//         })
//         .listen(8888)
// }
//
// module.exports = startHttp



const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

function startHttp() {
    http
        .createServer((request, response) => {

            const html = fs.readFileSync('./src/accept/index.html')

            response.writeHead(200, {
                'Content-type': 'text/html',
                'Content-Encoding': 'gzip'
            })
            response.end(zlib.gzipSync(html))
        })
        .listen(8888)
}

module.exports = startHttp