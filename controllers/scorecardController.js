module.exports = {
    populateScorecard: (app, req, res) => {
        app.get('myDb').collection('scorecard').find().sort({ "roundID": -1 }).limit(1).toArray((err, scorecardResults) => {
            if (err) {
                throw err;
            } else {
                res.json(scorecardResults);
            }
        });
    },
}

