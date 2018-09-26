var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var resultsController = require('../controllers/resultsController.js');

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
    
};

module.exports = router;