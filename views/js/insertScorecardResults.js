(function () {
    console.info('Insert Scorecard Results JS Call');

    var scorecardResultsForm = document.getElementById('scorecard_results_form');

    scorecardResultsForm.addEventListener('submit', function (ev) {
        ev.preventDefault();

        console.info('Scorecard Results Form Submitted');

        //Match Date
        let date = document.getElementById('date').value; home_1_name

        //Home Team Names
        let homeTeam1Name = document.getElementById('home_1_name').value;
        let homeTeam2Name = document.getElementById('home_2_name').value;
        let homeTeam3Name = document.getElementById('home_3_name').value;
        let homeTeam4Name = document.getElementById('home_4_name').value;
        let homeTeam5Name = document.getElementById('home_5_name').value;
        let homeTeam6Name = document.getElementById('home_6_name').value;

        //Away Team Names
        let awayTeam1Name = document.getElementById('away_1_name').value;
        let awayTeam2Name = document.getElementById('away_2_name').value;
        let awayTeam3Name = document.getElementById('away_3_name').value;
        let awayTeam4Name = document.getElementById('away_4_name').value;
        let awayTeam5Name = document.getElementById('away_5_name').value;
        let awayTeam6Name = document.getElementById('away_6_name').value;

        //Home Team Scores
        let homeTeam1Score = document.getElementById('home_1_score').value;
        let homeTeam2Score = document.getElementById('home_2_score').value;
        let homeTeam3Score = document.getElementById('home_3_score').value;
        let homeTeam4Score = document.getElementById('home_4_score').value;
        let homeTeam5Score = document.getElementById('home_5_score').value;
        let homeTeam6Score = document.getElementById('home_6_score').value;

        //Away Team Scores
        let awayTeam1Score = document.getElementById('away_1_score').value;
        let awayTeam2Score = document.getElementById('away_2_score').value;
        let awayTeam3Score = document.getElementById('away_3_score').value;
        let awayTeam4Score = document.getElementById('away_4_score').value;
        let awayTeam5Score = document.getElementById('away_5_score').value;
        let awayTeam6Score = document.getElementById('away_6_score').value;

        //Tie Breaker - First Scorer Minute
        let firstScorerMinutes = document.getElementById('first_scorer_minutes').value;

        let scorecardResultsFormData = {
            "date": date,
            "homeTeam1Name": homeTeam1Name,
            "homeTeam2Name": homeTeam2Name,
            "homeTeam3Name": homeTeam3Name,
            "homeTeam4Name": homeTeam4Name,
            "homeTeam5Name": homeTeam5Name,
            "homeTeam6Name": homeTeam6Name,
            "awayTeam1Name": awayTeam1Name,
            "awayTeam2Name": awayTeam2Name,
            "awayTeam3Name": awayTeam3Name,
            "awayTeam4Name": awayTeam4Name,
            "awayTeam5Name": awayTeam5Name,
            "awayTeam6Name": awayTeam6Name,
            "homeTeam1Score": homeTeam1Score,
            "homeTeam2Score": homeTeam2Score,
            "homeTeam3Score": homeTeam3Score,
            "homeTeam4Score": homeTeam4Score,
            "homeTeam5Score": homeTeam5Score,
            "homeTeam6Score": homeTeam6Score,
            "awayTeam1Score": awayTeam1Score,
            "awayTeam2Score": awayTeam2Score,
            "awayTeam3Score": awayTeam3Score,
            "awayTeam4Score": awayTeam4Score,
            "awayTeam5Score": awayTeam5Score,
            "awayTeam6Score": awayTeam6Score,
            "firstScorerMinute": firstScorerMinutes
        };

        let endPoint = '/insertScorecardResults';

        fetch(endPoint, {
            method: 'post',
            body: JSON.stringify(scorecardResultsFormData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (res) {
                return res.json()
            })
            .then(function (scorecardResultsData) {
                console.dir(scorecardResultsData);
                window.alert('Your predictions have been made, good luck!');
                window.location.href = 'index.html'
            });
        console.dir(scorecardResultsForm);
    });
})();