var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');
var leaderboardControllers = require('../controllers/leaderboardController.js');
var calculateScoreControllers = require('../controllers/calculateScoresController');
var adminControllers = require('../controllers/adminController');

var router = function(app) {

    app.route('/admin/settings').get((req,res) => {
        res.sendFile(path.resolve('views/settings.html'));
    });

    app.route('/api/getAllScoreCards').get((req, res) => {
        adminControllers.getAllScoreCards(app,req,res);
    });

    app.route('/api/getAllScoreCardResults').get((req, res) => {
        adminControllers.getAllScoreCardResults(app,req,res);
    });

    app.route('/api/deleteScoreCard').delete((req,res) => {
        adminControllers.deleteScoreCard(app,req,res);
    });

    app.route('/api/deleteScoreCardResult').delete((req,res) => {
        adminControllers.deleteScoreCardResult(app,req,res);
    });
    
};

module.exports = router;