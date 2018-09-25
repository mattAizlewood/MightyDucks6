(function () {
    console.info('Populate Scorecard JS Call');
    console.info('Scorecard Loaded');

    let endPoint = '/api/getLatestScoreCard';

    fetch(endPoint, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (scorecardData) {
            console.info(scorecardData);

            //Match 1
            document.getElementById('team_1').src = "../img/" + scorecardData[0].roundInfo.match1.homeTeam1 + ".png"
            document.getElementById('team_2').src = "../img/" + scorecardData[0].roundInfo.match1.awayTeam1 + ".png"

            // //Match 2
            document.getElementById('team_3').src = "../img/" + scorecardData[0].roundInfo.match2.homeTeam2 + ".png"
            document.getElementById('team_4').src = "../img/" + scorecardData[0].roundInfo.match2.awayTeam2 + ".png"

            // //Match 3
            document.getElementById('team_5').src = "../img/" + scorecardData[0].roundInfo.match3.homeTeam3 + ".png"
            document.getElementById('team_6').src = "../img/" + scorecardData[0].roundInfo.match3.awayTeam3 + ".png"

            // //Match 4
            document.getElementById('team_7').src = "../img/" + scorecardData[0].roundInfo.match4.homeTeam4 + ".png"
            document.getElementById('team_8').src = "../img/" + scorecardData[0].roundInfo.match4.awayTeam4 + ".png"

            // //Match 5
            document.getElementById('team_9').src = "../img/" + scorecardData[0].roundInfo.match5.homeTeam5 + ".png"
            document.getElementById('team_10').src = "../img/" + scorecardData[0].roundInfo.match5.awayTeam5 + ".png"

            // //Match 6
            document.getElementById('team_11').src = "../img/" + scorecardData[0].roundInfo.match6.homeTeam6 + ".png"
            document.getElementById('team_12').src = "../img/" + scorecardData[0].roundInfo.match6.awayTeam6 + ".png"
        });
})();