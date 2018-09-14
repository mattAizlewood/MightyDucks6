var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");

var router = function(app) {
    //put all the routes
    app.route("/index").get(function(req, res) {
        res.sendFile(path.resolve('views/index.html'));
    });
    app.route("/login").get(function(req, res) {
        res.sendFile(path.resolve('views/login.html'));
    });
    app.route("/registration").get(function(req, res) {
        res.sendFile(path.resolve('views/registration.html'));
    });
    app.route("/scorecards").get(function(req, res) {
        res.sendFile(path.resolve('views/scorecards.html'));
    });
};

module.exports = router;