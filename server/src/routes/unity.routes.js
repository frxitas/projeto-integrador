const express = require("express");
const groupsController = require("../controllers/UnitiesController");
const unityRoutes = express.Router();

unityRoutes.route("/").get(groupsController.all);

module.exports = unityRoutes;