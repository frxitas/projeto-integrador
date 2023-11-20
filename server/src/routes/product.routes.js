const express = require("express");
const productsController = require("../controllers/ProductsController");
const productRoutes = express.Router();

productRoutes.route("/list").get(productsController.all);
productRoutes.route("/").post(productsController.create);
productRoutes.route("/:id").get(productsController.one);
productRoutes.route("/:id").put(productsController.update);
productRoutes.route("/:id").delete(productsController.delete);

module.exports = productRoutes;