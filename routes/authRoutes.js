const express = require("express");

const router = express.Router();


// Controllers
const {
    registerUser,
    loginUser
} = require("../controllers/authController");


// Middlewares
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");


// ===============================
// Register
// ===============================

router.post("/register", registerUser);


// ===============================
// Login
// ===============================

router.post("/login", loginUser);


// ===============================
// Protected Profile Route
// ===============================

router.get(
    "/profile",
    authMiddleware,
    (req, res) => {

        res.status(200).json({
            message: "Welcome to your profile",
            user: req.user
        });

    }
);


// ===============================
// Admin Only Route
// ===============================

router.get(
    "/admin",
    authMiddleware,
    roleMiddleware("admin"),
    (req, res) => {

        res.status(200).json({
            message: "Welcome Admin"
        });

    }
);


// ===============================
// Teacher Only Route
// ===============================

router.get(
    "/teacher",
    authMiddleware,
    roleMiddleware("teacher"),
    (req, res) => {

        res.status(200).json({
            message: "Welcome Teacher"
        });

    }
);



// ===============================
// Student Only Route
// ===============================

router.get(
    "/student",
    authMiddleware,
    roleMiddleware("student"),
    (req, res) => {

        res.status(200).json({
            message: "Welcome Student"
        });

    }
);


module.exports = router;