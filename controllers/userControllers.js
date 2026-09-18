

const User = require("../models/user")

module.exports.getUsers = async (req, res) => {
    try {

        const { active, gender } = req.query
        console.log(req.query);

        const filter = {};

        if (active) {
            filter.active = active
        }

        if (gender) {
            filter.gender = gender
        }
        const users = await User.find(filter);
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












