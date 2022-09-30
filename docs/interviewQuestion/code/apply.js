

const a = {
    name: 1,
    hello: function (age, phone){
        console.log(this.name, age, phone)
    }
}


a.hello.apply({name: 'ZG'}, [16, 88888])


Function.prototype.myApply = function (target, args){
    target = target || window
    const symbolKey = Symbol()
    target[symbolKey] = this
    const res = target[symbolKey](...args)
    delete  target[symbolKey]
    return res
}

a.hello.myApply({name: 'ZG'}, [16, 88888])