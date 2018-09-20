var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var scorecardsController = require('../controllers/scorecardsController')

var router = function(app) {
    app.route("/scorecard")
    .post((req, res) => scorecardsController.addScorecard(app, req, res));
};

module.exports = router;
