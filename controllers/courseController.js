const Course = require("../models/courseModel");

// Create Course
const createCourse = async (req, res) => {
    try {
        const course = new Course(req.body);

        const savedCourse = await course.save();

        res.status(201).json({
            message: "Course created successfully",
            course: savedCourse
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to create course",
            error: error.message
        });
    }
};


// Get All Courses
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        res.status(200).json({
            message: "Courses fetched successfully",
            courses: courses
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch courses",
            error: error.message
        });
    }
};


// Update Course
const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json({
            message: "Course updated successfully",
            course: course
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to update course",
            error: error.message
        });
    }
};


// Delete Course
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(
            req.params.id
        );

        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.status(200).json({
            message: "Course deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to delete course",
            error: error.message
        });
    }
};


module.exports = {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse
};