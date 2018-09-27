var async = require('async');
var mongo = require('mongodb');




module.exports = {
    getAllLeaderboards: (app,req,res) => {
        app.get('myDb').collection('League').find({}).toArray((err,docs) => {
            if(err) {
                console.error(err);
            }
            res.json(docs);
        });
    },

    getAllOpenLeaderboards: (app,req,res) => {
        app.get('myDb').collection('League').find({"open":true}).toArray((err,docs) => {
            if(err) {
                console.error(err);
            }
            res.json(docs);
        })
    },


    //if you wanna break it up into smaller functions, look into 'await'
    insertOpenLeague: (app,req,res) => {
        let maxID;
        const accessCode = req.body.accessCode;
        const leagueName = req.body.leagueName;
        const open = true;
        const password = "";
    
        app.get('myDb').collection('League').find().sort({"leagueID": -1}).limit(1).toArray((err,docs) => {
            if(err) {
                console.error(err)
            }
            maxID = docs[0].leagueID + 1;
            if(maxID == null) {
                maxID = 1;
            }

            app.get('myDb').collection('League').insertOne({"leagueID":maxID, "accessCode":accessCode, "leagueName":leagueName, "open":open, "password":password}, (err, docs) => {
                if(err) throw err;
                console.log("successful insertion");
            });
            
        })
        

    },
    //you was here and updating db-test-data
    getAllPlayersGlobalLeaderboard: async (app,req,res) => {

        app.get('myDb').collection('Leaderboards').find({'leagueID':1}).sort({"score":-1}).toArray((err, docs) => {
            if(err) {
                throw err;
            } else {
                 res.json(docs);
            }
        });

    },
    getUserPersona: (app,req,res) => {
        
        app.get('myDb').collection('userCollection').findOne({'_id':new mongo.ObjectID(req.params.userID)}, (err,docs) => {
            if(err) {
                throw err
            }
            else {
                
                res.json({'persona':docs.persona});
            }
        });
    }


}











