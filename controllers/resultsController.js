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
    },
    insertScoreCardResults: (app,req,res) => {
        app.get('myDb').collection('results').find().sort({'roundId':-1}).limit(1).toArray((err,docs) => {
            if (err) {
                console.log(err);
            } else {
                maxID = docs[0].roundId + 1;
                if(maxID === null || maxID === undefined) {
                    maxID = 1;
                }
                app.get('myDb').collection('results').insertOne({
                    'roundId':maxID,
                    'roundInfo': {
                        'date':req.body.date,
                        "match1": { "matchID": 1, "homeTeam": { "name": req.body.home1, "score": req.body.home1Score }, "awayTeam": { "name": req.body.away1, "score": req.body.away1Score } },
                        "match2": { "matchID": 2, "homeTeam": { "name": req.body.home2, "score": req.body.home2Score }, "awayTeam": { "name": req.body.away2, "score": req.body.away2Score } },
                        "match3": { "matchID": 3, "homeTeam": { "name": req.body.home3, "score": req.body.home3Score }, "awayTeam": { "name": req.body.away3, "score": req.body.away3Score } },
                        "match4": { "matchID": 4, "homeTeam": { "name": req.body.home4, "score": req.body.home4Score }, "awayTeam": { "name": req.body.away4, "score": req.body.away4Score } },
                        "match5": { "matchID": 5, "homeTeam": { "name": req.body.home5, "score": req.body.home5Score }, "awayTeam": { "name": req.body.away5, "score": req.body.away5Score } },
                        "match6": { "matchID": 6, "homeTeam": { "name": req.body.home6, "score": req.body.home6Score }, "awayTeam": { "name": req.body.away6, "score": req.body.away6Score } },
                        "firstScorerMinutes": req.body.firstScorerMinutes
                    }
                });
            }
        })
    }
}