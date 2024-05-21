const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database.js");

class Manufacturer extends Model {}

Manufacturer.init(
  {
    FABRICANTE_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    FABRICANTE_NOME: {
      type: DataTypes.STRING,
    },
    FABRICANTE_CNPJ: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "PRODUTO_FABRICANTE",
    timestamps: false,
    freezeTableName: true 
  }
);

module.exports = Manufacturer;