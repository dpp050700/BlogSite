function Parent() { }
Parent.prototype.sayName = function () {
  console.log('say name')
}

function Child() { }
Child.prototype = new Parent()

var c1 = new Child()
c1.sayName()