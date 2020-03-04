const express = require('express')
const AppController = require('../controllers/AppController.js');

const Routing = express.Router();

Routing.route("/updateFormContent").post(AppController.updateFormContent);
Routing.route("/addFormContent").post(AppController.addFormContent);
Routing.route("/getServicesList").get(AppController.getServicesList);
Routing.route("/getWhyusList").get(AppController.getWhyusList);
Routing.route("/getAboutList").get(AppController.getAboutList);
Routing.route("/getContactList").get(AppController.getContactList);
Routing.route("/getGoalsList").get(AppController.getGoalsList);
Routing.route("/getTechnologyList").get(AppController.getTechnologyList);
Routing.route("/getPartnersList").get(AppController.getPartnersList);
Routing.route("/getPortfolioList").get(AppController.getPortfolioList);

Routing.route("/login").post(AppController.login);




module.exports = Routing;