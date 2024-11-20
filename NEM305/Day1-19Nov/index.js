// console.log("Hello world");         //V8 engine that extracted from chrome nd make us exeute this code in our local pc

//Hw find other engines of js other than V8

//LIBUV - libarary name from which event loop are run

// node js can do anyting like reading, updating, creating files in ur pc


// api are just like functions provided by node.js

// const { AsyncLocalStorage } = require("async_hooks")

const fs = require("fs")

// const data = fs.readFileSync('C:\\Users\\shamb\\Desktop\\Backend\\masaiBackend\\NEM305\\Day1-19Nov\\data.txt', 'utf8');

// console.log(data) 

const data2 = "hello shivam"


// template for writing in a file 
// function writeFileSync(path, data, encoding, callback) {
//     const data = someHowWriteFile(path, data)
//     callback(erro, data)
// }

fs.writeFileSync("newdata.txt", data2, "utf-8")          // if u'll remove Sync it'll become syncronus nd always add a callback fun at end

// fs.appendFileSync("newdata.txt", "\nappended data", "utf-8")

const data3 = "hi prab"

fs.writeFileSync("data3.txt", data3, "utf-8")

fs.appendFileSync("data3.txt","\nlorem ipsum", "utf-8" )

// read the blog -> never block event 

console.log("Hi")



















