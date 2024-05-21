const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

class TicketStatus extends Model {}

TicketStatus.init(
  {
    TICKET_STATUS_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    TICKET_STATUS_NAME: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "TICKET_STATUS",
    timestamps: false,
    freezeTableName: true 
  }
);

module.exports = TicketStatus;