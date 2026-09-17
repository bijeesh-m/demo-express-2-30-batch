
const express = require("express");
const studentController = require("../controllers/studentController");
const protect = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/students", studentController.getAllStudents)
router.get("/students/:id", studentController.getSingleStudent)
router.post("/students", protect, studentController.addStudent)
router.delete("/students/:id", protect, studentController.deleteStudent)
router.put("/students/:id", protect, studentController.updateStudent)


module.exports = router