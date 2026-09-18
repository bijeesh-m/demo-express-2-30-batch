
const express = require("express");
const studentController = require("../controllers/studentController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/students", studentController.getAllStudents)
router.get("/students/:id", studentController.getSingleStudent)
router.post("/students", authMiddleware.protect, authMiddleware.authorize("admin"), studentController.addStudent)
router.delete("/students/:id", authMiddleware.protect, authMiddleware.authorize("admin"), studentController.addStudent, studentController.deleteStudent)
router.put("/students/:id", authMiddleware.protect, authMiddleware.authorize("admin"), studentController.addStudent, studentController.updateStudent)


module.exports = router