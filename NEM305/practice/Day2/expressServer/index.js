const express = require("express")

const app = express()

let PORT = 3000
app.listen(PORT, (req, res) => {
    console.log(`server started at http://localhost:${PORT}`);
    
})

app.get("/", (req, res) => {
    res.send("Home page")
})

app.post("/", (req, res) => {
    res.send("Movies created successully")
})