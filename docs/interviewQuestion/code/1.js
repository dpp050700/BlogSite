/**
 * add(1)(2)(3)
 */

function curry(fn, ...args) {
  return args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args)
}

function _add(x, y, z) {
  return x + y + z
}

const add = curry(_add)

console.log(add(1)(2)(3))
console.log(add(1)(2, 3))
console.log(add(1, 2)(3))
