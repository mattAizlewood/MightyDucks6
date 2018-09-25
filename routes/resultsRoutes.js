var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');
var leaderboardControllers = require('../controllers/leaderboardController.js');
var resultsControllers = require('../controllers/resultsController.js');

var router = function (app) {
    app.route('/api/getAllScoreCardResults').get((req, res) => {
        resultsControllers.getAllScoreCardResults(app, req, res);
    });

    app.route('/api/insertScoreCardResults').post((req, res) => {
        resultsControllers.insertScoreCardResults(app, req, res);
    });

    app.route('/api/insertScoreCard').post((req, res) => {
        resultsControllers.insertScoreCard(app, req, res);

    })
}
module.exports = router;