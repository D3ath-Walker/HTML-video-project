require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const Student = require("./models/student");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.post("/progress", async (req, res) => {

    try{

        const student = await Student.findOneAndUpdate(

            {
                email: req.body.email
            },

            {
                completedVideos: req.body.completedVideos
            },

            {
                new: true
            }
        );

        res.json(student);

    }
    catch(error){

        res.status(500).json({
            message: error.message
        });
    }
});

app.post("/students", async (req, res) => {

    try{

        let student = await Student.findOne({
            email: req.body.email
        });

        if(!student){

            student = await Student.create({
                name: req.body.name,
                email: req.body.email,
                course: req.body.course,
                college: req.body.college
            });
        }

        res.status(200).json(student);

    }
    catch(error){

        res.status(500).json({
            message: error.message
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});