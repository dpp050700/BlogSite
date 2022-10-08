const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


function resolvePromise(promise, res, resolve, reject) {
    // 返回同一个promise
    if (promise === res) {
        reject(new TypeError("Chaining cycle detected for promise #<MyPromise>"));
        return;
    }
    if (res instanceof MyPromise) {
        res.then(resolve, reject);
    } else {
        resolve(res);
    }
}

function asyncExecFun(fn) {
    setTimeout(() => {
        fn()
    }, 0)
}

class MyPromise {

    status = PENDING

    value = undefined

    reason = undefined

    successCallbacks = []

    failCallbacks = []

    constructor(executor) {
        try {
            executor(
                (value) => {
                    this.resolve(value)
                },
                (reason) => {
                    this.reject(reason)
                }
            )
        } catch (e) {
            this.reject(e)
        }
    }

    resolve(value){
        if(this.status !== PENDING) return
        this.value = value
        this.status = FULFILLED
        while (this.successCallbacks.length) this.successCallbacks.shift()(this.value)

    }

    reject(reason) {
        if(this.status !== PENDING) return
        this.reason = reason
        this.status = REJECTED
        while (this.failCallbacks.length) this.failCallbacks.shift()(this.reason)
    }

    then(successCallback, failCallback){

        successCallback =
            typeof successCallback == "function" ? successCallback : (v) => v;

        failCallback =
            typeof failCallback == "function"
                ? failCallback
                : (reason) => {
                    throw reason;
                };

        let promise = new MyPromise((resolve,reject) => {
            if(this.status === FULFILLED) {
                asyncExecFun(() => {
                   try {
                       let res = successCallback(this.value)
                       resolvePromise(promise,res,resolve,reject)
                   }catch (e) {
                    reject(e)
                   }
                })
            }else if(this.status === REJECTED) {
                asyncExecFun(() => {
                    try {
                        let res = failCallback(this.reason)
                        resolvePromise(promise,res,resolve,reject)
                    }catch (e) {
                        reject(e)
                    }
                })
            } else {
                this.successCallbacks.push(() => {
                    asyncExecFun(() => {
                        try {
                            let res = successCallback(this.value)
                            resolvePromise(promise,res,resolve,reject)
                        }catch (e) {
                            reject(e)
                        }
                    })
                })
                this.failCallbacks.push(() => {
                    asyncExecFun(() => {
                        try {
                            let res = failCallback(this.reason)
                            resolvePromise(promise,res,resolve,reject)
                        }catch (e) {
                            reject(e)
                        }
                    })
                })
            }
        })

        return promise
    }
}

function other(){
    return new MyPromise((resolve,reject) => {
        reject('other')
    })
}

const p1 = new MyPromise((resolve,reject) => {
    // setTimeout(() => {
    //     reject('失败')
    // }, 2000)
    resolve('成功11')
    // reject('失败')
})

p1.then((value) => {
    console.log(value)
    // throw new Error('ssss')
    // return 200
    return other()
}, (e) => {
    console.log(e)
    return 123
}).then((value) => {
    console.log(value, 11)
}, (e) =>{
    console.log(e,'err')
})

// p1.then((value) => {
//     console.log(value)
// }, (e) => {
//     console.log(e)
// })