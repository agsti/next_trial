'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    flow: DataTypes.INTEGER,
    question: DataTypes.STRING,
    value: DataTypes.STRING,
    patient: DataTypes.INTEGER
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
  };
  return Answer;
};