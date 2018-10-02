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

            console.info(window.location.href);

            if (window.location.href == 'http://localhost:3000/index.html' || window.location.href == 'http://localhost:3000') {
                //Round
                document.getElementById('current_week').innerHTML = "Round: " + scorecardData[0].roundId

                //Versus
                document.getElementById('versus_1').src = "../img/Versus.png"
                document.getElementById('versus_2').src = "../img/Versus.png"
                document.getElementById('versus_3').src = "../img/Versus.png"
                document.getElementById('versus_4').src = "../img/Versus.png"
                document.getElementById('versus_5').src = "../img/Versus.png"
                document.getElementById('versus_6').src = "../img/Versus.png"
            }

            //Match 1
            document.getElementById('team_1').src = "../img/" + scorecardData[0].roundInfo.match1.homeTeam + ".png"
            document.getElementById('team_2').src = "../img/" + scorecardData[0].roundInfo.match1.awayTeam + ".png"

            // //Match 2
            document.getElementById('team_3').src = "../img/" + scorecardData[0].roundInfo.match2.homeTeam + ".png"
            document.getElementById('team_4').src = "../img/" + scorecardData[0].roundInfo.match2.awayTeam + ".png"

            // //Match 3
            document.getElementById('team_5').src = "../img/" + scorecardData[0].roundInfo.match3.homeTeam + ".png"
            document.getElementById('team_6').src = "../img/" + scorecardData[0].roundInfo.match3.awayTeam + ".png"

            // //Match 4
            document.getElementById('team_7').src = "../img/" + scorecardData[0].roundInfo.match4.homeTeam + ".png"
            document.getElementById('team_8').src = "../img/" + scorecardData[0].roundInfo.match4.awayTeam + ".png"

            // //Match 5
            document.getElementById('team_9').src = "../img/" + scorecardData[0].roundInfo.match5.homeTeam + ".png"
            document.getElementById('team_10').src = "../img/" + scorecardData[0].roundInfo.match5.awayTeam + ".png"

            // //Match 6
            document.getElementById('team_11').src = "../img/" + scorecardData[0].roundInfo.match6.homeTeam + ".png"
            document.getElementById('team_12').src = "../img/" + scorecardData[0].roundInfo.match6.awayTeam + ".png"
        });
})();