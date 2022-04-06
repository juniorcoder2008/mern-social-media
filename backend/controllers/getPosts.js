import Post from '../models/postSchema.js';

export const getPosts = async (req, res) => {
    const posts = await Post.find();

    res.json(posts);
}