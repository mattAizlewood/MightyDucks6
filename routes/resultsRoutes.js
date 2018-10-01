var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var resultsController = require('../controllers/resultsController.js');
var userControllers = require('../controllers/userController.js');
var leaderboardControllers = require('../controllers/leaderboardController.js');

var router = function(app) {
    
    app.route("/results").get(function(req,res) {
        res.sendFile(path.resolve('views/results.html'));
    });
    
    app.route('/api/getRoundResults').post((req,res) => {
        resultsController.getRoundsults(app,req,res);
    });

    app.route('/api/getUserPredictions').post((req,res) => {
        resultsController.getUserPredictions(app,req,res);
    });

    app.route('/api/getAllRounds').get((req,res) => {
        resultsController.getAllRounds(app,req,res);
    });

    app.route('/api/getAllScoreCardResults').get((req,res) => {
        resultsController.getAllScoreCardResults(app,req,res);
    });

    app.route('/api/insertScoreCardResults').post((req, res) => {
        resultsController.insertScoreCardResults(app, req, res);
    });

    app.route('/api/insertScoreCard').post((req,res) => {
        resultsController.insertScoreCard(app,req,res);
    });

    app.route('/api/getLatestScoreCard').get((req,res) => {
        resultsController.getLatestScoreCard(app,req,res);
    });
    
};

module.exports = router;