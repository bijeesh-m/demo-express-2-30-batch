const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    name: String,
    duration: String,
    mode: String,
    modules: Number
})

const Course = mongoose.model("courses", courseSchema);
module.exports = Course