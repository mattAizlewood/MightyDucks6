var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');
var leaderboardControllers = require('../controllers/leaderboardController.js');
var calculateScoreControllers = require('../controllers/calculateScoresController');

var router = function(app) {

    app.route('/api/calculateScoreForLeaderboard').get((req,res) => {
        calculateScoreControllers.updateAllScores(app,req,res);
    });
    
};

module.exports = router;