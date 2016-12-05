'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('media_sources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content_id: {
        type: Sequelize.INTEGER
      },
      youtube: {
        type: Sequelize.STRING
      },
      image_b64: {
        type: Sequelize.LONGTEXT,
        allowNull: true
      },
      img_ref_1: {
        type: Sequelize.STRING
      },
      img_ref_2: {
        type: Sequelize.STRING
      },
      img_ref_3: {
        type: Sequelize.STRING
      },
      img_ref_4: {
        type: Sequelize.STRING
      },
      museum: {
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
    return queryInterface.dropTable('media_sources');
  }
};