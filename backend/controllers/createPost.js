import Post from "../models/postSchema.js";

export const createPost = (req, res) => {
    const data = req.body;

    const newPost = new Post(data);

    try {
        newPost.save();

        res.json({ status: 'ok' });
    } catch (error) {
        res.json({ status: 'error', message: error.message });
    }
}