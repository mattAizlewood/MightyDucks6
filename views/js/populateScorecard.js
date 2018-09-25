(function () {
    console.info('Popukate Scorecard JS Call');
    console.info('Scorecard Loaded');

    let endPoint = '/scorecard';

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
            console.dir(scorecardData);

            //Match 1
            document.getElementById('team_1').src = "../img/" + scorecardData[0].roundInfo.match1.home + ".png"
            document.getElementById('team_2').src = "../img/" + scorecardData[0].roundInfo.match1.away + ".png"

            // //Match 2
            document.getElementById('team_3').src = "../img/" + scorecardData[0].roundInfo.match2.home + ".png"
            document.getElementById('team_4').src = "../img/" + scorecardData[0].roundInfo.match2.away + ".png"

            // //Match 3
            document.getElementById('team_5').src = "../img/" + scorecardData[0].roundInfo.match3.home + ".png"
            document.getElementById('team_6').src = "../img/" + scorecardData[0].roundInfo.match3.away + ".png"

            // //Match 4
            document.getElementById('team_7').src = "../img/" + scorecardData[0].roundInfo.match4.home + ".png"
            document.getElementById('team_8').src = "../img/" + scorecardData[0].roundInfo.match4.away + ".png"

            // //Match 5
            document.getElementById('team_9').src = "../img/" + scorecardData[0].roundInfo.match5.home + ".png"
            document.getElementById('team_10').src = "../img/" + scorecardData[0].roundInfo.match5.away + ".png"

            // //Match 6
            document.getElementById('team_11').src = "../img/" + scorecardData[0].roundInfo.match6.home + ".png"
            document.getElementById('team_12').src = "../img/" + scorecardData[0].roundInfo.match6.away + ".png"
        });
})();