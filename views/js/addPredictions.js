(function () {
    console.info('Add Predictions JS Call');

    var predicitonsForm = document.getElementById('predictionsForm');

    predicitonsForm.addEventListener('submit', function (ev) {
        ev.preventDefault();

        console.info('Predictions Form Submitted');

        //Match 1
        let homeTeam1FinalScore = parseInt(document.getElementById('home_team_1_score').value);
        let awayTeam1FinalScore = parseInt(document.getElementById('away_team_1_score').value);

        // //Match 2
        let homeTeam2FinalScore = parseInt(document.getElementById('home_team_2_score').value);
        let awayTeam2FinalScore = parseInt(document.getElementById('away_team_2_score').value);

        //Match 3
        let homeTeam3FinalScore = parseInt(document.getElementById('home_team_3_score').value);
        let awayTeam3FinalScore = parseInt(document.getElementById('away_team_3_score').value);

        //Match 4
        let homeTeam4FinalScore = parseInt(document.getElementById('home_team_4_score').value);
        let awayTeam4FinalScore = parseInt(document.getElementById('away_team_4_score').value);

        //Match 5
        let homeTeam5FinalScore = parseInt(document.getElementById('home_team_5_score').value);
        let awayTeam5FinalScore = parseInt(document.getElementById('away_team_5_score').value);

        //Match 6
        let homeTeam6FinalScore = parseInt(document.getElementById('home_team_6_score').value);
        let awayTeam6FinalScore = parseInt(document.getElementById('away_team_6_score').value);

        //Tie Breaker
        let firstScorerMinute = parseInt(document.getElementById('all_matches_first_score_minute').value);

        let predictionsFormData = {
            "roundID": 0,
            "roundPredicitons": {
                "match1": {
                    "home": homeTeam1FinalScore,
                    "away": awayTeam1FinalScore
                },
                "match2": {
                    "home": homeTeam2FinalScore,
                    "away": awayTeam2FinalScore
                },
                "match3": {
                    "home": homeTeam3FinalScore,
                    "away": awayTeam3FinalScore
                },
                "match4": {
                    "home": homeTeam4FinalScore,
                    "away": awayTeam4FinalScore,
                },
                "match5": {
                    "home": homeTeam5FinalScore,
                    "away": awayTeam5FinalScore,
                },
                "match6": {
                    "home": homeTeam6FinalScore,
                    "away": awayTeam6FinalScore,
                },
                "firstScorerMinute": firstScorerMinute
            }
        };

        let endPoint = '/predictions';

        fetch(endPoint, {
            method: 'post',
            body: JSON.stringify(predictionsFormData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (res) {
                return res.json()
            })
            .then(function (predictionsData) {
                console.dir(predictionsData);
                window.alert('Your predictions have been made, good luck!');
                window.location.href = 'index.html'
            });
        console.dir(predictionsFormData);
    });
})();