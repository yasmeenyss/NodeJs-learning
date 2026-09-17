const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Notice title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },

    description: {
        type: String,
        required: [true, "Notice description is required"]
    },

    postedBy: {
        type: String,
        required: [true, "Posted by is required"]
    },

    date: {
        type: Date,
        default: Date.now
    }

});

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;


