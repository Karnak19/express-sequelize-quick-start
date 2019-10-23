const Sequelize = require("sequelize");
const sequelize = require("../index");

const User = sequelize.define(
  "User",
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {}
);

module.exports = User;
