var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var routes = require('./routes/routes');
var predictionRoutes = require('./routes/predictionRoutes');
var leaderboardsRoutes = require('./routes/leaderboardsRoutes');
var resultsRoutes = require('./routes/resultsRoutes');
var calculateLogicRoutes = require('./routes/calculateLogicRoutes');
var adminRoutes = require('./routes/adminRoutes');
//Import the mongoose module
var MongoClient = require('mongodb').MongoClient;
var session = require('client-sessions');

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function (err, client) {
  app.set('myDb', client.db('MightyDucks6'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./views'));

app.use(session({
  cookieName: 'session',
  secret: 'secretString',
  duration: 30 * 60 * 1000, // how long the session will live in milliseconds
  activeDuration: 5 * 60 * 1000, //duration extended by interacting with the site
}));

app.use(function(req, res, next) {
  if (req.session && req.session.user) {
    app.get('myDb').collection('userCollection').findOne({"email": req.session.user.email},function (err, user) {
      if (user) {
        req.user = user;
        delete req.user.password; // delete the password from the session
        req.session.user = user;  //refresh the session value
        res.locals.user = user;
      }
      // finishing processing the middleware and run the route
      next();
    });
  } else {
    next();
  }
});

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'vue');

routes(app);
leaderboardsRoutes(app);
predictionRoutes(app);
resultsRoutes(app);
calculateLogicRoutes(app);
adminRoutes(app);

app.listen(3000);
