const cash = {}

function asyncAdd(a,b,cb){
    setTimeout(() => {
        cb(null, a + b)
    }, 1 * 1000)
}

async function total(){
    // 这里两个一样的 意在考虑数据缓存
    const res1 = await sum(1,2,3,4,5,6,4)
    const res2 = await sum(1,2,3,4,5,6,4)
    const res3 = await sum(1,2,3,4,5,6)
    const res4 = await  sum(3,3)
    return [res1, res2, res3, res4]
}

function add(a,b, path) {
    const pathKey = path.sort((prev,next) => prev - next).join('+')
    const pathKey2 = [a,b].sort((prev,next) => prev - next).join('+')

    return new Promise((resolve, reject) => {
        asyncAdd(a, b, (err, res) => {
            if(err) {
                reject(err)
                return
            }
            cash[pathKey] = res
            cash[pathKey2] = res
            resolve(res)
        })
    })
}



// 实现下 sum 函数。注意不能使用加法，在 sum 中借助 asyncAdd 完成加法。尽可能的优化这个方法的时间。
function sum(){
    const args = [...arguments]
    return new Promise( async (resolve, reject) => {
        const pathKey = [...args].sort((prev,next) => prev - next).join('+')
        if(cash[pathKey] !== undefined) {
            console.log('走缓存了', ...args)
            resolve(cash[pathKey])
            return
        }

        let totalCount = 0
        let nums = []
        for (const n of args) {
            nums.push(n)
            totalCount = await add(totalCount, n, nums)
        }
        resolve(totalCount)

        // 不能使用 forEach
        // args.forEach(async (item, index) => {
        //     totalCount = await add(item, totalCount)
        // })
        // resolve(totalCount)
    })
}

total().then(res => {
    console.log(res)
})