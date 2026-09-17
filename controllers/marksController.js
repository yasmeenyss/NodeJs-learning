const Marks = require("../models/marksModel");

// Create Marks
const createMarks = async (req, res) => {
    try {
        const marks = new Marks(req.body);

        const savedMarks = await marks.save();

        res.status(201).json({
            message: "Marks created successfully",
            marks: savedMarks
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to create marks",
            error: error.message
        });
    }
};


// Get All Marks
const getMarks = async (req, res) => {
    try {
        const marks = await Marks.find();

        res.status(200).json({
            message: "Marks fetched successfully",
            marks: marks
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch marks",
            error: error.message
        });
    }
};


// Update Marks
const updateMarks = async (req, res) => {
    try {
        const marks = await Marks.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!marks) {
            return res.status(404).json({
                message: "Marks not found"
            });
        }

        res.status(200).json({
            message: "Marks updated successfully",
            marks: marks
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to update marks",
            error: error.message
        });
    }
};


// Delete Marks
const deleteMarks = async (req, res) => {
    try {
        const marks = await Marks.findByIdAndDelete(
            req.params.id
        );

        if (!marks) {
            return res.status(404).json({
                message: "Marks not found"
            });
        }

        res.status(200).json({
            message: "Marks deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to delete marks",
            error: error.message
        });
    }
};


module.exports = {
    createMarks,
    getMarks,
    updateMarks,
    deleteMarks
};