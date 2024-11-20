const express = require("express")

const app = express();      //express will create a server for u

// //1000 - 65536, u can create the server between these no

// app.listen(5000, () => {
//     console.log("server started on http://localhost:5000");
    
// })

// -------------------------------- sending get, post etc request on the server


app.get("/", (req, res) => {})       //template for get

app.post("/", (req, res) => {})      // template for post

app.get("/users", (req, res) => {
    res.send("Hello world")
})

app.post("/users", (req, res) => {
    res.send("user login sucessfully")
})

app.listen(5000, () => {
    console.log("server started on http://localhost:5000");
    
})
