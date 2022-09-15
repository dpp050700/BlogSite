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
