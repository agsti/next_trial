'use strict';
module.exports = (sequelize, DataTypes) => {  
  const Flow = sequelize.define('Flow', {
    trialId: DataTypes.STRING,
    day: DataTypes.INTEGER,
    representation: DataTypes.JSON
  }, {});
  Flow.associate = function(models) {
    // associations can be defined here
    Flow.belongsTo(models.Trial);
    Flow.belongsToMany(models.Patient, {through: "PatientFlow"})
  };
  return Flow;
};