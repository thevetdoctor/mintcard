'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('games', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID
      },
      uniqueid: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      winner: {
        type: Sequelize.STRING
      },
      player: {
        type: Sequelize.STRING
      },
      opponent: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.JSONB
      },
      completed: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('games');
  }
};