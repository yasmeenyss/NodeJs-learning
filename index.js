
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Welcome to Home Page");
    }

    else if (req.url === "/about") {
        res.end("Welcome to About Page");
    }

    else if (req.url === "/contact") {
        res.end("Welcome to Contact Page");
    }

    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});