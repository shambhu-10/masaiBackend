// const { readFile } = require("fs");

// function add(a, b) {
//     return a+b
// }

// const inputs = process.argv;
// console.log(inputs);
// const opration = inputs[2]




// how to delete info from a file

// const data = readFile
// const array = data to array (.split)

// array.filter ( task == tastToRemove)
// save again


// how to export function from task.js to index.js 

function add(a, b) {
    return a+b
}


function sub(a, b) {
    return a-b
}

module.exports = {add, sub}     // u can't write module.exports twice only once and pass the fun to exports

// we can also export variable and other things also