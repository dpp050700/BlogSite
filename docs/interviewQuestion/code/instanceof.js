function myInstanceOf(leftValue, rightValue) {
    let rightPrototype = rightValue.prototype
    leftValue = leftValue.__proto__
    while (true) {
        if (leftValue === null) {
            return false
        }
        if (leftValue === rightPrototype) {
            return true
        }
        leftValue = leftValue.__proto__
    }
}