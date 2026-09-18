
const jwt = require("jsonwebtoken")


module.exports.protect = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        console.log(decoded);
        req.user = decoded
        next()
    } catch (error) {
        if (error.message === "jwt expired") {
            return res.status(401).json({ success: false, message: "Token Expired!" })
        }
        res.status(403).json({ success: false, message: "Invalid token" })
    }
}

module.exports.authorize = (...allowedRoles ) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Access denied",
            });
        }

        next();
    };
};





