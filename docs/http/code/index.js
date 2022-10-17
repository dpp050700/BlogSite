const path = require('path')
const fs = require('fs-extra')

const moduleName = process.env.npm_config_name

function start() {
    const target = path.resolve('./src/', moduleName, 'index.js')
    if(!fs.pathExistsSync(target)) {
        throw  new Error(`${moduleName} 不存在`)
    }
    const module = require(target)

    module()
}

start()