var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var scorecardControllers = require('../controllers/scorecardsController.js');

var router = function (app) {
    app.route("/scorecard").get(function (req, res) {
        res.sendFile(path.resolve('views/scorecard.html'));
    });

    app.route('/api/getSingelScorecard').get((req, res) => {
        scorecardControllers.getSingleScorecard(app, req, res);
    });
};

module.exports = router;