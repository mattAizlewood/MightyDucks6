var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');
var scorecardControllers = require('../controllers/scorecardController.js');
var predictionsController = require('../controllers/predictionsController.js');
 
var router = function(app) {
    app.route('/login')
    .post((req,res) => userControllers.login(app,req,res))
    
    app.route('/registration')
    .post((req,res) => userControllers.register(app,req,res))

    app.route('/scorecard')
    .get((req,res) => scorecardControllers.populateScorecard(app,req,res))

    app.route("/predictions")
    .post((req, res) => predictionsController.addPredictions(app, req, res));    
};

module.exports = router;
