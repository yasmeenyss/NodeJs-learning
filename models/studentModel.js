const mongoose = require("mongoose");


// Student Schema

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email"
        ]
    },

    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age must be at least 18"],
        max: [60, "Age cannot be more than 60"]
    },

    course: {
        type: String,
        required: [true, "Course is required"]
    },

    semester: {
        type: Number,
        required: [true, "Semester is required"],
        min: [1, "Semester must be at least 1"],
        max: [8, "Semester cannot be more than 8"]
    }

});


// Student Model

const Student = mongoose.model("Student", studentSchema);


module.exports = Student;