require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();


// ===============================
// MongoDB Connection
// ===============================

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });


// ===============================
// Middleware
// ===============================

// JSON data read karne ke liye
app.use(express.json());


// Logging Middleware

app.use((req, res, next) => {

    console.log(
        `${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`
    );

    next();
});


// ===============================
// Home Route
// ===============================

app.get("/", (req, res) => {

    res.send("Welcome to College Management System API");

});


// ===============================
// User Routes
// ===============================

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);


// ===============================
// Student Routes
// ===============================

const studentRoutes = require("./routes/studentRoutes");

app.use("/students", studentRoutes);


// ===============================
// Authentication Routes
// ===============================

const authRoutes = require("./routes/authRoutes");

app.use("/auth", authRoutes);


// ===============================
// 404 Middleware
// ===============================

app.use((req, res) => {

    res.status(404).json({
        message: "Route not found"
    });

});


// ===============================
// Server
// ===============================

app.listen(process.env.PORT, () => {
    console.log("Express server running on port 3000");

});