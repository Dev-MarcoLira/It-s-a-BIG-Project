const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: 'Users',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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
  updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      onUpdate: new Date()        
  }
});

module.exports = Post;