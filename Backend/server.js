require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Schema FIRST
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    joinedAt: {
        type: Date,
        default: Date.now
    }
});

// Model AFTER schema
const Student = mongoose.model("Student", StudentSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});