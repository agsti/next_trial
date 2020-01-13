'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PatientFlows', {
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
      flowId: {
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
      status: {
        type: Sequelize.ENUM('SCHEDULED','IN_PROGRESS','COMPLETED')
      },
      questions_answered: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('PatientFlows');
  }
};