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

        onFulfilled =
            typeof onFulfilled == "function" ? onFulfilled : (v) => v;

        onRejected =
            typeof onRejected == "function"
                ? onRejected
                : (reason) => {
                    throw reason;
                };

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

    catch(onRejected){
        return this.then(undefined, onRejected);
    }

    finally(callback) {
        // callback 调用的时候可能返回的是 promise， 所以这里用 MyPromise.resolve 包裹一下，详见 finallyTest2
        return this.then((value) => {
            return MyPromise.resolve(callback()).then(() => value)
        }, (error) => {
            return MyPromise.resolve(callback()).then(() => {
                throw error
            })
        })
    }

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

    static reject(error) {
        return new MyPromise((resolve, reject) => {
            reject(error)
        })
    }

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