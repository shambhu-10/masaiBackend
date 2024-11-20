const fs = require("fs")

// three types of modules:
// 1. Custom                - made by u
// 2. Node internal         - provided by node
// 3. Community modules     - someone else has written it, neither you nor node, npm is used to add, delete, community module



// function add(a, b) {
//     return a+b
// }

// function sub(a, b) {
//     return a-b
// }

function mul(a, b) {
    return a*b
}

function divide(a, b) {
    return a/b
}

//// 1. community module

// const isOdd = require("is-odd")

// const isEven = require("is-even")

// console.log(isOdd(3, 5))
// console.log(isEven(5))



/////// 2. Custom module importing

// importing modules from "task.js"

// const calc = require("./task")      // when importing only one fun

// console.log("Addition:", calc(3,3))

// --------------------------------------------------------

const {add, sub} = require("./task")        //importing two fun,  add and sub are two fun in the task.js, nd we are destructuring here


console.log("Addition:", add(3,3))
console.log("subtraction:", sub(3,3))



// -------------------------------------------------------------