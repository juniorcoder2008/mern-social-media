import User from '../models/userSchema.js';
import bcrypt from 'bcrypt';

export const loginUser = async (req, res) => {
    const data = req.body;

    console.log('The data:', data);

    const userList = await User.find();
    let user;

    userList.map(item => {
        if(data.email == item.email) {
            user = userList[userList.indexOf(item)];
        }
    })

    console.log('The user:', user);

    if(user) {
        bcrypt.compare(data.password, user.password, (err, result) => {
            res.json({ status: 'ok', id: user._id });
        });
    }
}