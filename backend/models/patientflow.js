'use strict';
module.exports = (sequelize, DataTypes) => {
  const PatientFlow = sequelize.define('PatientFlow', {
    patient: DataTypes.INTEGER,
    flow: DataTypes.INTEGER,
    status: DataTypes.ENUM,
    questions_answered: DataTypes.INTEGER
  }, {});
  PatientFlow.associate = function(models) {
    // associations can be defined here
    PatientFlow.belongsTo(models.patient);
    PatientFlow.belongsTo(models.flow);
  };
  return PatientFlow;
};