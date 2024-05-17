const { Router } = require("express");

const productsRouter = require("./product.routes.js");
const ticketRouter = require("./ticket.routes.js");
const ticketStatusRouter = require("./ticketStatus.routes.js");
const ticketTypeRouter = require("./ticketType.routes.js");
const ticketPriorityRouter = require("./ticketPriority.routes.js");
const manufacturersRouter = require("./manufacturer.routes.js");
const groupsRouter = require("./group.routes.js");
const unitiesRouter = require("./unity.routes.js");

const routes = Router();

routes.use("/product", productsRouter);
routes.use("/ticket", ticketRouter);
routes.use("/ticket/status", ticketStatusRouter);
routes.use("/ticket/types", ticketTypeRouter);
routes.use("/ticket/priority", ticketPriorityRouter);
routes.use("/manufacturers", manufacturersRouter);
routes.use("/groups", groupsRouter);
routes.use("/unities", unitiesRouter);

module.exports = routes;
