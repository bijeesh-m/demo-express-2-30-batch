const User = require("../models/user");
const jwt = require("jsonwebtoken")


module.exports.register = async (req, res) => {
    try {

        const newUser = await User.create(req.body)
        res.status(201).json({ success: true, message: "Register success!", newUser })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports.login = async (req, res) => {
    try {

        const { username, password } = req.body
        const isUser = await User.findOne({ username })

        if (isUser) {
            const auth = await isUser.matchPassword(password)
            if (auth) {
                const token = jwt.sign({ id: isUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1hr" })
                res.cookie("accessToken", token, { httpOnly: true, secure: false, sameSite: "lax", maxAge: 5 * 60 * 1000 })
                res.status(200).json({ success: true, message: "Login success!" })

            } else {
                res.status(401).json({ success: false, message: "Invalid password" })
            }
        } else {
            res.status(404).json({ success: false, message: "User not found" })
        }

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
