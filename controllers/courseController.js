
const Course = require("../models/course")

module.exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find()
        res.status(200).json({ success: true, data: courses })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}