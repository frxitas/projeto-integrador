const {Router} = require("express");

const productsRouter = require("./product.routes.js");
const manufacturersRouter = require("./manufacturer.routes.js");
const groupsRouter = require('./group.routes.js');
const unitiesRouter = require('./unity.routes.js');

const routes = Router();

routes.use("/product", productsRouter);
routes.use("/manufacturers", manufacturersRouter);
routes.use("/groups", groupsRouter);
routes.use("/unities", unitiesRouter);


module.exports = routes;