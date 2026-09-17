const Attendance = require("../models/attendanceModel");

// Create Attendance
const createAttendance = async (req, res) => {
    try {
        const attendance = new Attendance(req.body);

        const savedAttendance = await attendance.save();

        res.status(201).json({
            message: "Attendance marked successfully",
            attendance: savedAttendance
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to mark attendance",
            error: error.message
        });
    }
};


// Get All Attendance
const getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find();

        res.status(200).json({
            message: "Attendance fetched successfully",
            attendance: attendance
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch attendance",
            error: error.message
        });
    }
};


// Update Attendance
const updateAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!attendance) {
            return res.status(404).json({
                message: "Attendance not found"
            });
        }

        res.status(200).json({
            message: "Attendance updated successfully",
            attendance: attendance
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to update attendance",
            error: error.message
        });
    }
};


// Delete Attendance
const deleteAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndDelete(
            req.params.id
        );

        if (!attendance) {
            return res.status(404).json({
                message: "Attendance not found"
            });
        }

        res.status(200).json({
            message: "Attendance deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to delete attendance",
            error: error.message
        });
    }
};


module.exports = {
    createAttendance,
    getAttendance,
    updateAttendance,
    deleteAttendance
};

