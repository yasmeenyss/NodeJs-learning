const express = require("express");

const router = express.Router();

const {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");


// ===============================
// Create Student
// ===============================

router.post("/", createStudent);


// ===============================
// Get All Students
// ===============================

router.get("/", getStudents);


// ===============================
// Update Student
// ===============================

router.put("/:id", updateStudent);


// ===============================
// Delete Student
// ===============================

router.delete("/:id", deleteStudent);


module.exports = router;