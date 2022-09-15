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
  this.colors = ['red', 'blue']
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
