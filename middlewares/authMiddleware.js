
const jwt = require("jsonwebtoken")


const protect = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        next()
    } catch (error) {
        if (error.message === "jwt expired") {
            return res.status(401).json({ success: false, message: "Token Expired!" })
        }
        res.status(403).json({ success: false, message: "Invalid token" })
    }
}



module.exports = protect