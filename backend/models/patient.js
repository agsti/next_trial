'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    createdOn: DataTypes.DATE,
    modifiedon: DataTypes.DATE
  }, {});
  Patient.associate = function(models) {
    // associations can be defined here
    Patient.belongsToMany(models.flow, {through: 'PatientFlow'})
    Patient.belongsToMany(models.trial, {through: 'PatientTrial'})
    Patient.hasMany(models.patient)
  };
  return Patient;
};