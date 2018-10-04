module.exports = {
    getAllUserPredictions: (app, req, res) => {
        app.get('myDb').collection('predictions').find().toArray((err, docs) => {
            if (err) {
                return err;
            } else {
                console.log(docs);
                res.json(docs);
            }
        });
        res.json({'msg':'successful'});
    },
    insertUserPredictions: (app, req, res) => {
        app.get('myDb').collection('predictions').find().sort({ 'roundId': -1 }).limit(1).toArray((err, docs) => {
            if (err) {
                console.log(err);
            } else {

                if (docs.length < 1) {
                    maxID = 0;
                } else {
                    maxID = docs[0].roundId + 1;
                }

                app.get('myDb').collection('predictions').insertOne({
                    'roundId': maxID,
                    'userId' : req.body.userId,
                    'predictionsInfo': {
                        "match1": { "homeTeam1Score": req.body.home1Score, "awayTeam1Score": req.body.away1Score },
                        "match2": { "homeTeam2Score": req.body.home2Score, "awayTeam2Score": req.body.away2Score },
                        "match3": { "homeTeam3Score": req.body.home3Score, "awayTeam3Score": req.body.away3Score },
                        "match4": { "homeTeam4Score": req.body.home4Score, "awayTeam4Score": req.body.away4Score },
                        "match5": { "homeTeam5Score": req.body.home5Score, "awayTeam5Score": req.body.away5Score },
                        "match6": { "homeTeam6Score": req.body.home6Score, "awayTeam6Score": req.body.away6Score },
                        "firstScorerMinutes": req.body.firstScorerMinutes
                    }
                });
                res.json({'msg':'successful'});
            }
        });
    },
    getLatestUserPredictions: (app, req, res) => {
        app.get('myDb').collection('predictions').find().sort({ 'roundId': -1 }).limit(1).toArray((err, docs) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(docs);
            }
        });
        res.json({'msg':'successful'});
    }
};
