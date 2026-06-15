const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    course: {
        type: String,
        required: true
    },

    college: {
        type: String,
        required: true
    },

    completedVideos: {
        type: [Number],
        default: []
    }

});

module.exports = mongoose.model("Student", StudentSchema);