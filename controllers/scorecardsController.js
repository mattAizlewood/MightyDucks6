module.exports = {
    addScorecard: function (app, req, res) {
        let scorecard = req.body;

        // var scorecardRecord = {
        //     $set: {
        //         'homeTeam1': scorecard
        //     }
        // };
        //console.dir(req.body);
        // console.dir(scorecard);

        app.get('myDb').collection('scorecards').insertOne(scorecard, function (err, docs) {
            if (err) {
                console.log(err);
            }
            res.json({ 'msg': 'Scorecard Added' });
        });
    }
};
