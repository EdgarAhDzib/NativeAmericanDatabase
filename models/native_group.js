'use strict';
module.exports = function(sequelize, DataTypes) {
  var native_group = sequelize.define('native_group', {
    name: DataTypes.STRING,
    region: DataTypes.STRING,
    country: DataTypes.STRING,
    period: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return native_group;
};