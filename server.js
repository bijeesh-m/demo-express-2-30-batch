const express = require("express");
const mongoose = require("mongoose")
const dns = require("dns")
const userRoutes = require("./routes/userRoutes")
const studentRoutes = require("./routes/studentRoutes")
const courseRoutes = require("./routes/courseRoutes")
const authRoutes = require("./routes/authRoutes")
const cookieParser = require("cookie-parser")
const app = express();

require("dotenv").config()

dns.setServers(["8.8.8.8"]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("DB ERROR:", error);
  }
};

connectDB();


app.use(express.json())
app.use(cookieParser())

app.use(userRoutes)
app.use("/auth", authRoutes)
app.use(studentRoutes)
app.use(courseRoutes)



app.listen(5000, () => {
  console.log("Express server is running...");
})


