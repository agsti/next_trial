'use strict';
module.exports = (sequelize, DataTypes) => {
  const PatientInfo = sequelize.define('PatientInfo', {
    name: DataTypes.STRING,
    value: DataTypes.STRING
  }, {});
  PatientInfo.associate = function(models) {
    // associations can be defined here
    PatientInfo.belongsTo(models.patient)
  };
  return PatientInfo;
};