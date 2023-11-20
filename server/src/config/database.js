const Sequelize = require("sequelize");
const sequelize = new Sequelize("test-db", "user", "password", {
  dialect: "sqlite",
  host: "../database/ProjIntegr.db",
});

module.exports = sequelize;