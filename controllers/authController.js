const User = require("../models/user");



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
