const express = require("express");
const mailController = require("../controllers/MailController");
const mailRoutes = express.Router();

mailRoutes.route("/").post(mailController.sendMail);

module.exports = mailRoutes;
