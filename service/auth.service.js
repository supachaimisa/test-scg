const jwt = require('jsonwebtoken');
require('dotenv').config()
const getToken = (_pass) => {
    const token = jwt.sign({
        pass: _pass
    }, process.env.SECRET_KEY, { expiresIn: '30d' });
    return token
}

const verifyToken = (req,res,next) => {
    const token = req.get("Authorization")
    try {
        if (!token) {
            throw new Error("Unauthorized Access")
        }
        jwt.verify(token, process.env.SECRET_KEY)
        next()
    } catch (e) {
        throw new Error("Unauthorized Access")
    }
}

module.exports.getToken = getToken
module.exports.verifyToken = verifyToken