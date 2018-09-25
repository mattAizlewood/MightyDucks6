var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var scorecardControllers = require('../controllers/scorecardController.js');

var router = function (app) {

    app.route("/scorecard").get(function (req, res) {
        res.sendFile(path.resolve('views/scorecard.html'));
    });

    app.route('/scorecard')
        .get((req, res) => scorecardControllers.populateScorecard(app, req, res))
};

module.exports = router;
