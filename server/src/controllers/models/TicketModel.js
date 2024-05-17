const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

class Ticket extends Model {}

Ticket.init(
  {
    TICKET_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    PRODUCT_ID: {
      type: DataTypes.UUID,
    },
    TICKET_CONTACT: {
      type: DataTypes.STRING,
    },
    TICKET_SUBJECT: {
      type: DataTypes.STRING,
    },
    TICKET_DESCRIPTION: {
      type: DataTypes.STRING,
    },
    TICKET_TYPE: {
      type: DataTypes.INTEGER,
    },
    TICKET_STATUS: {
      type: DataTypes.INTEGER,
    },
    TICKET_PRIORITY: {
      type: DataTypes.INTEGER,
    },
    CREATED_AT: {
      type: DataTypes.INTEGER,
    },
    UPDATED_AT: {
      type: DataTypes.INTEGER,
    },
    // FILES: {
    //   type: DataTypes.,
    // },
  },
  {
    sequelize,
    modelName: "TICKET",
    timestamps: false,
    freezeTableName: true,
  },
);

module.exports = Ticket;
