# 继承

本文我们将了解 JavaScript 常用的继承方案

继承的本质是让 Child 可以有 Parent 的属性和方法。

## 1、原型链继承

原型链继承的实现方式是，将 Child 的 `prototype` 赋值为 Parent 实例。那么，我们在访问 child.fn 时会以如下的路径进行查找：
`child.fn -> Child.prototype.fn -> parent.fn -> Parent.prototype.fn`

```js
function Animal() {
  this.type = '动物'
}

Animal.prototype.sayType = function () {
  console.log(this.type)
}

function Dog() {}

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

function Dog() {}

Dog.prototype = new Animal()

let dog1 = new Dog()
let dog2 = new Dog()
dog1.addColor('green')
dog2.addColor('yellow')

console.log(dog1.colors) // [ 'red', 'blue', 'green', 'yellow' ]
console.log(dog2.colors) // [ 'red', 'blue', 'green', 'yellow' ]
```

2. 在创建 Child 的实例时，不能向 Parent 传参

## 2、借用构造函数

```js
function Parent(name) {
  this.name = name
  this.say = function () {
    console.log(`hello my name is ${this.name}`)
  }
}

function Child(name) {
  Parent.call(this, name)
}

let c1 = new Child('张三')
let c2 = new Child('李四')

console.log(c1.name)
console.log(c2.name)

c1.say()
c2.say()
```

缺点：方法都定义在构造函数中，每次创建实例都会创建一遍方法
优点：1.避免了引用类型的属性被所有实例共享 2. 可以在 Child 中 向 Parent 传惨。

## 3、组合继承

```js
function Parent(name) {
  this.name = name
  this.colors = ['red', 'blue']
}
Parent.prototype.say = function () {
  console.log(`hello my name is ${this.name}`)
}

function Child(name, type) {
  Parent.call(this, name)
  this.type = type
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

let c1 = new Child('张三', '教师')

let c2 = new Child('李四', '学生')

c1.colors.push('black')

c1.say()

c2.say()

console.log(c1.colors)
console.log(c2.colors)

console.log(c1.type)
console.log(c2.type)
```

缺点：会调用两次父构造函数

## 4、原型式继承

```js
function createObject(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

let parent = {
  name: 'Animal',
  color: ['red', 'black']
}

let c1 = createObject(parent)
let c2 = createObject(parent)

c1.name = 'Dog'
console.log(c2.name) // Animal

c1.color.push('yellow')
console.log(c2.color) // ['red', 'black', 'yellow']
```

## 5、寄生式继承

```js
function createObject(obj) {
  var clone = Object.create(obj)
  clone.sayName = function () {
    console.log(this.name)
  }
  return clone
}

let person = {
  name: '张三',
  color: ['red', 'blue']
}

let person1 = createObject(person)
person1.color.push('yellow')
console.log(person1.color)
person1.sayName() // 张三

let person2 = createObject(person)
person2.name = '李四'
console.log(person2.color) // ['red', 'blue', 'yellow']
person2.sayName()
```

## 6、寄生组合式继承

```js
function createObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function prototype(child, parent) {
  var prototype = createObject(parent.prototype)
  prototype.constructor = child
  child.prototype = prototype
}

function Parent(name) {
  this.name = name
  this.color = ['red', 'blue']
}

Parent.prototype.say = function () {
  console.log(this.name)
}

function Child(name) {
  Parent.call(this, name)
}

prototype(Child, Parent)

let c1 = new Child('张三')
let c2 = new Child('李四')
c1.say()
c1.color.push('black')
console.log(c2.color)
```
