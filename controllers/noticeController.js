const Notice = require("../models/noticeModel");

// Create Notice
const createNotice = async (req, res) => {
    try {
        const notice = new Notice(req.body);

        const savedNotice = await notice.save();

        res.status(201).json({
            message: "Notice created successfully",
            notice: savedNotice
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to create notice",
            error: error.message
        });
    }
};


// Get All Notices
const getNotices = async (req, res) => {
    try {
        const notices = await Notice.find();

        res.status(200).json({
            message: "Notices fetched successfully",
            notices: notices
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch notices",
            error: error.message
        });
    }
};


// Update Notice
const updateNotice = async (req, res) => {
    try {
        const notice = await Notice.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!notice) {
            return res.status(404).json({
                message: "Notice not found"
            });
        }

        res.status(200).json({
            message: "Notice updated successfully",
            notice: notice
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to update notice",
            error: error.message
        });
    }
};


// Delete Notice
const deleteNotice = async (req, res) => {
    try {
        const notice = await Notice.findByIdAndDelete(
            req.params.id
        );

        if (!notice) {
            return res.status(404).json({
                message: "Notice not found"
            });
        }

        res.status(200).json({
            message: "Notice deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to delete notice",
            error: error.message
        });
    }
};


module.exports = {
    createNotice,
    getNotices,
    updateNotice,
    deleteNotice
};