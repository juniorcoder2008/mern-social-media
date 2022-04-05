import User from "../models/userSchema";

export const createUser = (req, res) => {
    const data = req.body;

    const newUser = new User(data);

    try {
        newUser.save();

        res.json({ message: 'New user was created!' });
    } catch (error) {
        res.json({ error: error.message });
    }
}