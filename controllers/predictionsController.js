module.exports = {
    addPredictions: function (app, req, res) {
        let predictions = req.body;

        app.get('myDb').collection('predictions').insertOne(predictions, function (err, docs) {
            if (err) {
                console.log(err);
            } 
            res.json({ 'msg': 'Predictions Record Added' });
        });
    }
};
