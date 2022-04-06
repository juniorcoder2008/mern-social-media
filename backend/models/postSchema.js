import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    author: {
        name: String,
        _id: String
    },
    postDate: String,
    likes: Number,
    likesBy: [String],
});

const Post = mongoose.model('PostSchema', postSchema);
export default Post;