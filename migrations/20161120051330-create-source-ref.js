'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('source_refs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content_id: {
        type: Sequelize.INTEGER
      },
      author: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      contributor: {
        type: Sequelize.STRING
      },
      publication: {
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
    return queryInterface.dropTable('source_refs');
  }
};