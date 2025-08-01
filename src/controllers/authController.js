const { registerUser, loginUser } = require('../services/authService');

exports.registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userData = await registerUser({ name, email, password });
        res.status(201).json(userData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await loginUser({ email, password });
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}