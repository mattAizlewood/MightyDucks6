// getNewIDForLeague = (app,req,res,callback) => {

//     let maxID;
//     app.get('myDb').collection('League').find().sort({"leagueID": -1}).limit(1).toArray((err,docs) => {
//         if(err) {
//             console.error(err)
//         }
//         maxID = docs[0].leagueID + 1;
//         if(maxID == null) {
//             maxID = 1;
//         }
//         console.log(maxID + "SHIT CUNTT");
//         callback(maxID);
        
//     }
//     );

    

// }

getNewIDForLeague = (app,req,res) => {
    app.get('myDb').collection('League').find().sort({"leagueID": -1}).limit(1).toArray((err,docs) => {
        if(err) {
            console.error(err)
        }
        maxID = docs[0].leagueID + 1;
        if(maxID == null) {
            maxID = 1;
        }
        console.log(maxID + "SHIT CUNTT");
        return maxID;
        
    })}


    



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
        

    }


}