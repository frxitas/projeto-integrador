const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

class Product extends Model {}

Product.init(
  {
    PROD_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    PROD_NOME: {
      type: DataTypes.STRING,
    },
    PROD_DESC: {
      type: DataTypes.STRING,
    },
    PROD_VALOR: {
      type: DataTypes.DECIMAL,
    },
    PROD_UMED_ID: {
      type: DataTypes.INTEGER,
    },
    PROD_GRUPO_ID: {
      type: DataTypes.INTEGER,
    },
    PROD_FABRICANTE_ID: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "PRODUTO",
    timestamps: false,
    freezeTableName: true 
  }
);

module.exports = Product;