const mongoose = require("mongoose");


// Student Schema

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    age: {
        type: Number,
        required: true
    },

    course: {
        type: String,
        required: true
    },

    semester: {
        type: Number,
        required: true
    }

});


// Student Model

const Student = mongoose.model("Student", studentSchema);


module.exports = Student;