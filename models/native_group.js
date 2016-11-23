'use strict';
module.exports = function(sequelize, DataTypes) {
  var native_group = sequelize.define('native_group', {
    group_name: DataTypes.STRING,
    alt_name: DataTypes.STRING,
    region: DataTypes.STRING,
    country_one: DataTypes.STRING,
    country_two: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return native_group;
};