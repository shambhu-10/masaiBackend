const express = require('express')

const app = express()

const fs = require('fs')

//better way of importing than above code
// import express from 'express'
// import fs from "fs";
// import path from 'path';


app.listen(5000, () => {                        // in script (dev) section you modify smt. i.e. dev: "node index.js" to run 
    console.log("server started on http://localhost:5000");
    
})                                      
// to auto start ur server each time -> intall npm i -D nodemon , change in dev: "nodemon, index.js"
// -D means install nodemon as dev dependies bcs here we don't want to manually restart server again and again during development time but during hosting we don't want nodemon
//  or npm i -D express means intall express as dependies
// npm run dev - to run nodemon 

app.get("/", (req, res) => {      
    // res.sendFile(path.resolve(".", "index.html"))                  //sortcut-> express.sendFile(fullpath of the file u want) so don't have to write fs.readFile()
    fs.readFile("./index.html", "utf-8", (err, data) => {           // never write readFilesync   
        if(err) {
            res.send("error occured")
            return
        }
        res.send(data)
    })
    // res.send("welcome to movie database")            // u can never send two request for one respose , here we were trying to send res 2nd time and as fs.readfile is ansyncronous in nature so this line was getting executed first 
})                                                      //while the above readfile was executing and then when readfile was trying to send data already this line has send one so will throw error

app.get("/", (req, res) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
        if(err) {
            res.send("error occured")
            return
        }
        res.send(data)
    })
})

// creating movie and saving in db - imp
app.post("/movies", (req, res) => {
    res.send("movie created")
    // const payload = req.body;

})

// app.post("/movie", (req, res) => {
//     res.send([1,2,3,4])
// })


// //get movie by id dynamically
// //imdb.com/movie
// // app.get("/movie/1", (req, res) => {

// // })

// app.get("/movie/:movieId", (req, res) => {       //:id -> for dynamic id  //:movieID is a path param     
//     const movieId = req.params.id;       // if the route is dynamic then it is called path params i.e req.params.id
//     console.log()
//     fs.readFileSync("./db.json", "utf-8", (err, data) => {
//         if(err) {
//             return res.send({
//                 status: 500,
//                 message: "Internal server Error"
//             })
//         }

//         const db = JSON.parse(data)

//         const movie = db.filter((movie) => {
//             return movie.id == Number(movieId)

//             if(movie.length == 0) {
//                 return res.json({
//                     status: 404,
//                     msg: "movie not found"
//                 })
//             }

//             res.json(movie)

//         })

//     })
// })

// app.get("/search", (req, res) => {
//     res.send({
//         id: 1, 
//         name: "ironman"
//     });
// })



// ----------------------------------------------------------------------
//QUERY PARAM

app.get("/search", (req, res) => {
    const queries = req.queries
})












