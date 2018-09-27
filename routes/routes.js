var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');

var router = function (app) {
    app.route('/login')
    .post((req,res) => userControllers.login(app,req,res))

    app.route('/api/getUser')
    .post((req,res) => userControllers.getUser(app,req,res))
    
    app.route('/registration')
        .post((req, res) => userControllers.register(app, req, res))
};

module.exports = router;
