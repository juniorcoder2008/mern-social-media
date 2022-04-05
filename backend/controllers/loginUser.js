import User from '../models/userSchema.js';
import bcrypt from 'bcrypt';

export const loginUser = async (req, res) => {
    const data = req.body;

    const user = await User.findOne(data.name);

    if(user) {
        bcrypt.compare(data.password, user.password, (err, result) => {
            res.json({ status: 'ok', id: user._id });
        });
    }

    /* User.exists(data).then(info => {
        if(info) {
            console.log(info)
            res.json({ status: 'ok', id: info });
        } else {
            res.json({ status: 'error' });
        }
    }); */
}