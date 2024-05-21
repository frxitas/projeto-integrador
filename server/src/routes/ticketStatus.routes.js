const express = require("express");
const ticketStatusController = require("../controllers/TicketStatusController");
const ticketStatusRoutes = express.Router();

ticketStatusRoutes.route("/").get(ticketStatusController.all);
ticketStatusRoutes.route("/").post(ticketStatusController.create);
ticketStatusRoutes.route("/:id").put(ticketStatusController.update);
ticketStatusRoutes.route("/:id").delete(ticketStatusController.delete);

module.exports = ticketStatusRoutes;
