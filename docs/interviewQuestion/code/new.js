
function Person(name) {
    this.name = name
}

let p1 = new Person('此间少年')

function myNew(fn, ...args){
    const obj = Object.create({})
    obj._proto_ = fn.prototype

    let res = fn.apply(obj, args)

    return typeof res === 'object' ? res || obj : obj
}

let p2 = myNew(Person, '此间少年')

console.log(p1.name)

console.log(p2.name)