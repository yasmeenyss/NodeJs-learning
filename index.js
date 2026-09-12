

const express = require("express");

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }

    next();
});

// GET route
app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

// POST route
app.post("/users", (req, res) => {

    console.log("Received User:", req.body);

    res.status(201).json({
        message: "User created successfully",
        user: req.body
    });
});

app.listen(3000, () => {
    console.log("Express server running on port 3000");
});