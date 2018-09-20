var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');
var scorecardsController = require('../controllers/scorecardsController')

var router = function(app) {
    app.route("/scorecard")
    .post((req, res) => scorecardsController.addScorecard(app, req, res));
    
    app.route('/login')
    .post((req,res) => userControllers.viewSingle(app,req,res))
    
    app.route('/registration')
    .post((req,res) => userControllers.register(app,req,res))
    
};

module.exports = router;
