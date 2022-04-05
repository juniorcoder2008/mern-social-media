import User from "../models/userSchema.js";
import bcrypt from 'bcrypt';

export const createUser = (req, res) => {
    let data = req.body;

    data.password = bcrypt.hashSync(data.password, 1);

    const newUser = new User(data);

    try {
        newUser.save();

        res.json({ message: 'New user was created!', id: newUser._id });
    } catch (error) {
        res.json({ error: error.message });
    }
}