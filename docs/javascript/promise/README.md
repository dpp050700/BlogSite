# Promise 的基本实现

## Promise 的基本用法

<<< @/docs/javascript/promise/usePromise.js

## 实现 Promise 功能的流程
1. 实现 Promise 的基本结构
2. 实现 executor 的自动执行
3. 定义 Promise 三种状态
4. 实现 resolve 和 reject 方法
5. 实现基本的 then 方法
6. 处理 Promise 中的异步逻辑
7. 实现 then 方法的多次调用
8. 实现 then 方法的链式调用，并处理 Promise 自返回的逻辑
9. 实现 then 方法的参数可选性
10. 实现静态方法 resolve、reject
11. 实现 catch、finally 方法
12. 实现静态方法 all、race、any、allSettled

### 1. 实现 基本的 Promise
我们先来看一下 Promise 的 基本用法:
```js
// 案例 1
let p = new Promise((resolve, reject) => {
    resolve('success')
})
p.then((value) => {
    console.log(value)
}, (e) => {
    console.log(e)
})
```
在上面的例子中，我们通过 new 关键字创建一个 Promise 对象。所以，我们自己实现 MyPromise 的时候可以通过 class 来创建一个类：
```js
class MyPromise {}
```

在创建 Promise 实例的时候我们传入了一个函数作为参数， 这个函数参数会自动执行，且函数接收resolve、reject两个函数作为参数。

```js
class MyPromise {
    constructor(executor) {
        executor((value) => {
            console.log('执行来 resolve 方法', value)
        }, (error) => {
            console.log('执行来 reject 方法', error)
        })
    }
}
```
我们知道 Promise 有三种状态，PENDING、REJECTED、FULFILLED，且三种状态之间是不可逆的。我们可以定义三个常量来表示 Promise 的三种状态，并个 MyPromise 类定义一个属性 status 来记录当前 Promise 的状态：

```js
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    status = PENDING
    constructor(executor) {
        executor((value) => {
            console.log('执行来 resolve 方法')
        }, (error) => {
            console.log('执行来 reject 方法')
        })
    }
}
```
当我们执行 resolve 或者 reject 的时候，首先需要判断当前 Promise 的状态是否为 PENDING，若不是则直接 return，否则将 Promise 的状态改为 FULFILLED 或 REJECTED，并记录下 resolve 或 reject 传入的参数。
```js
class MyPromise {
    status = PENDING
    value = undefined
    error = undefined
    constructor(executor) {
        executor((value) => {
            this.resolve(value)
        }, (error) => {
            this.reject(error)
        })
    }
    resolve(value){
        if(this.status !== PENDING) return
        this.status = FULFILLED
        this.value = value
    }

    reject(error){
        if(this.status !== PENDING) return
        this.status = REJECTED
        this.error = error
    }
}
```
Promise 实例有一个 then 方法，当调用 resolve 或 reject 之后，会执行 then 方法。then 方法接收两个参数：
- 一个是 onFulfilled 表示 “当状态为成功时”
- 另一个是 onRejected 表示 “当状态为拒绝时”
在 then 方法中，我们需要判断当前 Promise 的状态，若 status 为 FULFILLED，则执行 onFulfilled；若 status 为 REJECTED，则执行onRejected。

```js
class MyPromise {
    status = PENDING
    value = undefined
    error = undefined
    constructor(executor) {
        executor((value) => {
            this.resolve(value)
        }, (error) => {
            this.reject(error)
        })
    }
    resolve(value){
        if(this.status !== PENDING) return
        this.status = FULFILLED
        this.value = value
    }

    reject(error){
        if(this.status !== PENDING) return
        this.status = REJECTED
        this.error = error
    }

    then(onFulfilled, onRejected) {
        if(this.status === FULFILLED) {
            onFulfilled(this.value)
        }else if(this.status === REJECTED) {
            onRejected(this.error)
        }
    }
}
```
此时案例 1 中的功能我们已经实现完成了，但此时我们的 Promise 中还不能处理异步逻辑，我们看下面这个例子：
```js
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 2000)
})
p.then((value) => {
    console.log(value)
}, (e) => {
    console.log(e)
})
```
当代码执行到 p.then 的时候，setTimeout 中的 方法还未执行，此时 Promise 的状态是 PENDING，我们之前在 then 函数中并没有处理 status 为 PENDING 的情况。现在我们来补充这段逻辑。

首先，我们需要两个数组来保存成功和失败的回调，并在 status 为 PENDING 的时候将 onFulfilled 和 onRejected push 进数组，当调用 resolve 或者 reject 的时候再依次执行数组中的值：
```js
class MyPromise {
    status = PENDING
    value = undefined
    error = undefined
    onFulfilledCallbacks = []
    onRejectedCallbacks = []
    constructor(executor) {
        executor((value) => {
            this.resolve(value)
        }, (error) => {
            this.reject(error)
        })
    }
    resolve(value){
        if(this.status !== PENDING) return
        this.status = FULFILLED
        this.value = value
        while (this.onFulfilledCallbacks.length) this.onFulfilledCallbacks.shift()(this.value)
    }

    reject(error){
        if(this.status !== PENDING) return
        this.status = REJECTED
        this.error = error
        while (this.onRejectedCallbacks.length) this.onRejectedCallbacks.shift()(this.error)
    }

    then(onFulfilled, onRejected) {
        if(this.status === FULFILLED) {
            onFulfilled(this.value)
        }else if(this.status === REJECTED) {
            onRejected(this.error)
        } else {
            this.onFulfilledCallbacks.push(onFulfilled)
            this.onRejectedCallbacks.push(onRejected)
        }
    }
}
```
在使用 Promise 的时候，我们知道 then 方法是可以链式调用的。所以，then 方法应该要返回一个 Promise 对象。
我们可以对 then 方法进行改造：
```js
class MyPromise {
   //....
    then(onFulfilled, onRejected) {

        let promise = new MyPromise((resolve, reject) => {
            if(this.status === FULFILLED) {
                onFulfilled(this.value)
                resolve()
            }else if(this.status === REJECTED) {
                onRejected(this.error)
            } else {
                this.onFulfilledCallbacks.push(onFulfilled)
                this.onRejectedCallbacks.push(onRejected)
            }
        })
        return promise
    }
}
```
then 方法传入的 onFulfilled 和 onRejected 在调用的时候可以有返回值，并且返回值的类型可以是普通值或者 Promise 对象，当返回值是普通值的时候，我们可以直接调用下一个 then 方法并将返回值作为 then 方法成功回调的参数传入，当返回值是 Promise 对象的时候，我们需要等待 Promise 执行完成后再将调用下一个 then 方法。
```js
// 添加 resolvePromise
function resolvePromise(res, resolve, reject){
    if(res instanceof MyPromise) {
        res.then(resolve, reject)
    }else {
        resolve(res)
    }
}

class MyPromise {
    //....
    then(onFulfilled, onRejected) {

        let promise = new MyPromise((resolve, reject) => {
            if(this.status === FULFILLED) {
                let res = onFulfilled(this.value)
                resolvePromise(res, resolve, reject)
            }else if(this.status === REJECTED) {
                onRejected(this.error)
            } else {
                this.onFulfilledCallbacks.push(onFulfilled)
                this.onRejectedCallbacks.push(onRejected)
            }
        })

        return promise
    }
}
```
这里还有一点要处理一下，如果 then 方法中回调函数返回的是自身的 Promise 需要抛出异常，例如以下代码：
```js
let p1 = new Promise((resolve, reject) => {
    resolve('success')
})

let p2 = p1.then((value) => {
    // onFulfilled 中返回了 p1.then 返回的 Promise p2
    return p2
}, (e) => {
    console.log(e)
})
```
所以，在 resolvePromise 中我们要传入 then 方法返回的 promise，并和 res 做对比，如果两者相同，需要抛出异常。
```js
function resolvePromise(promise, res, resolve, reject){
    if (promise === res) {
        reject(new TypeError("Chaining cycle detected for promise #<MyPromise>"));
        return;
    }
    if(res instanceof MyPromise) {
        res.then(resolve, reject)
    }else {
        resolve(res)
    }
}

class MyPromise {
    //....
    then(onFulfilled, onRejected) {

        let promise = new MyPromise((resolve, reject) => {
            if(this.status === FULFILLED) {
                setTimeout(() => {
                    let res = onFulfilled(this.value)
                    resolvePromise(promise, res, resolve, reject)
                }, 0)
            }else if(this.status === REJECTED) {
                onRejected(this.error)
            } else {
                this.onFulfilledCallbacks.push(onFulfilled)
                this.onRejectedCallbacks.push(onRejected)
            }
        })

        return promise
    }
}
```
现在，我们已经将 status 为 FULFILLED 时的逻辑处理好了，接下来我们依葫芦画瓢来完成 REJECTED 和 PENDING 状态下的逻辑，并加上异常处理。
```js
class MyPromise {
    //....
    then(onFulfilled, onRejected) {

        let promise = new MyPromise((resolve, reject) => {
            if(this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let res = onFulfilled(this.value)
                        resolvePromise(promise, res, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }else if(this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let res = onRejected(this.error)
                        resolvePromise(promise, res, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            } else {
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let res = onFulfilled(this.value)
                            resolvePromise(promise, res, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let res = onRejected(this.error)
                            resolvePromise(promise, res, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        })

        return promise
    }
}
```
上面的代码已经能实现基本的功能了，但是看这个代码总觉得有点不爽，里面有很多重复的地方，我们来看看该如何优化它。
```js
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function resolvePromise(promise, res, resolve, reject){
    if (promise === res) {
        reject(new TypeError("Chaining cycle detected for promise #<MyPromise>"));
        return;
    }
    if(res instanceof MyPromise) {
        res.then(resolve, reject)
    }else {
        resolve(res)
    }
}

function asyncFunc(fn, time = 0) {
    setTimeout(() => {
        fn()
    }, 0)
}

class MyPromise {
    status = PENDING
    value = undefined
    error = undefined
    onFulfilledCallbacks = []
    onRejectedCallbacks = []
    constructor(executor) {
        executor((value) => {
            this.resolve(value)
        }, (error) => {
            this.reject(error)
        })
    }
    resolve(value){
        if(this.status !== PENDING) return
        this.status = FULFILLED
        this.value = value
        while (this.onFulfilledCallbacks.length) this.onFulfilledCallbacks.shift()(this.value)
    }

    reject(error){
        if(this.status !== PENDING) return
        this.status = REJECTED
        this.error = error
        while (this.onRejectedCallbacks.length) this.onRejectedCallbacks.shift()(this.error)
    }

    then(onFulfilled, onRejected) {

        let promise = new MyPromise((resolve, reject) => {

            const execFn = (fn, value) => {
                try {
                    let res = fn(value)
                    resolvePromise(promise, res, resolve,reject)
                }catch (e) {
                    reject(e)
                }
            }

            const execFulfilled = () => execFn(onFulfilled, this.value)

            const execRejected = () => execFn(onRejected, this.error)

            if(this.status === PENDING) {
                this.onRejectedCallbacks.push(execRejected)
                this.onFulfilledCallbacks.push(execFulfilled)
                return
            }
            asyncFunc(() => {
                if(this.status === FULFILLED) {
                    execFulfilled()
                } else {
                    execRejected()
                }
            })
        })

        return promise
    }
}
```
then 方法在调用的时候参数是可选的，所以，在 then 方法内部需要先判断是否正确传入 onFulfilled 和 onRejected，如果没有，需要给默认值
```js
class MyPromise {
    // ....
    then(onFulfilled, onRejected) {

        onFulfilled =
            typeof onFulfilled == "function" ? onFulfilled : (v) => v;

        onRejected =
            typeof onRejected == "function"
                ? onRejected
                : (reason) => {
                    throw reason;
                };
        // ...
    }
}
```

### 2. 实现 Promise.resolve

Promise.resolve(value) 将给定的一个值转为Promise对象。
- 如果这个值是一个 promise ，那么将返回这个 promise
- 如果这个值是thenable（即带有"then" 方法），返回的 promise 会“跟随”这个thenable的对象，采用它的最终状态
- 否则返回的 promise 将以此值完成，即以此值执行 resolve() 方法 (状态为fulfilled)

```js
class MyPromise {
    //...
    static resolve(value){
        if(value instanceof MyPromise) {
            return value
        } else if(value instanceof Object && typeof value.then === 'function') {
            return new MyPromise((resolve, reject) => {
                value.then(resolve,reject)
            })
        }else {
            return new MyPromise((resolve, reject) => {
                resolve(value)
            })
        }
    }
}
```

### 3. 实现 Promise.reject
Promise.reject() 方法返回一个带有拒绝原因的Promise对象。
```js
class MyPromise {
    //...
    static reject(error) {
        return new MyPromise((resolve, reject) => {
            reject(error)
        })
    }
}
```

### 4. 实现 catch 和 finally 方法
catch() 方法返回一个 Promise，并且处理拒绝的情况。它的行为与调用 then(undefined, onRejected) 相同。
finally() 方法返回一个Promise。在 promise 结束时，无论结果是 fulfilled 或者是 rejected，都会执行指定的回调函数。这为在Promise 是否成功完成后都需要执行的代码提供了一种方式。
```js
class MyPromise {
    //...
    catch(onRejected){
        return this.then(undefined, onRejected);
    }

    finally(callback) {
        return this.then((value) => {
            return MyPromise.resolve(callback()).then(() => value)
        }, (error) => {
            return MyPromise.resolve(callback()).then(() => {
                throw error
            })
        })
    }
}
```

### 5. 实现 Promise.all

Promise.all() 方法接收一个 promise 的数组作为参数，并且只返回一个 Promise 实例， 输入的所有 promise 的 resolve 回调的结果是一个数组。
- Promise.all 等待所有都完成（或第一个失败）
- 如果传入的参数是一个空的数组， 则返回一个已完成（already resolved）状态的 Promise
- 如果传入的 promise 中有一个失败（rejected），Promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成。

```js
class MyPromise {
    //...
    static all(array) {
        let result = []
        let len = array.length
        return new MyPromise((resolve, reject) => {

            if (len === 0) {
                resolve([])
                return
            }

            let count = 0
            function addResult(i, value){
                result[i] = value
                count = count + 1
                if(count === len) {
                    resolve(result)
                }
            }

            for (let i = 0; i < len; i++) {
                let current = array[i]
                if(current instanceof MyPromise) {
                    current.then(value => {
                        addResult(i, value)
                    }, reject)
                }else {
                    addResult(i, current)
                }
            }
        })
    }
}
```

### 5. 实现 Promise.race

Promise.race() 方法返回一个 promise，一旦某个 promise 成功或拒绝，返回的 promise 就会成功或拒绝。

```js
class MyPromise {
    //...
    static race(array) {
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < array.length; i++) {
                let current = array[i]
                if(current instanceof  MyPromise) {
                    current().then(resolve, reject)
                }else {
                    resolve(current)
                }
            }
        })
    }
}
```

### 6. 实现 Promise.allSettled

Promise.allSettled(array) 方法返回一个 promise, 等待数组中所有 promise 完成后，返回所有 promise 执行结果的对象数组。

```js
class MyPromise {
    //...
    static allSettled(array){
        let result = []
        let len = array.length
        return new MyPromise((resolve, reject) => {

            if (len === 0) {
                resolve([])
                return
            }

            let count = 0
            function addResult(i, value, status){
                result[i] = {
                    status,
                    value
                }
                count = count + 1
                if(count === len) {
                    resolve(result)
                }
            }

            for (let i = 0; i < len; i++) {
                let current = array[i]
                if(current instanceof MyPromise) {
                    current.then(value => {
                        addResult(i, value, FULFILLED)
                    }, (error) =>{
                        addResult(i, error, REJECTED)
                    })
                }else {
                    addResult(i, current, FULFILLED)
                }
            }
        })
    }
}
```

### 7. 实现 Promise.any

Promise.any(array) 方法返回一个 promise, 只要数组中的一个 promise 成功，就返回那个已经成功的 promise

```js
class MyPromise {
    //...
    static any(array){
        let errors = []
        let len = array.length
        return new MyPromise((resolve, reject) => {

            if(array.length === 0) {
                reject(new AggregateError('All promises were rejected'))
                return
            }

            let count = 0

            for (let i = 0; i < len; i++) {
                let current = array[i]
                if(current instanceof MyPromise) {
                    current.then(value => {
                        resolve(value)
                    }, (error) => {
                        errors.push(error)
                        count = count + 1
                        count === len && reject(new AggregateError(errors))
                    })
                }else {
                    resolve(current)
                }
            }
        })
    }
}
```

## 完整代码
<<< @/docs/interviewQuestion/code/promise.js
