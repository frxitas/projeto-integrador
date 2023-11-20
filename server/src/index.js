const express = require("express");
const sequelize = require("./config/database");
const routes = require("./routes");
const app = express();


sequelize.sync().then(() => console.log("Banco de dados conectado! 🏦"));

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log("Server iniciado na porta 3000! 🚀" );
})