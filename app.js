var fs = require('fs');
var path = require('path');
var express = require('express')
var app = express()
var routes = require('./routes/routes')

var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/MightyDucks6";

// //Connect to MightyDucks6 and insert a second record into 'Users'
// mongoClient.connect(url, { useNewUrlParser: true }, function (error, db) {
//     if (error) {
//         throw error;
//     }

//     var md6DB = db.db("MightyDucks6");

//     var userRecord = {
//         UserID: 2,
//         Name: 'Paul Roderick',
//         Email: 'PaulRoderick@hotmail.com',
//         Persona: 'PaulsHotRod92',
//         Password: 'Calgary1989',
//         Salt: '',
//         Country: 'Canada'
//     };

//     md6DB.collection("Users").insertOne(userRecord, function (error, response) {
//         if (error) {
//             throw error;
//         }
//         console.log(response.userRecord)
//         db.close();
//     });
// });

//Connect to MightyDucks6 Database and find 'Users' Collection records [Currently only 2 records]
mongoClient.connect(url, { useNewUrlParser: true }, function (error, db) {
    if (error) {
        throw error;
    }

    var md6DB = db.db("MightyDucks6");

    md6DB.collection('Users').find({}).toArray(function (error, result) {
        if (error) {
            throw error;
        }
        console.log(result);
        db.close();
    });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vue');

routes(app);

app.listen(3000);