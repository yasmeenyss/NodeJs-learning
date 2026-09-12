


const http = require("http");

const server = http.createServer((req, res) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);

    // CORS preflight
    if (req.method === "OPTIONS") {
        res.statusCode = 204;

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        res.end();
        return;
    }

    // GET request - Home
    if (req.method === "GET" && req.url === "/") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.end(JSON.stringify({
            message: "Welcome to Node.js",
            status: "success"
        }));
    }

    // GET request - About
    else if (req.method === "GET" && req.url === "/about") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.end("Welcome to About Page");
    }

    // GET request - Contact
    else if (req.method === "GET" && req.url === "/contact") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.end("Welcome to Contact Page");
    }

    // POST request - Create User
    else if (req.method === "POST" && req.url === "/users") {

        let body = "";

        // Receive data
        req.on("data", (chunk) => {
            body += chunk;
        });

        // When complete data is received
        req.on("end", () => {

            try {

                const userData = JSON.parse(body);

                console.log("User Data:", userData);
                console.log("Username:", userData.username);
                console.log("Email:", userData.email);

                res.statusCode = 201;
                res.setHeader("Content-Type", "application/json");
                res.setHeader("Access-Control-Allow-Origin", "*");

                res.end(JSON.stringify({
                    message: "User created successfully",
                    user: userData
                }));

            } catch (error) {

                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                res.setHeader("Access-Control-Allow-Origin", "*");

                res.end(JSON.stringify({
                    message: "Invalid JSON data"
                }));
            }
        });
    }

    // 404 - Route not found
    else {

        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");

        res.end(JSON.stringify({
            message: "Page Not Found"
        }));
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});