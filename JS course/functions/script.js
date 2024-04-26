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
let sum2 = (a, b) => {
    return a + b
}
let sum3 = (a, b) => a + b
//if one parameter
let ispostive = number => number >= 0
//zero arguments
let randomNumber = () => Math.random

function useCallback(callback) {
    callback("hello")
}
useCallback(print)
//next line is same
const callback = print
callback("hello")