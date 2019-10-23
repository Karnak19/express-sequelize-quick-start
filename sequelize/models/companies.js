const Sequelize = require("sequelize");
const sequelize = require("../index");

const Team = sequelize.define(
  "Team",
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    logo: {
      type: Sequelize.STRING,
      allowNull: true
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {}
);

module.exports = Team;
