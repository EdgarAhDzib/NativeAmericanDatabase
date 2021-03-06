'use strict';
module.exports = function(sequelize, DataTypes) {
  var ethn_fields = sequelize.define('ethn_fields', {
    name: DataTypes.STRING,
    main_topic: DataTypes.STRING,
    subtopic: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        ethn_fields.belongsToMany(models.text_contents, {through: 'FieldContent'});
      }
    }
  });
  return ethn_fields;
};