module.exports = {
    viewSingle: function(app, req, res){
        let email = req.body.email;
        app.get('myDb').collection('userCollection').find({"email": email}).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
        //res.send(`view staff record: ${staffId}`);
    },

    register: function(app, req, res){
        let newUser = req.body;
        // let userID = parseInt(newUser.userID);
        // newUser.userID = userID;

        app.get('myDb').collection('userCollection').insertOne(newUser,function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json({"msg":"successful"})
        })
        //res.send(`Add a staff: ${req.body}`);
    } 
}