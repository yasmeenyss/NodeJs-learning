const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({

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

    department: {
        type: String,
        required: [true, "Department is required"]
    },

    subject: {
        type: String,
        required: [true, "Subject is required"]
    },

    experience: {
        type: Number,
        required: [true, "Experience is required"],
        min: [0, "Experience cannot be negative"]
    }

});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;