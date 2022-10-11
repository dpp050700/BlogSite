
function curry(...args) {
    const _args = [...args]
    let fn = function (){
        _args.push(...arguments)
        return fn
    }
    fn.valueOf = function (){
        return _args.reduce((prev, current) => {
            return prev + current
        }, 0)
    }
    return fn
}

console.log(curry(2,3)(4).valueOf())
console.log(curry(1)(2)(3).valueOf())