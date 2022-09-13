(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{298:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"原型和原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型和原型链"}},[t._v("#")]),t._v(" 原型和原型链")]),t._v(" "),s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("关于原型和原型链，网上有一张经典的关系图，不了解的同学可能看到这张图会很懵。没关系，当你看完我下面的介绍，相信你一定能够看懂的。\n"),s("img",{attrs:{src:"/javascript/5.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" "),s("code",[t._v("prototype")])]),t._v(" "),s("p",[t._v("每一个构造函数都有一个 "),s("code",[t._v("prototype")]),t._v("(显示原型) 属性，那构造函数的 prototype 属性到底指向的是什么呢？")]),t._v(" "),s("p",[t._v("我们先来看一个简单的例子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sayName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("my name is ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小明"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nperson1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// my name is 小明")]),t._v("\n")])])]),s("p",[t._v("其实，构造函数的 "),s("code",[t._v("prototype")]),t._v(" 属性是一个对象，这个对象是在调用构造函数的时候创建的"),s("strong",[t._v("实例")]),t._v("的原型，在上述例子中，我们通过构造函数 "),s("code",[t._v("Person")]),t._v(" 创建出实例对象 "),s("code",[t._v("person1")]),t._v("， "),s("code",[t._v("Person.prototype")]),t._v(" 也就是 "),s("code",[t._v("person1")]),t._v(" 的原型。我们可以用下面这张图来描述一下构造函数和实例原型的关系：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/javascript/1.png",alt:""}})]),t._v(" "),s("p",[t._v("那么什么是原型呢？我们可以理解为每一个对象在创建的时候都会与另外一个对象关联，这个对象就是我们所说的原型，每一个对象都会从原型继承属性。在上述例子中，我们通过构造函数 "),s("code",[t._v("Person")]),t._v(" 创建了实例对象 "),s("code",[t._v("person1")]),t._v(", 它继承了原型对象的 "),s("code",[t._v("sayName")]),t._v(" 方法。")]),t._v(" "),s("p",[t._v("那么，我们怎么表示实例对象 "),s("code",[t._v("person1")]),t._v(" 与原型 "),s("code",[t._v("Person.prototype")]),t._v(" 的关系呢？接下来我们介绍第二个属性 "),s("code",[t._v("__proto__")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"proto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proto"}},[t._v("#")]),t._v(" "),s("code",[t._v("__proto__")])]),t._v(" "),s("p",[t._v("每个 Javascript 对象都有一个属性，叫"),s("code",[t._v("__proto__")]),t._v("(隐式原型)，它指向该对象的原型。我们可以对上面的例子进行补充来证明这一点：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sayName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("my name is ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" person1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小明"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nperson1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),s("p",[t._v("打印 "),s("code",[t._v("person1.__proto__")]),t._v(" 可以看到以下信息")]),t._v(" "),s("p",[s("img",{attrs:{src:"/javascript/2.png",alt:""}})]),t._v(" "),s("p",[t._v("细心的同学已经发现原型对象上不仅仅有我们定义的 "),s("code",[t._v("sayName")]),t._v(" 方法，还有一个神秘的方法 "),s("code",[t._v("constructor")]),t._v("，接下来我们介绍一下什么是 "),s("code",[t._v("constructor")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" "),s("code",[t._v("constructor")])]),t._v(" "),s("p",[t._v("每个原型对象都有一个 "),s("code",[t._v("constructor")]),t._v("(构造方法)属性，它指向其关联的构造函数。所以我们可以得出以下结论：\n"),s("code",[t._v("Person === Person.prototype.constructor")]),t._v("，我们用以下代码来证明这一点:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nPerson "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("至此，我们知道了实例通过 "),s("code",[t._v("__proto__")]),t._v("、构造函数通过 "),s("code",[t._v("prototype")]),t._v(" 可以指向原型，原型通过"),s("code",[t._v("constructor")]),t._v("指向构造函数，我们可以对上面的关系图再加以补充：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/javascript/3.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),s("p",[t._v("在第一个例子中，我们讲到过 "),s("strong",[t._v("每一个对象都会从原型继承属性")]),t._v("，所以实例"),s("code",[t._v("person1")]),t._v("可以访问到原型"),s("code",[t._v("Person.prototype")]),t._v("上的"),s("code",[t._v("sayName")]),t._v("方法。那如果我们访问一个原型"),s("code",[t._v("Person.prototype")]),t._v("上没有的属性呢，他是不是会返回 "),s("code",[t._v("undefined")]),t._v(" 呢？")]),t._v(" "),s("p",[t._v("我们以访问属性 "),s("code",[t._v("valueOf")]),t._v(" 来分析一下:")]),t._v(" "),s("p",[t._v("实例"),s("code",[t._v("person1")]),t._v(" 的原型是 "),s("code",[t._v("Person.prototype")]),t._v("，当我们访问"),s("code",[t._v("valueOf")]),t._v("属性的时候，它会先到到实例"),s("code",[t._v("person1")]),t._v("上查找("),s("code",[t._v("person1.valueOf")]),t._v(")，发现没有该属性，继而再到"),s("code",[t._v("Person.prototype")]),t._v("上去查找("),s("code",[t._v("Person.prototype.valueOf")]),t._v(")，也没有找到。然而，"),s("code",[t._v("Person.prototype")]),t._v(" 是一个 "),s("code",[t._v("Object")]),t._v(" 实例，我们说”当实例对象上不能找到属性的时候，应该到它的原型对象中查找。“ "),s("code",[t._v("Person.prototype")]),t._v(" 的原型是 "),s("code",[t._v("Object.prototype")]),t._v("，而 "),s("code",[t._v("Object.prototype")]),t._v(" 上是存在 "),s("code",[t._v("valueOf")]),t._v(" 属性的，所以我们最终得到应该是 "),s("code",[t._v("Object.valueOf")]),t._v("。")]),t._v(" "),s("p",[t._v("所以，当我们访问一个实例对象的属性时，他会先查询该实例本身的属性，然后再到实例的原型中查找，然后再到实例的原型的原型中查找...这样一层层地向上查找，当能够找到该属性时就停止向上查找的过程，而如果直到 "),s("code",[t._v("Object.prototype")]),t._v(" 也没能找到该属性，就返回 "),s("code",[t._v("undefined")]),t._v("。")]),t._v(" "),s("p",[t._v("所以，最终的关系图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/javascript/4.png",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);