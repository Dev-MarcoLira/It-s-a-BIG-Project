'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Posts', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
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
    return queryInterface.dropTable('Posts')
  }
};
