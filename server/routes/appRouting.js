const express = require('express')
const AppController = require('../controllers/AppController.js');

const Routing = express.Router();

// Routing.route("/updateFormContent").post(AppController.updateFormContent);
Routing.route("/addFormContent").post(AppController.addFormContent);
Routing.route("/getServicesList").get(AppController.getServicesList);

Routing.route("/getWhyusList").get(AppController.getWhyusList);
Routing.route("/getAboutList").get(AppController.getAboutList);

Routing.route("/getContactList").get(AppController.getContactList);
Routing.route("/getGoalsList").get(AppController.getGoalsList);



module.exports = Routing;