var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var predictionsController = require('../controllers/predictionsController.js');

var router = function (app) {
    app.route("/predictions").get(function (req, res) {
        res.sendFile(path.resolve('views/predictions.html'));
    });

    app.route("/insertUserPredictions").post((req, res) => {
        predictionsController.insertUserPredictions(app, req, res);
    });

    app.route('/getAllUserPredictions').get((req, res) => {
        predictionsController.getAllUserPredictions(app, req, res);
    });

    app.route('/getLatestUserPredictions').post((req, res) => {
        predictionsController.getLatestUserPredictions(app, req, res);
    });
};
module.exports = router;
