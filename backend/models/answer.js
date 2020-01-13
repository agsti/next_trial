'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    flowId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    value: DataTypes.STRING
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.belongsTo(models.flow);
    Answer.belongsTo(models.patient);
  };
  return Answer;
};