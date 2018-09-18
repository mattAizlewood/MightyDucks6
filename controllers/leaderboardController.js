module.exports = {
    getAllLeaderboards: (app,req,res) => {
        app.get('myDb').collection('League').find({}).toArray((err,docs) => {
            if(err) {
                console.error(err);
            }
            res.json(docs);
        });
    }
}