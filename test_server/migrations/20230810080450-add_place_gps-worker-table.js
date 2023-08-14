"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return [
      await queryInterface.addColumn("workers", "place_latitude", {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: true,
      }),
      await queryInterface.addColumn("workers", "place_longitude", {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: true,
      }),
      // await queryInterface.renameColumn(
      //   "workers",
      //   "latitude",
      //   "current_latitude"
      // ),
      // await queryInterface.renameColumn(
      //   "workers",
      //   "longitude",
      //   "current_longitude"
      // ),
    ];
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return [
      await queryInterface.removeColumn("workers", "place_latitude"),
      await queryInterface.removeColumn("workers", "place_longitude"),
      // await queryInterface.renameColumn(
      //   "workers",
      //   "current_longitude",
      //   "longitude"
      // ),
      // await queryInterface.renameColumn(
      //   "workers",
      //   "current_longitude",
      //   "longitude"
      // ),
    ];
  },
};
