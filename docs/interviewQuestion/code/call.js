

const a = {
    name: 1,
    hello: function (age, phone){
        console.log(this.name, age, phone)
    }
}


a.hello.call({name: 'ZG'}, 16, 88888)


Function.prototype.myCall = function (target, ...args){
    target = target || window
    const symbolKey = Symbol()
    target[symbolKey] = this
    const res = target[symbolKey](...args)
    delete  target[symbolKey]
    return res
}

a.hello.myCall({name: 'ZG'}, 16, 88888)

