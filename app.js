var fs = require('fs');
var path = require('path');
var express = require('express')
var app = express()
var routes = require('./routes/routes')





app.set('views', path.join(__dirname, 'views')); 

app.set('view engine', 'vue');

routes(app);


app.listen(3000)