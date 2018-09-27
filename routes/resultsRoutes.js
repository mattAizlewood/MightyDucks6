var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var resultsController = require('../controllers/resultsController.js');
var userControllers = require('../controllers/userController.js');
var leaderboardControllers = require('../controllers/leaderboardController.js');
<<<<<<< HEAD
var resultsControllers = require('../controllers/resultsController');

var router = function (app) {
    app.route('/api/getAllScoreCardResults').get((req, res) => {
        resultsControllers.getAllScoreCardResults(app, req, res);
=======

var router = function(app) {
    
    app.route("/results").get(function(req,res) {
        res.sendFile(path.resolve('views/results.html'));
    });
    
    app.route('/api/getRoundResults').post((req,res) => {
        resultsController.getRoundResults(app,req,res);
    });

    app.route('/api/getUserPredictions').post((req,res) => {
        resultsController.getUserPredictions(app,req,res);
    });

    app.route('/api/getAllRounds').get((req,res) => {
        resultsController.getAllRounds(app,req,res);
    });

    app.route('/api/getAllScoreCardResults').get((req,res) => {
        resultsControllers.getAllScoreCardResults(app,req,res);
>>>>>>> Cheng
    });

    app.route('/api/insertScoreCardResults').post((req, res) => {
        resultsControllers.insertScorecardResults(app, req, res);
    });

    app.route('/api/insertScoreCard').post((req,res) => {
        resultsControllers.insertScoreCard(app,req,res);
    });

    app.route('/api/getLatestScoreCard').get((req,res) => {
        resultsControllers.getLatestScoreCard(app,req,res);
    });
    
};

module.exports = router;