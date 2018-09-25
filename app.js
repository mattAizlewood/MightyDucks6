var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var routes = require('./routes/routes');
var scorecardRoutes = require('./routes/scorecardRoutes');

//Import the mongoose module
var MongoClient = require('mongodb').MongoClient;
// var session = require('client-sessions');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function (err, client) {
  app.set('myDb', client.db('MightyDucks6'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./views'));
// app.use(session({
//   cookieName: 'session',
//   secret: 'random_string_goes_here',
//   duration: 30 * 60 * 1000, // how long the session will live in milliseconds
//   activeDuration: 5 * 60 * 1000, //duration extended by interacting with the site
// }));

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'vue');

routes(app);
scorecardRoutes(app);
app.listen(3000);
