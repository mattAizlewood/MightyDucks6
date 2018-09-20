module.exports = {
    getSingleScorecard: function (app, request, response) {
        // response.send("Get Single Scorecard.");
        app.get('myDb').collection('test').findOne({}, function (err, docs) {
            if (err) {
                console.error(err)
            }
            response.json(docs)
        });
    }
};