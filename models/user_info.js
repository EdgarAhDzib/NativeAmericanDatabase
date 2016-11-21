'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_info = sequelize.define('user_info', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    sword_fish: DataTypes.STRING,
    saved_searches: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // hasMany with text_content and media_source?
      }
    }
  });
  return user_info;
};