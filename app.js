var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var routes = require('./routes/routes');
var leaderboardsRoutes = require('./routes/leaderboardsRoutes');
var resultsRoutes = require('./routes/resultsRoutes');
//Import the mongoose module
var MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function (err, client) {

  app.set('myDb', client.db('MightyDucks6'));

});



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./views'));


app.set('views', path.join(__dirname, 'views')); 


app.set('view engine', 'vue');

routes(app);
leaderboardsRoutes(app);
resultsRoutes(app);


app.listen(3000);


