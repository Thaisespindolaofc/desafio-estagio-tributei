const { Model, DataTypes } = require('sequelize');

class Post extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      body: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Comment, { foreignKey: 'post_id', as: 'comments' });
    // this.belongsToMany(models.Tech, { foreignKey: 'post_id', through: 'Post_techs', as: 'techs' });
  }
}

module.exports = Post;