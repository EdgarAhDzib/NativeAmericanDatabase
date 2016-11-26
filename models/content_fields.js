'use strict';
module.exports = function(sequelize, DataTypes) {
  var content_fields = sequelize.define('content_fields', {
    content_id: DataTypes.INTEGER,
    ethn_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        content_fields.belongsToMany(models.text_contents, {through: 'FieldContent'});
      }
    }
  });
  return content_fields;
};