const UserService = require("../services/user.service");

const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        await UserService.register({ username, password });

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Registration failed" });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const token = await UserService.login({ username, password });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Login failed" });
    }
};

module.exports = {
    register,
    login,
};
