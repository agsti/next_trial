'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flow = sequelize.define('Flow', {
    trial: DataTypes.STRING,
    day: DataTypes.INTEGER,
    representation: DataTypes.JSON
  }, {});
  Flow.associate = function(models) {
    // associations can be defined here
  };
  return Flow;
};