const express = require("express");
const sequelize = require("./config/database");
const routes = require("./routes");
const app = express();


sequelize.sync().then(() => console.log("Banco de dados conectado! 🏦"));

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permitir solicitações de qualquer origem
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
  res.header('Access-Control-Allow-Headers', '*');

  next();
})

app.use(routes);

app.listen(3000, () => {
  console.log("Server iniciado na porta 3000! 🚀" );
})