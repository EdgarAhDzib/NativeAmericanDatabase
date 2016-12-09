'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_info = sequelize.define('user_info', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    sword_fish: DataTypes.STRING,
    role: DataTypes.STRING,
    draft: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        user_info.belongsToMany(models.media_source, {through: 'UserMedia'});
        user_info.belongsToMany(models.text_contents, {through: 'UserContent'});
        user_info.belongsToMany(models.saved_searches, {through: 'UserSaves'});
      }
    }
  });
  return user_info;
};