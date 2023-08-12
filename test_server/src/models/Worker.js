const sequelize = require("../config/db");

class Worker extends sequelize.Model {
  // constructor(
  //   email,
  //   password,
  //   name,
  //   mobile_number,
  //   work_place,
  //   organization_id
  // ) {
  //   super();
  //   this.email = email;
  //   this.password = password;
  //   this.name = name;
  //   this.mobile_number = mobile_number;
  //   this.work_place = work_place;
  //   this.organization_id = organization_id;
  // }
}

Worker.init(
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
    work_place: { type: sequelize.DataTypes.STRING, allowNull: false },
    place_latitude: { type: sequelize.DataTypes.FLOAT, allowNull: true },
    place_longitude: { type: sequelize.DataTypes.FLOAT, allowNull: true },
    current_latitude: { type: sequelize.DataTypes.FLOAT, allowNull: true },
    current_longitude: { type: sequelize.DataTypes.FLOAT, allowNull: true },
    approved: { type: sequelize.DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    sequelize,
    modelName: "Worker",
    tableName: "workers",
  }
);

module.exports = Worker;
