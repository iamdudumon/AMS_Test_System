const sequelize = require("../config/db");

class Manager extends sequelize.Model {}

Manager.init(
  {
    id: {
      type: sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: { type: sequelize.DataTypes.STRING, allowNull: false },
    password: { type: sequelize.DataTypes.STRING(60), allowNull: false },
    name: { type: sequelize.DataTypes.STRING, allowNull: false },
    mobile_number: { type: sequelize.DataTypes.STRING(20), allowNull: false },
    organization_id: { type: sequelize.DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "Manager",
    tableName: "managers",
  }
);

module.exports = Manager;
