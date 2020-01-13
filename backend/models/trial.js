'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trial = sequelize.define('Trial', {
    name: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN
  }, {});
  Trial.associate = function(models) {
    // associations can be defined here
  };
  return Trial;
};