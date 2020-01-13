'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flow: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Flows',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
      question: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      patient: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Patients',
            schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
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
    return queryInterface.dropTable('Answers');
  }
};