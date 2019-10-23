const User = require("./models/users");
const Company = require("./models/companies");

Company.hasMany(User, { foreignKey: { allowNull: false } });
User.belongsTo(Company, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
