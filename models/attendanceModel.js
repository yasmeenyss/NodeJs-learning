const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({

    student: {
        type: String,
        required: [true, "Student is required"]
    },

    course: {
        type: String,
        required: [true, "Course is required"]
    },

    date: {
        type: Date,
        required: [true, "Date is required"],
        default: Date.now
    },

    status: {
        type: String,
        enum: ["Present", "Absent"],
        required: [true, "Attendance status is required"]
    }

});

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;