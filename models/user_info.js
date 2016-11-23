'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_info = sequelize.define('user_info', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    sword_fish: DataTypes.STRING,
    saved_searches: DataTypes.TEXT,
    role: DataTypes.STRING,
    draft: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        user_info.belongsToMany(models.media_source, {through: 'UserMedia'});
        user_info.belongsToMany(models.text_contents, {through: 'UserContent'});
      }
    }
  });
  return user_info;
};