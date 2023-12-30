const { DataTypes } = require("sequelize");
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
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
})

module.exports = User