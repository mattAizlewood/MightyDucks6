var async = require('async');
var mongo = require('mongodb');
module.exports = {
    getRoundResults: function (app, req, res) {
        let roundId = req.body.roundId;
        app.get('myDb').collection('results').findOne({ "roundId": roundId }, function (err, roundResults) {
            if (err) {
                console.error(err)
            }
            console.info(roundResults);
            res.json(roundResults);

        })
    },

    getUserPredictions: function (app, req, res) {
        let roundId = req.body.roundId;
        let userId = req.body.userId;
        app.get('myDb').collection('predictions').findOne({ $and: [{ "roundId": roundId }, { "userId": userId }] }, function (err, predictions) {
            if (err) {
                console.error(err)
            }
            console.info(predictions);
            res.json(predictions);

        })
    },

    getAllRounds: function (app, req, res) {

        app.get('myDb').collection('results').find({}).toArray(function (err, roundResults) {
            if (err) {
                console.error(err)
            }
            res.json(roundResults);
        })
    },


    getAllScoreCardResults: (app, req, res) => {
        app.get('myDb').collection('results').find().toArray((err, docs) => {
            if (err) {
                return err;
            } else {
                console.log(docs);
                res.json(docs);
            }
        });
    },

    insertScoreCardResults: (app, req, res) => {
        app.get('myDb').collection('results').find().sort({ 'roundId': -1 }).limit(1).toArray((err, docs) => {
            if (err) {
                console.log(err);
                res.json({'msg':'unsuccessful'});
            } else {

                if (docs[0].roundId === null || typeof docs[0].roundId == 'undefined') {
                    maxID = 0;
                } else {
                    maxID = docs[0].roundId + 1;
                }



                app.get('myDb').collection('results').insertOne({
                    'roundId': maxID,
                    'roundInfo': {
                        'date': req.body.date,
                        "match1": { "matchID": 1, "homeTeam": { "name": req.body.home1, "score": req.body.home1Score }, "awayTeam": { "name": req.body.away1, "score": req.body.away1Score } },
                        "match2": { "matchID": 2, "homeTeam": { "name": req.body.home2, "score": req.body.home2Score }, "awayTeam": { "name": req.body.away2, "score": req.body.away2Score } },
                        "match3": { "matchID": 3, "homeTeam": { "name": req.body.home3, "score": req.body.home3Score }, "awayTeam": { "name": req.body.away3, "score": req.body.away3Score } },
                        "match4": { "matchID": 4, "homeTeam": { "name": req.body.home4, "score": req.body.home4Score }, "awayTeam": { "name": req.body.away4, "score": req.body.away4Score } },
                        "match5": { "matchID": 5, "homeTeam": { "name": req.body.home5, "score": req.body.home5Score }, "awayTeam": { "name": req.body.away5, "score": req.body.away5Score } },
                        "match6": { "matchID": 6, "homeTeam": { "name": req.body.home6, "score": req.body.home6Score }, "awayTeam": { "name": req.body.away6, "score": req.body.away6Score } },
                        "firstScorerMinutes": req.body.firstScorerMinutes
                    }
                });
                res.json({'msg':'successful'});
            }
        })
    },

    insertScoreCard: (app, req, res) => {
        app.get('myDb').collection('scorecard').find().sort({ 'roundId': -1 }).limit(1).toArray((err, docs) => {
            if (err) {
                res.json({'msg':'unsuccessful'});
                console.log(err);
            } else {

                if (docs[0].roundId === null || typeof docs[0].roundId == 'undefined') {
                    maxID = 0;
                } else {
                    maxID = docs[0].roundId + 1;
                }


                app.get('myDb').collection('scorecard').insertOne({
                    'roundId': maxID,
                    'roundInfo': {
                        'date': req.body.date,
                        "match1": { "matchID": 1, "homeTeam": req.body.home1, "awayTeam": req.body.away1 },
                        "match2": { "matchID": 2, "homeTeam": req.body.home2, "awayTeam": req.body.away2 },
                        "match3": { "matchID": 3, "homeTeam": req.body.home3, "awayTeam": req.body.away3 },
                        "match4": { "matchID": 4, "homeTeam": req.body.home4, "awayTeam": req.body.away4 },
                        "match5": { "matchID": 5, "homeTeam": req.body.home5, "awayTeam": req.body.away5 },
                        "match6": { "matchID": 6, "homeTeam": req.body.home6, "awayTeam": req.body.away6 },
                    }
                });
                res.json({'msg':'successful'});

            }
        });
    },

    getLatestScoreCard: (app, req, res) => {
        app.get('myDb').collection('scorecard').find().sort({ 'roundId': -1 }).limit(1).toArray((err, docs) => {
            if (err) {
                res.json({'msg':'unsuccesful'});
                console.log(err);
            }
            else {
                res.json(docs);
            }
        });
    }

}