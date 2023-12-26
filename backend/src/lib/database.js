const sequelize = require('../config/sequelize')
const Post = require('../models/Post')
const User = require('../models/User')

function initializeDatabase(){
    sequelize
        .authenticate()
        .then(() => {
            return sequelize.sync({ force: true }); // Use force: true to drop existing tables
            })
        .then(() => {
            console.log('Models synchronized with the database.');
            Post.belongsTo(User)
            User.hasMany(Post)
        })
        .catch((error) => {
            console.error('Unable to connect to the database:', error);
        });

    return { User, Post }
}

module.exports = initializeDatabase