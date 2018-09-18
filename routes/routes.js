var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');
var leaderboardControllers = require('../controllers/leaderboardController.js');

var router = function(app) {
    //put all the routes
    app.route("/login").get(function(req,res) {
        res.sendFile(path.resolve('views/login.html'));
    });
    app.route("/registration").get(function(req,res) {
        res.sendFile(path.resolve('views/registration.html'));
    });
    
    app.route('/api/getAllLeaderboards').get((req,res) => {
        leaderboardControllers.getAllLeaderboards(app,req,res);
    });
    
};

module.exports = router;