
const express = require("express");
const studentController = require("../controllers/studentController");
const router = express.Router();

router.get("/students",studentController.getAllStudents)
router.get("/students/:id", studentController.getSingleStudent )
router.post("/students",studentController.addStudent)
router.delete("/students/:id",studentController.deleteStudent)
router.put("/students/:id",studentController.updateStudent)


module.exports = router