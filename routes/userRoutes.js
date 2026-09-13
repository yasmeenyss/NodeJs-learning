const express = require("express");

const router = express.Router();

const {
    getUsers,
    getUserById,
    createUser
} = require("../controllers/userController");


// GET all users
router.get("/", getUsers);


// GET single user
router.get("/:id", getUserById);


// POST user
router.post("/", createUser);


module.exports = router;