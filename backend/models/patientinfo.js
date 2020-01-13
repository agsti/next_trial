'use strict';
module.exports = (sequelize, DataTypes) => {
  const PatientInfo = sequelize.define('PatientInfo', {
    patient: DataTypes.INTEGER,
    name: DataTypes.STRING,
    value: DataTypes.STRING
  }, {});
  PatientInfo.associate = function(models) {
    // associations can be defined here
  };
  return PatientInfo;
};