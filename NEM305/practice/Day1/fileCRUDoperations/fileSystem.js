// const express = require('express')

// const app = express()
// // const fs = require("fs")

// app.get('/', (req, res) => {
//     res.send("Home page")
// });

// app.get('/contactUs', (req, res) => {
//     res.send("Contact us")
// });


// app.listen(3000, () => {
//     console.log(`server is running on http://localhost:3000`)
// })

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("home page")
})

// app.listen(3000, () => {
//     console.log("server started at http://localhost:3000")
// })

app.get('/contactUs', (req, res) => {
    res.send("contact us page")
})

const fs = require('fs')

let data1 = "name: sam, unit: 4, course: Backend"

// fs.writeFile("student.txt", data1, "utf-8", () => {
//     console.log("data written succesfully");
    
// })

let data2 = "\n{name: prabh, unit: 4, course: backend}, \n{name: vishal, unit: 4, course: backend}"

// fs.appendFile("student.txt", data2, "utf-8", () => {
//     console.log("data appended succesfully");
    
// })

const data3 = fs.readFileSync("student.txt", "utf-8")
console.log(data3)

// fs.unlink("data.txt", () => {
//     console.log("Data deleted successfully");
    
// })
