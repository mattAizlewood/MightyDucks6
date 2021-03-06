module.exports = {
    login: function(app, req, res){
        let email = req.body.email; 
        app.get('myDb').collection('userCollection').findOne({"email": email},function (err, user) {
            if (err) {
                console.error(err)
            }
            else if(user != null && user.password === req.body.password && user.status == "user"){
                req.session.user = user;
                res.redirect('/index.html');
            }
            else if (user != null && user.password === req.body.password && user.status == "admin") {
                req.session.user = user;
                console.info('Admin login successful');
                res.redirect('/settings.html');
            }
            else{
                console.info(user);
                console.info(req.body);
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
            else{
                res.redirect('/index.html');
            }
        })
        //res.send(`Add a staff: ${req.body}`);
    },

    getUser: function(app, req, res){
        //let email = req.body.email;
        
        app.get('myDb').collection('userCollection').findOne({"email": req.user.email+""},function (err, user) {
            if (err) {
                console.error(err)
            }
            console.log(user);
                res.json(user);
                
        })
    },
    logout: function(app, req, res){
        req.session.destroy();
        res.json({msg:"successful"});
    }
}