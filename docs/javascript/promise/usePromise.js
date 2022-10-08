/**
 * promise 的基本用法
 */
let p1 = new Promise((resolve, reject) => {
    resolve('success')
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('2s 后 success')
    },2000)
})

p1.then((value) => {
    console.log(value)  //success
})

p2.then((value) => {
    console.log(value)  //2s 后 success
})

/**
 * then 方法的多次调用
 */
p1
.then((value)=> {console.log(value)})
.then(() => {console.log(1)})
.then(() => {console.log(2)})

/**
 * then 方法返回 普通值
 */
p1
.then((value)=> {
    console.log(value)
    return 'then 返回值 1'
})
.then((value) => {
    console.log(value)
    return 'then 返回值 2'
})
.then((value) => {
    console.log(value)
})

/**
 * then 方法返回 promise
 */
p1
.then((value)=> {
    console.log(value)
    return p2
})
.then((value) => {
    console.log(value, 11)
    return 'then 返回值 2'
})

/**
 * then 方法参数可选
 */
p1
.then()
.then()
.then(res => {
    console.log(res,222)
})
