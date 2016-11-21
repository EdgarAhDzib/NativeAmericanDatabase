'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('text_contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_title: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
      },
      main_desc: {
        type: Sequelize.TEXT
      },
      long_desc: {
        type: Sequelize.TEXT
      },
      context: {
        type: Sequelize.TEXT
      },
      research_notes: {
        type: Sequelize.TEXT
      },
      display: {
        type: Sequelize.TEXT
      },
      prim_doc: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('text_contents');
  }
};