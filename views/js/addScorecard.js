(function () {
    console.info('Add Scorecard JS Call');

    var myForm = document.getElementById('scorecardForm');

    myForm.addEventListener('submit', function (ev) {
        ev.preventDefault();

        console.info('Scorecard Form Submitted');

        let homeScore1 = document.getElementById('home_score_1').value;
        let awayScore1 = document.getElementById('away_score_1').value;
        let homeScore2 = document.getElementById('home_score_2').value;
        let awayScore2 = document.getElementById('away_score_2').value;
        let homeScore3 = document.getElementById('home_score_3').value;
        let awayScore3 = document.getElementById('away_score_3').value;
        let homeScore4 = document.getElementById('home_score_4').value;
        let awayScore4 = document.getElementById('away_score_4').value;
        let homeScore5 = document.getElementById('home_score_5').value;
        let awayScore5 = document.getElementById('away_score_5').value;
        let homeScore6 = document.getElementById('home_score_6').value;
        let awayScore6 = document.getElementById('away_score_6').value;

        let scorecardFormData = {
            'homeTeam1': homeScore1,
            'awayTeam1': awayScore1,
            'homeTeam2': homeScore2,
            'awayTeam2': awayScore2,
            'homeTeam3': homeScore3,
            'awayTeam3': awayScore3,
            'homeTeam4': homeScore4,
            'awayTeam4': awayScore4,
            'homeTeam5': homeScore5,
            'awayTeam5': awayScore5,
            'homeTeam6': homeScore6,
            'awayTeam6': awayScore6,
        };
        let endPoint = '/scorecard';

        fetch(endPoint, {
            method: 'post',
            body: JSON.stringify(scorecardFormData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (res) {
                return res.json()
            })
            .then(function (scorecardData) {
                console.dir(scorecardData)
            });
        console.dir(scorecardFormData);
    });
})();