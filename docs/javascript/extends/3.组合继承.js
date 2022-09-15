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
