var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');
var scorecardControllers = require('../controllers/scorecardController.js')
 
var router = function(app) {
    app.route('/login')
    .post((req,res) => userControllers.login(app,req,res))
    
    app.route('/registration')
    .post((req,res) => userControllers.register(app,req,res))

    app.route("/scorecard")
    .post((req, res) => scorecardControllers.addScorecard(app, req, res));    
};

module.exports = router;
