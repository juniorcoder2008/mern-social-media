import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    password: String,
    uid: String,
    id: Number
});

const User = mongoose.model('UserSchema', userSchema);

export default User;