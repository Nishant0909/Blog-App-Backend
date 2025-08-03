const express = require('express');
const router = express.Router();
const { registerController, loginController } = require('../controllers/authController');

router.post('/register', registerController);
router.post('/login', loginController);
router.post("/logout", (req, res) => {
  return res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;