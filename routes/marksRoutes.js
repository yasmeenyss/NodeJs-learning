const express = require("express");

const router = express.Router();

const {
    createMarks,
    getMarks,
    updateMarks,
    deleteMarks
} = require("../controllers/marksController");

// Create Marks
router.post("/", createMarks);

// Get All Marks
router.get("/", getMarks);

// Update Marks
router.put("/:id", updateMarks);

// Delete Marks
router.delete("/:id", deleteMarks);

module.exports = router;