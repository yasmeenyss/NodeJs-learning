require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// MongoDB Atlas connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log(
        `${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`
    );
    next();
});

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to College Management System API");
});

// User routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// Student routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);

// Authentication routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Error handling middleware
const errorMiddleware = require("./middleware/errorMiddleware");
app.use(errorMiddleware);

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on port ${PORT}`);
});