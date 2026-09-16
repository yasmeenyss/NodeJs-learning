const Teacher = require("../models/teacherModel");

// Create Teacher
const createTeacher = async (req, res) => {
    try {
        const teacher = new Teacher(req.body);

        const savedTeacher = await teacher.save();

        res.status(201).json({
            message: "Teacher created successfully",
            teacher: savedTeacher
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to create teacher",
            error: error.message
        });
    }
};


// Get All Teachers
const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();

        res.status(200).json({
            message: "Teachers fetched successfully",
            teachers: teachers
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch teachers",
            error: error.message
        });
    }
};


// Update Teacher
const updateTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!teacher) {
            return res.status(404).json({
                message: "Teacher not found"
            });
        }

        res.status(200).json({
            message: "Teacher updated successfully",
            teacher: teacher
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to update teacher",
            error: error.message
        });
    }
};


// Delete Teacher
const deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(
            req.params.id
        );

        if (!teacher) {
            return res.status(404).json({
                message: "Teacher not found"
            });
        }

        res.status(200).json({
            message: "Teacher deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to delete teacher",
            error: error.message
        });
    }
};


module.exports = {
    createTeacher,
    getTeachers,
    updateTeacher,
    deleteTeacher
};

