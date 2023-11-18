const Sequelize = require("sequelize");
const sequelize = new Sequelize("test-db", "user", "password", {
  dialect: "sqlite",
  host: "./dev.db",
});

module.exports = sequelize;