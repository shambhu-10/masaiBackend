// console.log(process.argv);

// const args = process.argv

// console.log("first argument: ", args[2])
// console.log("second argument: ", args[3])

// const fs = require("fs")
const fs = require("fs").promises // if u'll use promise to read & write file instead of callbacks

const fileName = process.argv[2]

if (!fileName) {
    console.log("please provide the file name")
    process.exit()
}

// reading file using callbacks

// const data = fs.readFile(fileName, "utf-8", (err, data) => {
//     if (err) {
//         console.log("error reading the file", err.message)
//     }
//     const wordCount = data.split(" ").length;
//     console.log(`total word count: ${wordCount}`)
// })


// reading file using promises
fs.readFile(fileName, "utf-8")
    .then((data) => {
        const wordCount = data.split(" ").length
        console.log(`total word count: ${wordCount}`)
    })
    .catch((err) => {
        console.log("error reading the file", err.message);

    })


