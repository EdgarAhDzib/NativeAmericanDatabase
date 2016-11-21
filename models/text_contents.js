'use strict';
module.exports = function(sequelize, DataTypes) {
  var text_contents = sequelize.define('text_contents', {
    item_title: DataTypes.STRING,
    notes: DataTypes.TEXT,
    main_desc: DataTypes.TEXT,
    long_desc: DataTypes.TEXT,
    context: DataTypes.TEXT,
    research_notes: DataTypes.TEXT,
    display: DataTypes.TEXT,
    prim_doc: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        text_contents.hasOne(models.media_source);
        text_contents.hasOne(models.native_group);
        text_contents.hasOne(models.source_ref);
        text_contents.belongsToMany(models.user_info, {through: 'UserContent'});
        text_contents.belongsToMany(models.ethn_fields, {through: 'FieldContent'});
      }
    }
  });
  return text_contents;
};