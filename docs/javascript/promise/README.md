# Promise 

## Promise 的基本用法

<<< @/docs/javascript/promise/usePromise.js

### 1 实现 基本的 Promise
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
### 6.3 实现 Promise.then 方法多次调用

### 6.4 实现 Promise.then 返回值的传递

### 6.5 实现 Promise.then 方法参数可选性

### 6.6 实现 Promise.resolve 方法