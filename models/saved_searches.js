'use strict';
module.exports = function(sequelize, DataTypes) {
  var saved_searches = sequelize.define('saved_searches', {
    user_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        saved_searches.belongsToMany(models.user_info, {through: 'UserSaves'});
        saved_searches.belongsToMany(models.text_contents, {through: 'ContentSaves'});
      }
    }
  });
  return saved_searches;
};