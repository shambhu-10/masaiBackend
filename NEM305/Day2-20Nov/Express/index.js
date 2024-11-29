const express = require("express")

const app = express();      //express will create a server for u        // it's like we have our ticket to a place but we don't know which seat we are assighned

// //1000 - 65536, u can create the server between these no, 65536 -> 2^16

// app.listen(1000, () => {
//     console.log("Ticket got confirmed");
    
// })

// -------------------------------- sending get, post etc request on the server


// app.get("/", (req, res) => {})       //template for get

// app.post("/", (req, res) => {})      // template for post

// app.get("/user", (req, res) => {
//     res.send("Hello world")
// })

// app.post("/user", (req, res) => {
    // res.send("user login sucessfully")
// })

// app.listen(5000, () => {
//     console.log("server started on http://localhost:5000");
    
// })
