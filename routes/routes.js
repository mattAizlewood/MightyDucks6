var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");
var userControllers = require('../controllers/userController.js');

var router = function (app) {
    app.route('/login')
    .post((req,res) => userControllers.login(app,req,res))

    app.route('/api/getUser')
    .get((req,res) => userControllers.getUser(app,req,res))
    
    app.route('/registration')
        .post((req, res) => userControllers.register(app, req, res))

    app.route('/api/logout')
    .get((req,res) => userControllers.logout(app,req,res))
};

module.exports = router;
