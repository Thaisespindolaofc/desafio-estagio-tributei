const Post = require('../models/Post');
const Comment = require('../models/Comment');

module.exports = {
  async index(req, res) {
    const { post_id } = req.params;

    const post = await Post.findByPk(post_id, {
      include: { association: 'comments' }
    });

    if (!post) {
      return res.status(400).json({ error: 'Post não encontrado' });
    }

    return res.json(post.comments);
  },

  async store(req, res) {
    const { post_id } = req.params;
    const { message } = req.body;

    const post = await Post.findByPk(post_id);

    if (!post) {
      return res.status(400).json({ error: 'Post não encontrado' });
    }

    const comment = await Comment.create({
      message,
      post_id
    });

    return res.json(comment);
  }
};