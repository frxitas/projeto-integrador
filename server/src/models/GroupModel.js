const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

class Group extends Model {}

Group.init(
  {
    GRUPO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    GRUPO_NOME: {
      type: DataTypes.STRING,
    },
    GRUPO_DESC: {
      type: DataTypes.STRING,
    },
    GRUPO_CATEGORIA_ID: {
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    modelName: "PRODUTO_GRUPO",
    timestamps: false,
    freezeTableName: true 
  }
);

module.exports = Group;