const { Console, error } = require('console')
const express = require('express')
const fs = require('fs')

const app = express()

const PORT = 3000

app.use(express.json())

app.listen(PORT, () => {
    console.log(`server started on http://locathost:${PORT}`)
})

// app.get("/movies", (req, res) => {
//     const movies = JSON.parse(fs.readFileSync("db.json"));
//     res.json(movies)

// })

app.post("/movies", (req, res) => {
    const movies = JSON.parse(fs.readFileSync('db.json'))
    // const newMovie = {"id":3,"title":"ophenheimer","year":2024};
    const newMovie = {id: Date.now(), ...req.body}
    movies.push(newMovie)
    fs.writeFileSync("db.json", JSON.stringify(movies))
    res.status(201).json(newMovie)
})

// app.put("/movies/:id", (req, res) => {
//     const movies = JSON.parse(fs.readFileSync("db.json"))

//     const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id))

//     if(movieIndex !== -1) {
//         movies[movieIndex] = {...movies[movieIndex], ...req.body};
//         fs.writeFileSync("db.json", JSON.stringify(movies))
//         res.json(movies[movieIndex])
//     }
//     else {
//         res.status(404).send("movie not found")
//     }
// })

// app.delete("/movies/:id", (req, res) => {
//     let movies = JSON.parse(fs.readFileSync("db.json"))

//     movies = movies.filter(m => m.id !== parseInt(req.params.id))

//     fs.writeFileSync("db.json", JSON.stringify(movies))
//     res.status(204).send("movie deleted successfully")
// })


//----------------------DAY-3


// app.get('/movies/:id', (req, res) => {
//     const movieId = req.params.id;
//     res.send(movieId)
// })

app.get('/movies', (req, res) => {
    const {title, year} = req.query
    // res.status(title, year)
})


app.post("/movies/:id", (req, res) => {
    try {
        let movies = JSON.parse(fs.readFileSync("db.json"))
        const movieId = req.params.id
        const { title, year } = req.body

        if(!title || !year) {
            return res.status(400).json({error: "title and year name are required"})
        }
        movies.push({ id: movieId, title, year })

        fs.writeFileSync("db.json", JSON.stringify(movies))

        res.status(201).json({message: "movie added successfully"})
    }
    catch(err) {
        res.status(500).json({error: "internal server error", details: err.message})
    }

})

