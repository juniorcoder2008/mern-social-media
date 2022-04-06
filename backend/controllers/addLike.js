import Post from '../models/postSchema.js';

export const addLike = async (req, res) => {
    const data = req.body;

    await Post.findByIdAndUpdate(data._id, data);
}