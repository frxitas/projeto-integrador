const express = require("express");
const ticketController = require("../controllers/TicketController");
const ticketRoutes = express.Router();

ticketRoutes.route("/list").get(ticketController.all);
ticketRoutes.route("/list/product").get(ticketController.allByProductId);
ticketRoutes.route("/create").post(ticketController.create);
ticketRoutes.route("/retrieve/:id").get(ticketController.one);
ticketRoutes.route("/update/:id").put(ticketController.update);
ticketRoutes.route("/delete/:id").delete(ticketController.delete);
ticketRoutes.route("/count/status").get(ticketController.countTicketsByStatus);

module.exports = ticketRoutes;
