const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

class TicketType extends Model {}

TicketType.init(
  {
    TICKET_TYPE_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    TICKET_TYPE_NAME: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "TICKET_TYPE",
    timestamps: false,
    freezeTableName: true 
  }
);

module.exports = TicketType;