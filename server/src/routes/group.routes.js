const express = require("express");
const groupsController = require("../controllers/GroupsController");
const groupRoutes = express.Router();

groupRoutes.route("/").get(groupsController.all);

module.exports = groupRoutes;