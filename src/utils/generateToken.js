const jwt = require('jsonwebtoken');

const generateToken = (userId, userName) => {
    return jwt.sign({ userId, userName }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
};

module.exports = generateToken;