import Auth from "../models/authModel.js";

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await Auth.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = await Auth.create({ name, email, password });
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Failed to create user", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await Auth.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (await user.comparePassword(password)) {
            const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
            res.status(200).json({ message: "Login successful", token: token });
        } else {
            res.status(401).json({ message: "Incorrect password" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to login", error: error.message });
    }
};

export { signup, login };