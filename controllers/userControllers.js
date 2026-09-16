
let users = require("../users.json")


module.exports.getUsers = (req, res) => {
    try {
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
}

module.exports.createUser = (req, res) => {
    try {
        users.push(req.body)
        res.status(201).json({ success: true, data: users })
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
}












