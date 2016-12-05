'use strict';
module.exports = function(sequelize, DataTypes) {
  var media_source = sequelize.define('media_source', {
    content_id: DataTypes.INTEGER,
    youtube: DataTypes.STRING,
    image_b64: DataTypes.LONGTEXT,
    img_ref_1: DataTypes.STRING,
    img_ref_2: DataTypes.STRING,
    img_ref_3: DataTypes.STRING,
    img_ref_4: DataTypes.STRING,
    museum: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        media_source.belongsToMany(models.user_info, {through: 'UserMedia'});
      }
    }
  });
  return media_source;
};