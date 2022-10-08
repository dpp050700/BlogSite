const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

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

// class MyPromise {
//     status = PENDING
//     value = undefined
//     error = undefined
//     successCallback = undefined
//     failCallback = undefined
//     constructor(executor) {
//         executor((value) => {
//             this.resolve(value)
//         }, (error) => {
//             this.reject(error)
//         })
//     }
//
//     resolve(value) {
//         if(this.status !== PENDING) return
//         this.status = FULFILLED
//         this.value = value
//         this.successCallback && this.successCallback(this.value)
//     }
//
//     reject(error){
//         if(this.status !== PENDING) return
//         this.status = REJECTED
//         this.error = error
//         this.failCallback && this.failCallback(this.error)
//     }
//
//     then(successCallback, failCallback) {
//         if(this.status === FULFILLED) {
//             successCallback(this.value)
//         }else if(this.status === REJECTED) {
//             failCallback(this.error)
//         } else {
//             this.successCallback = successCallback
//             this.failCallback = failCallback
//         }
//     }
// }


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