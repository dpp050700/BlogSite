// const http = require('http')
// const fs = require('fs')
//
// function startHttp() {
//     http
//         .createServer((request, response) => {
//
//             response.writeHead(200, {
//                 'Content-type': 'text/html',
//                 'Content-length': '8'
//             })
//             response.end('helloWorld')
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

            response.writeHead(200, {
                'Content-type': 'text/html;charset=utf8',
                'Content-length': '8',
                'Transfer-Encoding': 'chunked'
            })
            response.write('hello, world')

            setTimeout(() => {
                response.write("<br/>你好，世界");
            }, 1000);

            setTimeout(() => {
                response.write("<br/>안녕, 세상.");
            }, 2000);
        })
        .listen(8888)
}

module.exports = startHttp