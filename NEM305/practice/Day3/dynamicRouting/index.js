const express = require('express')

const app = express()

let PORT = 4000

app.listen(PORT, () => {
    console.log(`localserver started at https://localhost:${PORT}`);
    
})

app.get("/", (req, res) => {
    res.send("home page")
})

// next things done in day2 only