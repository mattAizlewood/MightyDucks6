(function () {
    console.info('Add Scorecard JS Call');

    var scorecardForm = document.getElementById('scorecardForm');

    scorecardForm.addEventListener('submit', function (ev) {
        ev.preventDefault();

        console.info('Scorecard Form Submitted');

        //Match 1
        let homeTeam1FinalScore = parseInt(document.getElementById('home_team_1_score').value);
        let homeTeam1Q1Score = parseInt(document.getElementById('home_team_1_quarter_1_score').value);
        let homeTeam1Q2Score = parseInt(document.getElementById('home_team_1_quarter_2_score').value);
        let homeTeam1Q3Score = parseInt(document.getElementById('home_team_1_quarter_3_score').value);
        let awayTeam1FinalScore = parseInt(document.getElementById('away_team_1_score').value);
        let awayTeam1Q1Score = parseInt(document.getElementById('away_team_1_quarter_1_score').value);
        let awayTeam1Q2Score = parseInt(document.getElementById('away_team_1_quarter_2_score').value);
        let awayTeam1Q3Score = parseInt(document.getElementById('away_team_1_quarter_3_score').value);
        let firstPlayer1ToScore = document.getElementById('first_player_1_to_score').value;

        // //Match 2
        let homeTeam2FinalScore = parseInt(document.getElementById('home_team_2_score').value);
        let homeTeam2Q1Score = parseInt(document.getElementById('home_team_2_quarter_1_score').value);
        let homeTeam2Q2Score = parseInt(document.getElementById('home_team_2_quarter_2_score').value);
        let homeTeam2Q3Score = parseInt(document.getElementById('home_team_2_quarter_3_score').value);
        let awayTeam2FinalScore = parseInt(document.getElementById('away_team_2_score').value);
        let awayTeam2Q1Score = parseInt(document.getElementById('away_team_2_quarter_1_score').value);
        let awayTeam2Q2Score = parseInt(document.getElementById('away_team_2_quarter_2_score').value);
        let awayTeam2Q3Score = parseInt(document.getElementById('away_team_2_quarter_3_score').value);
        let firstPlayer2ToScore = document.getElementById('first_player_2_to_score').value;

        //Match 3
        let homeTeam3FinalScore = parseInt(document.getElementById('home_team_3_score').value);
        let homeTeam3Q1Score = parseInt(document.getElementById('home_team_3_quarter_1_score').value);
        let homeTeam3Q2Score = parseInt(document.getElementById('home_team_3_quarter_2_score').value);
        let homeTeam3Q3Score = parseInt(document.getElementById('home_team_3_quarter_3_score').value);
        let awayTeam3FinalScore = parseInt(document.getElementById('away_team_3_score').value);
        let awayTeam3Q1Score = parseInt(document.getElementById('away_team_3_quarter_1_score').value);
        let awayTeam3Q2Score = parseInt(document.getElementById('away_team_3_quarter_2_score').value);
        let awayTeam3Q3Score = parseInt(document.getElementById('away_team_3_quarter_3_score').value);
        let firstPlayer3ToScore = document.getElementById('first_player_3_to_score').value;

        //Match 4
        let homeTeam4FinalScore = parseInt(document.getElementById('home_team_4_score').value);
        let homeTeam4Q1Score = parseInt(document.getElementById('home_team_4_quarter_1_score').value);
        let homeTeam4Q2Score = parseInt(document.getElementById('home_team_4_quarter_2_score').value);
        let homeTeam4Q3Score = parseInt(document.getElementById('home_team_4_quarter_3_score').value);
        let awayTeam4FinalScore = parseInt(document.getElementById('away_team_4_score').value);
        let awayTeam4Q1Score = parseInt(document.getElementById('away_team_4_quarter_1_score').value);
        let awayTeam4Q2Score = parseInt(document.getElementById('away_team_4_quarter_2_score').value);
        let awayTeam4Q3Score = parseInt(document.getElementById('away_team_4_quarter_3_score').value);
        let firstPlayer4ToScore = document.getElementById('first_player_4_to_score').value;

        //Match 5
        let homeTeam5FinalScore = parseInt(document.getElementById('home_team_5_score').value);
        let homeTeam5Q1Score = parseInt(document.getElementById('home_team_5_quarter_1_score').value);
        let homeTeam5Q2Score = parseInt(document.getElementById('home_team_5_quarter_2_score').value);
        let homeTeam5Q3Score = parseInt(document.getElementById('home_team_5_quarter_3_score').value);
        let awayTeam5FinalScore = parseInt(document.getElementById('away_team_5_score').value);
        let awayTeam5Q1Score = parseInt(document.getElementById('away_team_5_quarter_1_score').value);
        let awayTeam5Q2Score = parseInt(document.getElementById('away_team_5_quarter_2_score').value);
        let awayTeam5Q3Score = parseInt(document.getElementById('away_team_5_quarter_3_score').value);
        let firstPlayer5ToScore = document.getElementById('first_player_5_to_score').value;

        //Match 6
        let homeTeam6FinalScore = parseInt(document.getElementById('home_team_6_score').value);
        let homeTeam6Q1Score = parseInt(document.getElementById('home_team_6_quarter_1_score').value);
        let homeTeam6Q2Score = parseInt(document.getElementById('home_team_6_quarter_2_score').value);
        let homeTeam6Q3Score = parseInt(document.getElementById('home_team_6_quarter_3_score').value);
        let awayTeam6FinalScore = parseInt(document.getElementById('away_team_6_score').value);
        let awayTeam6Q1Score = parseInt(document.getElementById('away_team_6_quarter_1_score').value);
        let awayTeam6Q2Score = parseInt(document.getElementById('away_team_6_quarter_2_score').value);
        let awayTeam6Q3Score = parseInt(document.getElementById('away_team_6_quarter_3_score').value);
        let firstPlayer6ToScore = document.getElementById('first_player_6_to_score').value;

        //Tie Breaker
        let allMatchesFirstScoreMinute = parseInt(document.getElementById('all_matches_first_score_minute').value);

        if (homeTeam1FinalScore == (homeTeam1Q1Score + homeTeam1Q2Score + homeTeam1Q3Score) &&
            awayTeam1FinalScore == (awayTeam1Q1Score + awayTeam1Q2Score + awayTeam1Q3Score) &&
            homeTeam2FinalScore == (homeTeam2Q1Score + homeTeam2Q2Score + homeTeam2Q3Score) &&
            awayTeam2FinalScore == (awayTeam2Q1Score + awayTeam2Q2Score + awayTeam2Q3Score) &&
            homeTeam3FinalScore == (homeTeam3Q1Score + homeTeam3Q2Score + homeTeam3Q3Score) &&
            awayTeam3FinalScore == (awayTeam3Q1Score + awayTeam3Q2Score + awayTeam3Q3Score) &&
            homeTeam4FinalScore == (homeTeam4Q1Score + homeTeam4Q2Score + homeTeam4Q3Score) &&
            awayTeam4FinalScore == (awayTeam4Q1Score + awayTeam4Q2Score + awayTeam4Q3Score) &&
            homeTeam5FinalScore == (homeTeam5Q1Score + homeTeam5Q2Score + homeTeam5Q3Score) &&
            awayTeam5FinalScore == (awayTeam5Q1Score + awayTeam5Q2Score + awayTeam5Q3Score) &&
            homeTeam6FinalScore == (homeTeam6Q1Score + homeTeam6Q2Score + homeTeam6Q3Score) &&
            awayTeam6FinalScore == (awayTeam6Q1Score + awayTeam6Q2Score + awayTeam6Q3Score)) {
            let scorecardFormData = {
                'match1': {
                    'homeTeam1FinalScore': homeTeam1FinalScore,
                    'homeTeam1Q1Score': homeTeam1Q1Score,
                    'homeTeam1Q2Score': homeTeam1Q2Score,
                    'homeTeam1Q3Score': homeTeam1Q3Score,
                    'awayTeam1FinalScore': awayTeam1FinalScore,
                    'awayTeam1Q1Score': awayTeam1Q1Score,
                    'awayTeam1Q2Score': awayTeam1Q2Score,
                    'awayTeam1Q3Score': awayTeam1Q3Score,
                    'firstPlayer1ToScore': firstPlayer1ToScore
                },
                'match2': {
                    'homeTeam2FinalScore': homeTeam2FinalScore,
                    'homeTeam2Q1Score': homeTeam2Q1Score,
                    'homeTeam2Q2Score': homeTeam2Q2Score,
                    'homeTeam2Q3Score': homeTeam2Q3Score,
                    'awayTeam2FinalScore': awayTeam2FinalScore,
                    'awayTeam2Q1Score': awayTeam2Q1Score,
                    'awayTeam2Q2Score': awayTeam2Q2Score,
                    'awayTeam2Q3Score': awayTeam2Q3Score,
                    'firstPlayer2ToScore': firstPlayer2ToScore
                },
                'match3': {
                    'homeTeam3FinalScore': homeTeam3FinalScore,
                    'homeTeam3Q1Score': homeTeam3Q1Score,
                    'homeTeam3Q2Score': homeTeam3Q2Score,
                    'homeTeam3Q3Score': homeTeam3Q3Score,
                    'awayTeam3FinalScore': awayTeam3FinalScore,
                    'awayTeam3Q1Score': awayTeam3Q1Score,
                    'awayTeam3Q2Score': awayTeam3Q2Score,
                    'awayTeam3Q3Score': awayTeam3Q3Score,
                    'firstPlayer3ToScore': firstPlayer3ToScore
                },
                'match4': {
                    'homeTeam4FinalScore': homeTeam4FinalScore,
                    'homeTeam4Q1Score': homeTeam4Q1Score,
                    'homeTeam4Q2Score': homeTeam4Q2Score,
                    'homeTeam4Q3Score': homeTeam4Q3Score,
                    'awayTeam4FinalScore': awayTeam4FinalScore,
                    'awayTeam4Q1Score': awayTeam4Q1Score,
                    'awayTeam4Q2Score': awayTeam4Q2Score,
                    'awayTeam4Q3Score': awayTeam4Q3Score,
                    'firstPlayer4ToScore': firstPlayer4ToScore
                },
                'match5': {
                    'homeTeam5FinalScore': homeTeam5FinalScore,
                    'homeTeam5Q1Score': homeTeam5Q1Score,
                    'homeTeam5Q2Score': homeTeam5Q2Score,
                    'homeTeam5Q3Score': homeTeam5Q3Score,
                    'awayTeam5FinalScore': awayTeam5FinalScore,
                    'awayTeam5Q1Score': awayTeam5Q1Score,
                    'awayTeam5Q2Score': awayTeam5Q2Score,
                    'awayTeam5Q3Score': awayTeam5Q3Score,
                    'firstPlayer5ToScore': firstPlayer5ToScore
                },
                'match6': {
                    'homeTeam6FinalScore': homeTeam6FinalScore,
                    'homeTeam6Q1Score': homeTeam6Q1Score,
                    'homeTeam6Q2Score': homeTeam6Q2Score,
                    'homeTeam6Q3Score': homeTeam6Q3Score,
                    'awayTeam6FinalScore': awayTeam6FinalScore,
                    'awayTeam6Q1Score': awayTeam6Q1Score,
                    'awayTeam6Q2Score': awayTeam6Q2Score,
                    'awayTeam6Q3Score': awayTeam6Q3Score,
                    'firstPlayer6ToScore': firstPlayer6ToScore
                },
                'allMatchesFirstScoreMinute': allMatchesFirstScoreMinute
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
                    console.dir(scorecardData);
                    window.alert('Your Scorecard predictions have been made, good luck!');
                    window.location.href = 'index.html'
                });
            console.dir(scorecardFormData);
        } else {
            window.alert('Please check that your predicitons for the total goals scored in each quarter, correctly tally up to your predictions for the final team scores in each game.')
        }
    });
})();