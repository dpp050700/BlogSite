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
