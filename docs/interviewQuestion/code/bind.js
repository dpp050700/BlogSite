const object = {
    name: 'ZG',
    say(age,phone) {
        console.log(`my name is ${this.name},i am ${age} year old, my phone is ${phone}`)
    }
}

object.say('22',119) // 'hello,my name is 麻不烧,i am 12 year old'

const B = {
    name: 'DD'
}

const sayB = object.say.bind(B, 20)

sayB(110)


Function.prototype.myBind = function (target, ...args){
    target = target || {}
    const symbolKey = Symbol()
    target[symbolKey] = this
    return function (..._args){
        const res = target[symbolKey](...args, ..._args)
        return res
    }
}

const sayB2 = object.say.myBind(B, 20)

sayB2(114)