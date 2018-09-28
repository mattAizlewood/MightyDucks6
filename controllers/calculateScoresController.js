module.exports = {
    // updateAllScores: async (app,req,res) => {
    //     const getAllUserPredictions = (app) => {
    //         app.get('myDb').collection('predictions').find().toArray((err,docs) => {
    //             if(err) {
    //                 console.log(err);
    //             } else {
    //                 return docs;
    //             }
    //         });
    //     }

    //     const getAllResults = (app) => {
    //         app.get('myDb').collection('results').find().toArray((err,docs) => {
    //             if(err) {
    //                 console.log(err);
    //             } else {
    //                 return docs;
    //             }
    //         });
    //     }
    //     const thePromise = Promise.all([
    //         getAllUserPredictions(app),
    //         getAllResults(app)
    //     ]);

    //     console.log(thePromise[0]);
    //     console.log(thePromise[1]);

    //     // const calculateAllScores = (allUserPredictions,allResults) => {
    //     //     let score = [];
    //     //     //
    //     //     new Promise(() => {
    //     //         let predictionsScoreObj = {};
    //     //         let scores = { 'scores' : allResults };
    //     //         allUserPredictions.forEach((prediction) => {
    //     //         let score = 0;
    //     //         //each game
    //     //         let scorecard = scores.scores.find(item => roundId === prediction.roundId)
    //     //         //check if score is the same
    //     //         //if score is not same, check if the user got the winner correct
    //     //         if()
                
    //     //         //then after checking each individual game, if the score is within 5 mins give a point
    //     //         //if score is exactly the same give more points
    //     //     })}).then()
    //     // }
        

    //}

}