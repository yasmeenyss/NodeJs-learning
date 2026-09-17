const express = require("express");

const router = express.Router();

const {
    createAttendance,
    getAttendance,
    updateAttendance,
    deleteAttendance
} = require("../controllers/attendanceController");

// Create Attendance
router.post("/", createAttendance);

// Get All Attendance
router.get("/", getAttendance);

// Update Attendance
router.put("/:id", updateAttendance);

// Delete Attendance
router.delete("/:id", deleteAttendance);

module.exports = router;