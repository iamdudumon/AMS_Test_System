"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("organization", {
      id: { type: Sequelize.INTEGER, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      mobile_number: { type: Sequelize.STRING(20), allowNull: false },
      address: { type: Sequelize.STRING, allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("organization");
  },
};
