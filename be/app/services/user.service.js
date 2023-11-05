const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const register = async ({ username, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    return user.save();
};

const login = async ({ username, password }) => {
    const user = await User.findOne({ username });

    if (!user) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

    return token;
};

module.exports = {
    register,
    login,
};
