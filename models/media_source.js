'use strict';
module.exports = function(sequelize, DataTypes) {
  var media_source = sequelize.define('media_source', {
    content_id: DataTypes.INTEGER,
    img_ref_1: DataTypes.STRING,
    img_ref_2: DataTypes.STRING,
    img_ref_3: DataTypes.STRING,
    img_ref_4: DataTypes.STRING,
    museum: DataTypes.STRING,
    museum_link: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return media_source;
};