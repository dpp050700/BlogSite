function Person(name) {
  this.name = name;

  this.sayName = function () {
    console.log(`我的名字是： ${this.name}`)
  }
}
Person.prototype.sayName = function () {
  console.log(`my name is ${this.name}`);
};

const person1 = new Person("小明");
person1.sayName();

console.log(person1.__proto__ === Person.prototype)
console.log(person1.__proto__ )