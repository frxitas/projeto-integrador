const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

class TicketPriority extends Model {}

TicketPriority.init(
  {
    TICKET_PRIORITY_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    TICKET_PRIORITY_NAME: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "TICKET_PRIORITY",
    timestamps: false,
    freezeTableName: true 
  }
);

module.exports = TicketPriority;