const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses"
    }
})

const Student = mongoose.model("students", studentSchema)
module.exports = Student