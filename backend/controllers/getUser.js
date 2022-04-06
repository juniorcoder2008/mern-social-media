import User from "../models/userSchema.js";

export const getUser = async (req, res) => {
    const data = req.body;

    console.log(data);

    const user = await User.findById(data.id);

    res.json(user);
}