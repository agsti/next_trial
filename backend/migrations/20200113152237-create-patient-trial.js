'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PatientTrials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientId: {
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
      trialId: {
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
    return queryInterface.dropTable('PatientTrials');
  }
};