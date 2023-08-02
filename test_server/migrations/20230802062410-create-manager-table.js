"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("managers", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      email: { type: Sequelize.STRING, allowNull: false },
      password: { type: Sequelize.STRING(60), allowNull: false },
      name: { type: Sequelize.STRING, allowNull: false },
      mobile_number: { type: Sequelize.STRING(20), allowNull: false },
      organization_id: { type: Sequelize.INTEGER, allowNull: false },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("managers");
  },
};
