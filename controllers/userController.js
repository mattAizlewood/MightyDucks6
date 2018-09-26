module.exports = {
    login: function(app, req, res){
        let email = req.body.email; 
        app.get('myDb').collection('userCollection').findOne({"email": email},function (err, user) {
            if (err) {
                console.error(err)
            }
            else if(user != null && user.password === req.body.password){
                res.redirect('/leaderboards.html');
            }
            else{
                console.info("invalid password or email");
            }
            
            //console.info(user);
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
    },

    getUser: function(app, req, res){
        let email = req.body.email;

        app.get('myDb').collection('userCollection').findOne({"email": email},function (err, user) {
            if (err) {
                console.error(err)
            }
            else if(user != null && user.password === req.body.password){
                res.json(user);
            }
            else{
                console.info("invalid password or email");
            }
        })
    }
}