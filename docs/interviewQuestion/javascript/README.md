## 1. JS 如何判断一个数据的类型

我们常用的判断数据类型的方式有三种：typeof、instanceof、Object.prototype.toString.call，现在我们逐一分析三种判断的用法。

1、typeof 可以被用来准确判断数据的基本类型

```JS
typeof 123 === 'number'
typeof 'zhang_san' === 'string'
typeof false === 'boolean'
typeof undefined === 'undefined'
typeof Symbol() === 'symbol'
typeof null === 'object'
typeof {name: 1} === 'object'
typeof function() {} === 'function'
```

typeof 原理：

js 在底层存储变量的时候，会在变量的机器码的低位 1-3 位存储其类型信息

- 000：对象
- 010：浮点数
- 100：字符串
- 110：布尔
- 001：整数
  但是，对于 undefined 和 null 来说，这两个值的信息存储是有点特殊的：
  null：所有机器码均为 0， undefined：用 −2^30 整数来表示
  所以，typeof 将 null 也判断为 object

2、instanceof

instanceof 主要的作用就是判断一个实例对象是否属于某种类型

```js
let person = function () {}

let child = function () {}

child.prototype = new person()

let p1 = new person()
let c1 = new child()

p1 instanceof person // true

c1 instanceof child
c1 instanceof person
c1 instanceof Object
```

instanceof 原理：只要右边变量的 prototype 在左边变量的原型链上即可。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false

instanceof 实现

```js
function myInstanceOf(leftValue, rightValue) {
  let rightPrototype = rightValue.prototype
  leftValue = leftValue.__proto__
  while (true) {
    if (leftValue === null) {
      return false
    }
    if (leftValue === rightPrototype) {
      return true
    }
    leftValue = leftValue.__proto__
  }
}
```

3、Object.prototype.toString

通过 Object.prototype.toString 可以准确的判断出数据的类型

```js
Object.prototype.toString.call(1) // "[object Number]"

Object.prototype.toString.call('hello') // "[object String]"

Object.prototype.toString.call({ a: 'hello' }) // "[object Object]"

Object.prototype.toString.call([1, 2]) // "[object Array]"

Object.prototype.toString.call(true) // "[object Boolean]"

Object.prototype.toString.call(() => {}) // "[object Function]"

Object.prototype.toString.call(null) // "[object Null]"

Object.prototype.toString.call(undefined) // "[object Undefined]"

Object.prototype.toString.call(Symbol(1)) // "[object Symbol]"
```
