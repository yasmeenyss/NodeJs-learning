const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({

    student: {
        type: String,
        required: [true, "Student is required"]
    },

    course: {
        type: String,
        required: [true, "Course is required"]
    },

    marks: {
        type: Number,
        required: [true, "Marks are required"],
        min: [0, "Marks cannot be less than 0"],
        max: [100, "Marks cannot be more than 100"]
    },

    grade: {
        type: String,
        required: [true, "Grade is required"]
    }

});

const Marks = mongoose.model("Marks", marksSchema);

module.exports = Marks;