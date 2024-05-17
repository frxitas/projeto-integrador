const express = require("express");
const ticketPriorityController = require("../controllers/TicketPriorityController");
const ticketPriorityRoutes = express.Router();

ticketPriorityRoutes.route("/").get(ticketPriorityController.all);
ticketPriorityRoutes.route("/").post(ticketPriorityController.create);
ticketPriorityRoutes.route("/:id").put(ticketPriorityController.update);
ticketPriorityRoutes.route("/:id").delete(ticketPriorityController.delete);

module.exports = ticketPriorityRoutes;
