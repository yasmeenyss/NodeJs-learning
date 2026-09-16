const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Course name is required"],
        minlength: [3, "Course name must be at least 3 characters"]
    },

    code: {
        type: String,
        required: [true, "Course code is required"],
        unique: true,
        uppercase: true
    },

    department: {
        type: String,
        required: [true, "Department is required"]
    },

    semester: {
        type: Number,
        required: [true, "Semester is required"],
        min: [1, "Semester must be at least 1"],
        max: [8, "Semester cannot be more than 8"]
    },

    credits: {
        type: Number,
        required: [true, "Credits are required"],
        min: [1, "Credits must be at least 1"],
        max: [10, "Credits cannot be more than 10"]
    },

    teacher: {
        type: String,
        required: [true, "Teacher is required"]
    }

});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;