const express = require("express");
const sequelize = require("./config/database");
const productRoutes = require("./routes/product.routes");
const app = express();


sequelize.sync().then(() => console.log("Banco de dados conectado! 🏦"));

app.use(express.json());

app.use(productRoutes);

app.listen(3000, () => {
  console.log("Server iniciado na porta 3000! 🚀" );
})