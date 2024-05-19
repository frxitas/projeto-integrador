const express = require("express");
const ticketTypeController = require("../controllers/TicketTypeController");
const ticketTypeRoutes = express.Router();

ticketTypeRoutes.route("/").get(ticketTypeController.all);
ticketTypeRoutes.route("/:id").get(ticketTypeController.one);
ticketTypeRoutes.route("/").post(ticketTypeController.create);
ticketTypeRoutes.route("/:id").put(ticketTypeController.update);
ticketTypeRoutes.route("/:id").delete(ticketTypeController.delete);

module.exports = ticketTypeRoutes;
