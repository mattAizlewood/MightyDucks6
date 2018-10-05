var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');
var leaderboardControllers = require('../controllers/leaderboardController.js');

var router = function(app) {
    
    app.route("/leaderboards").get(function(req,res) {
        res.sendFile(path.resolve('views/leaderboards.html'));
    });
    
    app.route('/api/getAllLeaderboards').get((req,res) => {
        leaderboardControllers.getAllLeaderboards(app,req,res);
    });
    app.route('/api/getAllOpenLeaderboards').get((req,res) => {
        leaderboardControllers.getAllOpenLeaderboards(app,req,res);
    });

    app.route('/api/getAllUsersGlobalLeaderboard').get((req,res) => {
        leaderboardControllers.getAllPlayersGlobalLeaderboard(app,req,res);
    });

    app.route('/api/insertOpenLeague').post((req,res) => {
        leaderboardControllers.insertOpenLeague(app,req,res);
    });

    app.route('/api/getUserPersona/:userID').get((req,res) => {
        leaderboardControllers.getUserPersona(app,req,res);
    });
    
};

module.exports = router;

function requireLogin (req, res, next) {
    if (!req.user) {
      res.redirect('/login.html');
    } else {
      next();
    }
  };