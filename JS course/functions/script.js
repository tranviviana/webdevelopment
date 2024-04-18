function sayHi() {
    console.log("Hi")
}
sayHi()
sayHi()

function sum(a, b) {
    console.log(a + b)
    return a + b
}
sum(1,2)
const value = sum(1,2)

function useCallback(callback) {
    callback("hello")
}
useCallback(print)
//next line is same
const callback = print
callback("hello")