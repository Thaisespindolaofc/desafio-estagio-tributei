const express = require('express');

const PostController = require('./controllers/PostController');
const CommentController = require('./controllers/CommentController');

const routes = express.Router();

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);

routes.get('/posts/:post_id/comments', CommentController.index);
routes.post('/posts/:post_id/comments', CommentController.store);

module.exports = routes;