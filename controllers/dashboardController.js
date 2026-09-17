const Student = require("../models/studentModel");
const Teacher = require("../models/teacherModel");
const Course = require("../models/courseModel");
const Notice = require("../models/noticeModel");

const getDashboard = async (req, res) => {
    try {
        const totalStudents = await Student.countDocuments();
        const totalTeachers = await Teacher.countDocuments();
        const totalCourses = await Course.countDocuments();
        const totalNotices = await Notice.countDocuments();

        res.status(200).json({
            message: "Dashboard data fetched successfully",
            dashboard: {
                totalStudents,
                totalTeachers,
                totalCourses,
                totalNotices
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch dashboard data",
            error: error.message
        });
    }
};

module.exports = {
    getDashboard
};

