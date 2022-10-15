/**
 * 实现数组的乱序方法
 */

function getRandom(max) {
    return Math.floor(Math.random() * max)
}

function shuffle(arr = []) {
    if(!Array.isArray(arr)) {
        throw new Error(`arr must be array`)
    }
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i]
        result.push(current)
        if(i > 0) {
            let index = getRandom(i)
            let data = result[index]
            result[index] = current
            result[i] = data
        }
    }
    return result
}

let res = shuffle([1,2,3,4,5,6,7])

console.log(res)