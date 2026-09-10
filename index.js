// const express = require("express");

// const app = express();

// app.get("/", (req, res)  => {
//     res.send("College Management System API")
// });

// app.listen(3000, () => {
//     console.log("server running on   http://localhost:3000");

// });


// const { add, subtract } = require("./math");

// console.log(add(10, 5));
// console.log(subtract(10, 5));


// const fs = require("fs");

// fs.writeFile("hello.txt", "Hello Node.js", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("File created successfully");
// });




// const fs = require("fs");

// fs.unlink("hello.txt", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("File deleted");
// });


const fs = require("fs");

fs.writeFile("student.txt", "My name is Yasmeen", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Student file created");

    fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(data);
    });
});