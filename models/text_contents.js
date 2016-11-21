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
        // This may be the only table that requires association,
        // but perhaps native_group and ethn_field will belongToMany
      }
    }
  });
  return text_contents;
};