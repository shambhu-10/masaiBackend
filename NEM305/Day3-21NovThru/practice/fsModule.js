const fs = require('fs')

const data1 = "Name: Shambhu"

// fs.writeFile("./file.txt", data1, "utf-8", (err) => {
//     if(err) {
//         console.log("400: bad request");
        
//     }
//     else {
//         console.log("201: data got created")
//         console.log(data1);
        
//     }
// })

const data2 = "\nname: sam"

fs.appendFile("./file.txt", data2, "utf-8", (err) => {
    if(err) {
        console.log("404: file not found");
        
    }
    else {
        console.log("201: put successful");
        
    }
})

 fs.readFile("./file.txt" , "utf-8", (err, data) => {
    if(err) {
        console.log("404: file not found");
    }
    else {
        console.log(data)
    }
})

fs.unlink("./file.txt", (err) => {
    if(err) {
        console.log("404: file not found");
        return;
        
    }
    console.log("file deleted successfully")
})