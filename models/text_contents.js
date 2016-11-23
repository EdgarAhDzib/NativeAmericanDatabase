'use strict';
module.exports = function(sequelize, DataTypes) {
  var text_contents = sequelize.define('text_contents', {
    item_title: DataTypes.STRING,
    item_id: DataTypes.STRING,
    group: DataTypes.STRING,
    period: DataTypes.STRING,
    notes: DataTypes.TEXT,
    main_desc: DataTypes.TEXT,
    long_desc: DataTypes.TEXT,
    context: DataTypes.TEXT,
    research_notes: DataTypes.TEXT,
    display: DataTypes.TEXT,
    prim_doc: DataTypes.TEXT,
    if_published: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        text_contents.hasOne(models.media_source);
        text_contents.hasOne(models.source_ref);
        text_contents.belongsToMany(models.user_info, {through: 'UserContent'});
        text_contents.belongsToMany(models.ethn_fields, {through: 'FieldContent'});
      }
    }
  });
  return text_contents;
};