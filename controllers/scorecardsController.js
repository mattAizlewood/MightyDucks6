module.exports = {
    addScorecard: function (app, req, res) {
        let scorecard = req.body;

        app.get('myDb').collection('scorecards').insertOne(scorecard, function (err, docs) {
            if (err) {
                console.log(err);
            }
            res.json({ 'msg': 'Scorecard Added' });
        });
    }
};
