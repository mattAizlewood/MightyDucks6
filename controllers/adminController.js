var {ObjectId} = require('mongodb');

module.exports = {
    getAllScoreCards: (app, req, res) => {
        app.get('myDb').collection('scorecard').find({}).toArray((err,docs) => {
            if(err) {
                console.log(err);
            } else {
                res.json(docs);
            }
        });
    },
    getAllScoreCardResults: (app,req, res) => {
        app.get('myDb').collection('results').find({}).toArray((err, docs) => {
            if(err) {
                console.log(err);
            } else {
                res.json(docs);
            }
        });
    },

    deleteScoreCard: (app, req, res) => {
        app.get('myDb').collection('scorecard').deleteOne({'_id': new ObjectId(req.body.id)}, (err,docs) => {
            if(err) {
                console.log(err);
            } else {
                res.json({'msg': 'successful'});
            }
        });
    },

    deleteScoreCardResult: (app,req,res) => {
        app.get('myDb').collection('results').deleteOne({'_id':new ObjectId(req.body.id)}, (err, docs) => {
            if(err) {
                console.log(err);
            } else {
                res.json({'msg':'succcessful'});
            }
        })
    }
}

