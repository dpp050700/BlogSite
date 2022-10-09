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

function base() {
    let p1 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
            // resolve('success')
            reject('error message')
        },2000)
        // resolve('success')
        // reject('error message')
    })

    p1.then((value) => {
        console.log(value)
    }, (e) => {
        console.log(e)
    })
}

function then(){
    let p1 = new MyPromise((resolve, reject) => {
        resolve('success')
        // reject('error message')
    })

    p1.then((value) => {
        console.log(value)
    }, (e) => {
        console.log(e)
    }).then(() => {
        console.log('then 的链式调用')
    })
}


function then2(){
    let p1 = new MyPromise((resolve, reject) => {
        resolve('success')
        // reject('error message')
    })

    let p2 = new MyPromise((resolve) => {
        setTimeout(() => {
            resolve('p2')
        }, 3000)
    })

    p1.then((value) => {
        console.log(value)
        return p2
    }, (e) => {
        console.log(e)
    }).then((value) => {
        console.log('then 的链式调用 3s 后输出', value)
    })
}


/**
 * then 链式调用 promise 对象自返回
 */

function then3(){
    let p1 = new MyPromise((resolve, reject) => {
        resolve('success')
    })

    let p2 = p1.then((value) => {
        console.log(value)
        return p2
    }, (e) => {
        console.log(e)
    })

    p2.then((value) => {
        console.log(value)
    }, (e) => {
        console.log(e.message)
    })
}

/**
 * then 参数可选
 */
function then4(){
    let p1 = new MyPromise((resolve, reject) => {
        resolve('success')
    })

    p1.then().then((value) => {
        console.log(value)
    }, (e) => {
        console.log(e.message)
    })
}

function resolveTest(){
    let p1 = MyPromise.resolve(1)
    p1.then((value) => {
        console.log(value)
    })

    let obj = {
        then: function (onFulfilled){
            onFulfilled('resolve object')
        }
    }
    let p2 = MyPromise.resolve(obj)

    p2.then((value) => {
        console.log(value)
    })

    let p3 = MyPromise.resolve(p1)

    p3.then((value) => {
        console.log(value)
    })
}

function rejectTest() {
    let p1 = MyPromise.reject(new Error('失败'))

    p1.then( () => {
    }, (error) => {
        console.error(error.message);
    });
}

function finallyTest(){
    let p1 = new MyPromise((resolve) => {
        resolve('p1 resolve')
    })

    p1.finally(() => {
        console.log('p1 finally')
    }).then(value => {
        console.log(value)
    })
}

function finallyTest2(){
    let p1 = new MyPromise((resolve) => {
        resolve('p1 resolve')
    })

    let p2 = new MyPromise((resolve) => {
       setTimeout(() => {
           resolve('p2 resolve')
       }, 3000)
    })

    p1.finally(() => {
        console.log('p1 finally')
        return p2
    }).then(value => {
        console.log(value)
    })
}


function all(){
    let p1 = new MyPromise((resolve, reject) => {
        resolve('p1 resolve')
    })

    let p2 = new MyPromise((resolve) => {
        setTimeout(() => {
            resolve('1s 后 p2 resolve')
        }, 1000)
    })

    let p3 = new MyPromise((resolve) => {
        setTimeout(() => {
            resolve('3s 后 p2 resolve')
        }, 3000)
    })

    MyPromise.all([p1,p2,p3]).then((value) => {
        console.log(value)
    }, (error) => {
        console.log(error)
    })
}

function race(){
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('1s 后 p1 resolve')
            reject('1s 后 p1 reject')
        }, 1000)
    })

    let p2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('1s 后 p2 resolve')
        }, 1000)
    })

    let p3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s 后 p2 resolve')
        }, 3000)
    })

    Promise.race([112, p1,p2,p3]).then((value) => {
        console.log(value)
    }, (error) => {
        console.log(error)
    })
}

function allSettled(){
    let p1 = new MyPromise((resolve, reject) => {
        resolve('p1 resolve')
    })

    let p2 = new MyPromise((resolve) => {
        setTimeout(() => {
            resolve('1s 后 p2 resolve')
        }, 1000)
    })

    let p3 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('3s 后 p2 resolve')
        }, 3000)
    })

    MyPromise.allSettled([1,p1,p2,p3]).then((value) => {
        console.log(value)
    }, (error) => {
        console.log(error)
    })
}

function any(){
    let p1 = new MyPromise((resolve, reject) => {
        reject('p1 reject')
    })

    let p2 = new MyPromise((resolve) => {
        setTimeout(() => {
            resolve('1s 后 p2 resolve')
        }, 1000)
    })

    let p3 = new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('3s 后 p2 resolve')
        }, 3000)
    })

    MyPromise.any([p1,p2,p3]).then((value) => {
        console.log(value)
    }, (error) => {
        console.log(error)
    })
}

// base()
// then()
// then2()
// then3()
// then4()
// resolveTest()
// rejectTest()
// finallyTest2()
// all()
// race()
// allSettled()
any()