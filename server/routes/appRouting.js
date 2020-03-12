const express = require('express')
const AppController = require('../controllers/AppController.js');
const Routing = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({    
  destination: function (req, file, callback) {
    callback(null, './files/uploadedImages');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname.split('.')[0] + "_" + Date.now() + '.' + file.originalname.split('.')[1]);
  }
});

const upload = multer({ storage: storage });


Routing.route("/addUpdateFormContent").post(upload.array('images'), AppController.addUpdateFormContent);
Routing.route("/getTabRelatedList").post(AppController.getTabRelatedList);
Routing.route("/changeState").post(AppController.changeState);
Routing.route("/getContactList").get(AppController.getContactList);
Routing.route("/login").post(AppController.login);

// Routing.route("/getServicesList").post(AppController.getServicesList);
// Routing.route("/getServicesList").get(AppController.getServicesList);
// Routing.route("/getWhyusList").get(AppController.getWhyusList);
// Routing.route("/getAboutList").get(AppController.getAboutList);
// Routing.route("/getGoalsList").get(AppController.getGoalsList);
// Routing.route("/getTechnologyList").get(AppController.getTechnologyList);
// Routing.route("/getPartnersList").get(AppController.getPartnersList);
// Routing.route("/getPortfolioList").get(AppController.getPortfolioList);






module.exports = Routing;