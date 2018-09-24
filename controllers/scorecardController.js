module.exports = {
    populateScorecard: function (app, req, res) {

        app.get('myDb').collection('scorecard').findOne( function (err, scorecardResults) {
            if (err) {
                console.error(err)
            }
            
            res.json(scorecardResults);
        });
    }
}