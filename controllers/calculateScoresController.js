var {ObjectId} = require('mongodb');

module.exports = {
    updateAllScores: (app,req,res) => {
        const getAllUserPredictions = (app) => {
            return new Promise((resolve,reject) => {
            app.get('myDb').collection('predictions').find().toArray((err,docs) => {
                if(err) {
                    console.log(err);
                } else {
                    
                    resolve(docs) ;
                }
            });
            });
        }

        const getAllResults = (app) => {
            return new Promise((resolve,reject) => {
            app.get('myDb').collection('results').find().toArray((err,docs) => {
                if(err) {
                    console.log(err);
                } else {
                    
                    resolve(docs);
                }
            });
            });
        }

        const allocatePredictionsToExistInDbOrNot = (app, allScores) => {

            const map = allScores.map((score) => {
                return new Promise((resolve, reject) => {
                    app.get('myDb').collection('Leaderboards').find({'leagueID':1, 'userID':new ObjectId(score.userId)}).toArray((err,docs) => {
                        //console.log(score);
                        //doesn't exist in DB
                        if(docs.length < 1) {
                            score.exists = false;
                            resolve(score);
                        } else {
                            score.exists = true;
                            resolve(score);
                        }
                    })
                });
            })
            return Promise.all(map);
        }

        const getMaxIDLeaderboards = (app) => {
            var promise = new Promise((resolve, reject) => {
                app.get('myDb').collection('Leaderboards').find({}).sort({'leaderboardsID':-1}).limit(1).toArray((err,docs) => {
                    if(docs.length < 1) {
                        var id = 1;
                        resolve(id);
                    } else {
                        resolve(docs[0].leaderboardsID);
                    }
                });
            })
            return promise;
        }


        var thePromise = Promise.all([
            getAllUserPredictions(app),
            getAllResults(app)
        ]);

        //get all predictions and results asynchronously

        thePromise.then((data) => {
            let allScores = [];
            let scores = {'scores' : data[1]}

            //all user predictions loop
            data[0].forEach((prediction) => {
                predictionScore = 0;
                roundId = prediction.roundId;

                userId = prediction.userId;

                match1Prediction = prediction.roundPredictions.match1;
                match2Prediction = prediction.roundPredictions.match2;
                match3Prediction = prediction.roundPredictions.match3;
                match4Prediction = prediction.roundPredictions.match4;
                match5Prediction = prediction.roundPredictions.match5;
                match6Prediction = prediction.roundPredictions.match6;
                minutesPrediction = prediction.roundPredictions.firstScorerMinutes;
                
                let scorecard = scores.scores.find(item => item.roundId === roundId);
                

                // if they guessed the exact score give 3 points
                //else if they guesses the exact score give 1 point
                if(match1Prediction.home === scorecard.roundInfo.match1.homeTeam.score && match1Prediction.away === scorecard.roundInfo.match1.awayTeam.score ) {
                    predictionScore = predictionScore + 3;
                } else {
                    var predictionState = "";
                    if(match1Prediction.home > match1Prediction.away) {
                        predictionState = "HOME";
                    } else if (match1Prediction.home < match1Prediction.away) {
                        predictionState = "AWAY"
                    } else {
                        predictionState = "TIE";
                    }

                    if(predictionState === "HOME" && scorecard.roundInfo.match1.homeTeam.score > scorecard.roundInfo.match1.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "AWAY" && scorecard.roundInfo.match1.homeTeam.score < scorecard.roundInfo.match1.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "TIE" && scorecard.roundInfo.match1.homeTeam.score === scorecard.roundInfo.match1.awayTeam.score){
                        predictionScore = predictionScore + 1;
                    }
                }

                if(match2Prediction.home === scorecard.roundInfo.match2.homeTeam.score && match2Prediction.away === scorecard.roundInfo.match2.awayTeam.score ) {
                    predictionScore = predictionScore + 3;
                } else {
                    var predictionState = "";
                    if(match2Prediction.home > match2Prediction.away) {
                        predictionState = "HOME";
                    } else if (match2Prediction.home < match2Prediction.away) {
                        predictionState = "AWAY"
                    } else {
                        predictionState = "TIE";
                    }

                    if(predictionState === "HOME" && scorecard.roundInfo.match2.homeTeam.score > scorecard.roundInfo.match2.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "AWAY" && scorecard.roundInfo.match2.homeTeam.score < scorecard.roundInfo.match2.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "TIE" && scorecard.roundInfo.match2.homeTeam.score === scorecard.roundInfo.match2.awayTeam.score){
                        predictionScore = predictionScore + 1;
                    }
                }

                if(match3Prediction.home === scorecard.roundInfo.match3.homeTeam.score && match3Prediction.away === scorecard.roundInfo.match3.awayTeam.score ) {
                    predictionScore = predictionScore + 3;
                } else {
                    var predictionState = "";
                    if(match3Prediction.home > match3Prediction.away) {
                        predictionState = "HOME";
                    } else if (match3Prediction.home < match3Prediction.away) {
                        predictionState = "AWAY"
                    } else {
                        predictionState = "TIE";
                    }

                    if(predictionState === "HOME" && scorecard.roundInfo.match3.homeTeam.score > scorecard.roundInfo.match3.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "AWAY" && scorecard.roundInfo.match3.homeTeam.score < scorecard.roundInfo.match3.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "TIE" && scorecard.roundInfo.match3.homeTeam.score === scorecard.roundInfo.match3.awayTeam.score){
                        predictionScore = predictionScore + 1;
                    }
                }

                if(match4Prediction.home === scorecard.roundInfo.match4.homeTeam.score && match4Prediction.away === scorecard.roundInfo.match4.awayTeam.score ) {
                    predictionScore = predictionScore + 3;
                } else {
                    var predictionState = "";
                    if(match4Prediction.home > match4Prediction.away) {
                        predictionState = "HOME";
                    } else if (match4Prediction.home < match4Prediction.away) {
                        predictionState = "AWAY"
                    } else {
                        predictionState = "TIE";
                    }

                    if(predictionState === "HOME" && scorecard.roundInfo.match4.homeTeam.score > scorecard.roundInfo.match4.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "AWAY" && scorecard.roundInfo.match4.homeTeam.score < scorecard.roundInfo.match4.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "TIE" && scorecard.roundInfo.match4.homeTeam.score === scorecard.roundInfo.match4.awayTeam.score){
                        predictionScore = predictionScore + 1;
                    }
                }

                if(match5Prediction.home === scorecard.roundInfo.match5.homeTeam.score && match5Prediction.away === scorecard.roundInfo.match5.awayTeam.score ) {
                    predictionScore = predictionScore + 3;
                } else {
                    var predictionState = "";
                    if(match5Prediction.home > match5Prediction.away) {
                        predictionState = "HOME";
                    } else if (match5Prediction.home < match5Prediction.away) {
                        predictionState = "AWAY"
                    } else {
                        predictionState = "TIE";
                    }

                    if(predictionState === "HOME" && scorecard.roundInfo.match5.homeTeam.score > scorecard.roundInfo.match5.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "AWAY" && scorecard.roundInfo.match5.homeTeam.score < scorecard.roundInfo.match5.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "TIE" && scorecard.roundInfo.match5.homeTeam.score === scorecard.roundInfo.match5.awayTeam.score){
                        predictionScore = predictionScore + 1;
                    }
                }

                if(match6Prediction.home === scorecard.roundInfo.match6.homeTeam.score && match6Prediction.away === scorecard.roundInfo.match6.awayTeam.score ) {
                    predictionScore = predictionScore + 3;
                } else {
                    var predictionState = "";
                    if(match6Prediction.home > match6Prediction.away) {
                        predictionState = "HOME";
                    } else if (match6Prediction.home < match6Prediction.away) {
                        predictionState = "AWAY"
                    } else {
                        predictionState = "TIE";
                    }

                    if(predictionState === "HOME" && scorecard.roundInfo.match6.homeTeam.score > scorecard.roundInfo.match6.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "AWAY" && scorecard.roundInfo.match6.homeTeam.score < scorecard.roundInfo.match6.awayTeam.score) {
                        predictionScore = predictionScore + 1;
                    } else if(predictionState === "TIE" && scorecard.roundInfo.match6.homeTeam.score === scorecard.roundInfo.match6.awayTeam.score){
                        predictionScore = predictionScore + 1;
                    }
                }
                console.log(predictionScore);
                
                
                //if they guessed within 5 mins of the firstscorer mins give points accordingly
                if(minutesPrediction === scorecard.roundInfo.firstScorerMinutes) {
                    predictionScore = predictionScore + 9;
                } else {
                    differenceInMins = Math.abs(minutesPrediction - scorecard.roundInfo.firstScorerMinutes);
                    if(differenceInMins <= 5) {
                        predictionScore = predictionScore + differenceInMins;
                    }
                }

                let playerExistsInScore = false;
                allScores.forEach((scoreObj) => {
                    if(scoreObj.userId === prediction.userId) {
                        playerExistsInScore = true;
                        scoreObj.score = scoreObj.score + predictionScore;
                    }
                })

                if(!playerExistsInScore) {
                    let playerObj = {
                        "userId" : prediction.userId,
                        "score" : predictionScore
                    }
                    allScores.push(playerObj);
                }


            });
            console.log(allScores);
            return allScores;
        }).then((allScores)=> {

            return allocatePredictionsToExistInDbOrNot(app,allScores);
        }).then((values) => {
            return Promise.all([values, getMaxIDLeaderboards(app)]);
            
        }).then((values) => {
            //asynchronously for the stuff that exists in db
            maxID = values[1];
            predictions = values[0];
            predictions.forEach((prediction) => {
                console.log(prediction);
                if(prediction.exists === true) {
                    app.get('myDb').collection('Leaderboards').updateOne({'userID':new ObjectId(prediction.userId),'leagueID':1}, {$set:{'score':prediction.score}});
                } 
            });
            return Promise.all([values[0].filter(val => val.exists === false), maxID])
        }).then((values) => {
            console.log(values[0])
            console.log(values[1])
            maxID = values[1];
            predictions = values[0];
            predictions.map((prediction) => {
                maxID = maxID + 1;
                app.get('myDb').collection('Leaderboards').insertOne({
                    'leaderboardsID' : maxID,
                    'leagueID' : 1,
                    'userID' : new ObjectId(prediction.userId),
                    'score' : prediction.score
                });
            })
            res.json({'msg':'successful'});
        })
        

        
        

    }

}