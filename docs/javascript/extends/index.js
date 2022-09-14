
// function Animal() {
//   this.type = "动物"
// }
//
// Animal.prototype.sayType = function () {
//   console.log(this.type)
// }
//
// function Dog(){}
//
// Dog.prototype = new Animal()
//
// let dog = new Dog()
// dog.sayType()

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

console.log(dog1.colors)
console.log(dog2.colors)