const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("ams_test_db", "host", "password", {
  host: "localhost",
  dialect: "mysql",
  // other configuration
});

sequelize.DataTypes = DataTypes;
sequelize.Model = Model;

module.exports = sequelize;
