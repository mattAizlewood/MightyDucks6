var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');
var resultsControllers = require('../controllers/resultsController');
var predictionsController = require('../controllers/predictionsController.js');

var router = function (app) {
    app.route('/login')
        .post((req, res) => userControllers.login(app, req, res))

    app.route('/registration')
        .post((req, res) => userControllers.register(app, req, res))

    app.route("/predictions")
        .post((req, res) => predictionsController.addPredictions(app, req, res))
};

module.exports = router;
