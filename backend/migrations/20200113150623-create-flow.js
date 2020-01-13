'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Flows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trial: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Trials',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      day: {
        type: Sequelize.INTEGER
      },
      representation: {
        type: Sequelize.JSON
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Flows');
  }
};