const Student = require("../models/studentModel");


// ===============================
// Create Student
// ===============================

const createStudent = async (req, res) => {

    try {

        const student = new Student(req.body);

        const savedStudent = await student.save();

        res.status(201).json({
            message: "Student created successfully",
            student: savedStudent
        });

    } catch (error) {

        res.status(400).json({
            message: "Failed to create student",
            error: error.message
        });

    }

};


// ===============================
// Get All Students
// ===============================

const getStudents = async (req, res) => {

    try {

        const students = await Student.find();

        res.status(200).json({
            message: "Students fetched successfully",
            students: students
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch students",
            error: error.message
        });

    }

};


// ===============================
// Update Student
// ===============================

const updateStudent = async (req, res) => {

    try {

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.status(200).json({
            message: "Student updated successfully",
            student: student
        });

    } catch (error) {

        res.status(400).json({
            message: "Failed to update student",
            error: error.message
        });

    }

};


// ===============================
// Delete Student
// ===============================

const deleteStudent = async (req, res) => {

    try {

        const student = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.status(200).json({
            message: "Student deleted successfully",
            student: student
        });

    } catch (error) {

        res.status(400).json({
            message: "Failed to delete student",
            error: error.message
        });

    }

};


module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
};