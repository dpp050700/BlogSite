# 面试中常见的手写题集合

## 1. 实现 instanceof
<<< @/docs/interviewQuestion/code/instanceof.js


## 2. 实现 add(1)(2)(3)
<<< @/docs/interviewQuestion/code/curry.js

## 3. 实现 bind
<<< @/docs/interviewQuestion/code/bind.js

## 4. 实现 apply
<<< @/docs/interviewQuestion/code/apply.js

## 5. 实现 call
<<< @/docs/interviewQuestion/code/call.js

## 6. 实现 Promise

### 6.1 实现 基本的 Promise 
```js
let p = new Promise((resolve, reject) => {
    resolve('成功')
    // reject('失败')
})

p.then((value) => {
    console.log(value)
}, (e) => {
    console.log(e)
})
```

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

    resolve(value) {
        if(this.status !== PENDING) return
        this.status = FULFILLED
        this.value = value
    }

    reject(error){
        if(this.status !== PENDING) return
        this.status = REJECTED
        this.error = error
    }

    then(successCallback, failCallback) {
        if(this.status === FULFILLED) {
            successCallback(this.value)
        }else if(this.status === REJECTED) {
            failCallback(this.error)
        }
    }
}
```

### 6.2 处理 Promise 中异步逻辑
```js
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功')
        // reject('失败')
    })
})

p.then((value) => {
    console.log(value)
}, (e) => {
    console.log(e)
})
```

### 6.3 实现 Promise.then 方法多次调用

### 6.4 实现 Promise.then 返回值的传递

### 6.5 实现 Promise.then 方法参数可选性

### 6.6 实现 Promise.resolve 方法

### 6.7 实现 Promise.reject 方法

### 6.8 实现 Promise.all、allSettled、any 方法

### 6.8 实现 Promise.race 方法

### 6.9 实现 finally 方法

### 6.10 实现 catch 方法


## 7. 实现深拷贝

## 8. 实现发布订阅模式

## 9. 实现防抖截流

## 10. 实现 new 操作符

## 11. 实现 reduce

## 12. 实现多维数组扁平化

## 13. 实现限制并发的Promise调度器