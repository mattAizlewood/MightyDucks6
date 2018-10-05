var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');
var leaderboardControllers = require('../controllers/leaderboardController.js');
var calculateScoreControllers = require('../controllers/calculateScoresController');

var router = function(app) {

    app.route('/settings').get(requireLogin,(req,res) => {
        res.sendFile(path.resolve('views/settings.html'));
    });

    app.route('/insertScoreCard').get(requireLogin,(req,res) => {
      res.sendFile(path.resolve('views/insertScoreCard.html'));
    });

    app.route('/insertScorecardResults').get(requireLogin,(req,res) => {
      res.sendFile(path.resolve('views/insertScorecardResults.html'));
    });
    
};

module.exports = router;

function requireLogin (req, res, next) {
    if (!req.user) {
      res.redirect('/login.html');
    } else {
      next();
    }
  };