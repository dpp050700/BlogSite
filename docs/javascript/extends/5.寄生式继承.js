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
