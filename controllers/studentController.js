const Student = require("../models/students")

module.exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().populate("course")
        res.status(200).json({ success: true, data: students })
    } catch (error) {
        res.status(500).json({ message: "Error occured", success: false })
    }
}

module.exports.getSingleStudent = async (req, res) => {
    try {
        const studentId = req.params.id
        const student = await Student.findById(studentId).populate("course")

        if (!student) {
            res.status(404).json({ message: "Student Not Found", success: false })
        } else {
            res.status(200).json({ success: true, data: student })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occured", success: false })
    }
}

module.exports.addStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body)
        res.status(200).json({ success: true, data: newStudent })

    } catch (error) {
        res.status(500).json({ message: "Error occured", success: false })

    }
}

module.exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params
        await Student.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: `Student with ${id} was deleted` })

    } catch (error) {
        res.status(500).json({ message: "Error occured", success: false })
    }
}

module.exports.updateStudent = async (req, res) => {
    const { name, age, email, course } = req.body
    try {
        const { id } = req.params
        await Student.findByIdAndUpdate(id, {
            $set: {
                name: name && name,
                age: age && age,
                email: email && email,
                course: course && course
            }
        })
        res.status(200).json({ success: true, message: `Student with ${id} was updated!` })
    } catch (error) {
        console.log("ERROR :",error);
        res.status(500).json({ message:error.message, success: false })
    }
}