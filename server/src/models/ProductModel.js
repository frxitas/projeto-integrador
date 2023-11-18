const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    um_id: {
      type: DataTypes.INTEGER,
    },
    group_id: {
      type: DataTypes.INTEGER,
    },
    manufacturer_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "product",
    timestamps: false
  }
);

module.exports = Product;