// const http = require('http')
// const fs = require('fs')
//
// function startHttp() {
//     http
//         .createServer((request, response) => {
//
//             const html = fs.readFileSync('./src/cookie/index.html')
//
//            const expiresTime = new Date()
//             expiresTime.setTime(expiresTime.getTime() + 10 * 1000)
//
//
//             response.writeHead(200, {
//                 'Content-type': 'text/html',
//                 // 'Set-Cookie': 'id=123'
//                 // 'Set-Cookie': ['id=123', 'address=shang_hai']
//                 'Set-Cookie': ['id=123;max-age=10', `address=shang_hai;expires=${expiresTime.toUTCString()}`]
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
//             const html = fs.readFileSync('./src/cookie/index.html')
//
//
//             const host = request.headers.host
//
//             if(host === 'httpstudy.com:8888') {
//                 response.writeHead(200, {
//                     'Content-type': 'text/html',
//                     'Set-Cookie': ['id=123', `address=shang_hai;domain=httpstudy.com`]
//                 })
//             }
//             response.end(html)
//         })
//         .listen(8888)
// }
//
// module.exports = startHttp


const http = require('http')
const fs = require('fs')

function startHttp() {
    http
        .createServer((request, response) => {

            const html = fs.readFileSync('./src/cookie/index.html')

            response.writeHead(200, {
                'Content-type': 'text/html',
                'Set-Cookie': ['id=123;Secure', `address=shang_hai;HttpOnly`]
            })
            response.end(html)
        })
        .listen(8888)
}

module.exports = startHttp
