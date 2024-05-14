const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database.js");

class Unity extends Model {}

Unity.init(
  {
    UMED_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    UMED_NOME: {
      type: DataTypes.STRING,
    },
    UMED_DESC: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "PRODUTO_UNIDADE_MEDIDA",
    timestamps: false,
    freezeTableName: true 
  }
);

module.exports = Unity;