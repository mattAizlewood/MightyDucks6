var async = require('async');
var mongo = require('mongodb');

module.exports = {
    getAllScoreCardResults: (app,req,res) => {
        app.get('myDb').collection('results').find().toArray((err,docs) => {
            if (err) {
                return err;
            } else {
                console.log(docs);
                res.json(docs);
            }
        });
    }
}