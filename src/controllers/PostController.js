const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    const posts = await Post.findAll({ 
      include: [ 
        { 
          association: 'comments'
        },
      ], // RETORNA TODOS OS COMENTÁRIOS DE CADA POST

      attributes: {
        include: [
            [ 
              Post.sequelize.literal(`(
                  SELECT COUNT(*)
                  FROM comments
                  WHERE comments.post_id = Post.id
              )`),
              'totalComments'
            ]
        ]
      }, // RETORNA O TOTAL DE COMENTÁRIOS DE CADA POST
  });

    return res.json(posts);
  },

  async store(req, res) {
    const { title, body } = req.body;

    const post = await Post.create({ title, body });

    return res.json(post);
  }
};