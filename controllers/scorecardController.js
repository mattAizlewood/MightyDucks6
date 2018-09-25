module.exports = {
    populateScorecard: (app, req, res) => {
        app.get('myDb').collection('scorecards').find().sort({ "roundID": -1 }).limit(1).toArray((err, scorecardResults) => {
            if (err) {
                throw err;
            } else {
                res.json(scorecardResults);
            }
        });
    },

    insertScorecardResults: function (app, req, res) {
        let scorecardResults = req.body;

        app.get('myDb').collection('results').insertOne(scorecardResults, function (err, docs) {
            if (err) {
                console.log(err);
            }
            res.json({ 'msg': 'Score Card Results Record Added' });
        });
    }
}
