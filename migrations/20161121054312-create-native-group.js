'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('native_groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_name: {
        type: Sequelize.STRING
      },
      alt_name: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      country_one: {
        type: Sequelize.STRING
      },
      country_two: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('native_groups');
  }
};