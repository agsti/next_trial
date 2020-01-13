'use strict';
module.exports = (sequelize, DataTypes) => {
  const PatientTrial = sequelize.define('PatientTrial', {
    patient: DataTypes.INTEGER,
    trial: DataTypes.INTEGER
  }, {});
  PatientTrial.associate = function(models) {
    // associations can be defined here
  };
  return PatientTrial;
};