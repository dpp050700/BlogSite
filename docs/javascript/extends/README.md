# 继承

本文我们将了解 JavaScript 常用的继承方案

继承的本质是让 Child 可以有 Parent 的属性和方法。

## 1、原型链继承

原型链继承的实现方式是，将 Child 的 `prototype` 赋值为 Parent 实例。那么，我们在访问 child.fn 时会以如下的路径进行查找：
`child.fn -> Child.prototype.fn -> parent.fn -> Parent.prototype.fn`

```js
function Animal() {
  this.type = "动物"
}

Animal.prototype.sayType = function () {
  console.log(this.type)
}

function Dog(){}

Dog.prototype = new Animal()

let dog = new Dog()
dog.sayType()
```
缺点：
1. 通过原型链继承，所有 Child 的实例共享 Parent 中引用类型的属性
```js
function Animal() {
  this.colors = ['red', 'blue']
}

Animal.prototype.addColor = function (color) {
  this.colors.push(color)
}

function Dog(){}

Dog.prototype = new Animal()

let dog1 = new Dog()
let dog2 = new Dog()
dog1.addColor('green')
dog2.addColor('yellow')

console.log(dog1.colors) // [ 'red', 'blue', 'green', 'yellow' ]
console.log(dog2.colors) // [ 'red', 'blue', 'green', 'yellow' ]
```
2. 在创建 Child 的实例时，不能向Parent传参

## 2、借用构造函数