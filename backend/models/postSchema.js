import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    auth: {
        name: String,
        _id: String
    },
    postDate: {
        time: String,
        date: String
    }
});

const Post = mongoose.model('PostSchema', postSchema);
export default Post;