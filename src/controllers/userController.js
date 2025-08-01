exports.getCurrentUser = async (req, res) => {
    try {
        const user = req.user;  // set by authMiddleware
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } catch(err) {
        res.status(500).json({ message: "Server error" });
    }
}