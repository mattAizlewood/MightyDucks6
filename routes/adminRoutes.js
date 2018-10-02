var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');
var leaderboardControllers = require('../controllers/leaderboardController.js');
var calculateScoreControllers = require('../controllers/calculateScoresController');

var router = function(app) {

    app.route('/admin/settings').get((req,res) => {
        res.sendFile(path.resolve('views/settings.html'));
    });
    
};

module.exports = router;