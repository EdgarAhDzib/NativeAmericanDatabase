'use strict';
module.exports = function(sequelize, DataTypes) {
  var source_ref = sequelize.define('source_ref', {
    content_id: DataTypes.INTEGER,
    author: DataTypes.STRING,
    url: DataTypes.STRING,
    contributor: DataTypes.STRING,
    publication: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return source_ref;
};