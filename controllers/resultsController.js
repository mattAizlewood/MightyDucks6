module.exports = {
    getRoundResults: function(app, req, res){
        let roundId = req.body.roundId; 
        app.get('myDb').collection('results').findOne({"roundId": roundId},function (err, roundResults) {
            if (err) {
                console.error(err)
            }
            console.info(roundResults);
            res.json(roundResults);

        })
    },

    getUserPredictions: function(app, req, res){
        let roundId = req.body.roundId; 
        let userId = req.body.userId;
        app.get('myDb').collection('predictions').findOne({$and: [{"roundId": roundId}, {"userId": userId}]},function (err, predictions) {
            if (err) {
                console.error(err)
            }
            console.info(predictions);
            res.json(predictions);

        })
    },

    getAllRounds: function(app, req, res){

        app.get('myDb').collection('results').find({}).toArray(function (err, roundResults) {
            if (err) {
                console.error(err)
            }
            res.json(roundResults);
        })
    }
}