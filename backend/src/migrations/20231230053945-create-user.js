'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: Sequelize.TEXT,
          allowNull: false
      },
      createdAt: {
          type: Sequelize.DATE,
          defaultValue: new Date()
      },
      updatedAt: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
          onUpdate: new Date()        
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
