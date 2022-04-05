import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    password: String,
    uid: Number,
    id: Number,
    email: String
});

const User = mongoose.model('UserSchema', userSchema);

export default User;