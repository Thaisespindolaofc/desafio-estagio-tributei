const Sequelize = require('sequelize');
const config = require('../config/database');

const Post = require('../models/Post');
const Comment = require('../models/Comment');

const connection = new Sequelize(config);

Post.init(connection);
Comment.init(connection);

Post.associate(connection.models);
Comment.associate(connection.models);

module.exports = connection;