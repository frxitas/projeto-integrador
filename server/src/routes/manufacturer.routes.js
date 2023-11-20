const express = require("express");
const manufacturersController = require("../controllers/ManufacturersController");
const manufacturerRoutes = express.Router();

manufacturerRoutes.route("/").get(manufacturersController.all);

module.exports = manufacturerRoutes;