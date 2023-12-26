const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
  },
  modifiedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      onUpdate: new Date()        
  }
});

module.exports = Post;