var userPredictionsForm = document.getElementById('predictionsForm');


userPredictionsForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://localhost:3000/insertUserPredictions",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            "Postman-Token": "19e76192-be2d-4bb5-985d-aab883b08756"
        },
        "data": {
            "home1Score": document.getElementById('home_team_1_score').value,
            "away1Score": document.getElementById('away_team_1_score').value,
            "home2Score": document.getElementById('home_team_2_score').value,
            "away2Score": document.getElementById('away_team_2_score').value,
            "home3Score": document.getElementById('home_team_3_score').value,
            "away3Score": document.getElementById('away_team_3_score').value,
            "home4Score": document.getElementById('home_team_4_score').value,
            "away4Score": document.getElementById('away_team_4_score').value,
            "home5Score": document.getElementById('home_team_5_score').value,
            "away5Score": document.getElementById('away_team_5_score').value,
            "home6Score": document.getElementById('home_team_6_score').value,
            "away6Score": document.getElementById('away_team_6_score').value,
            "firstScorerMinutes": document.getElementById('first_scorer_minutes').value
        }
    }

    $.ajax(settings).done();

    window.alert('Your Predictions have been submitted, be sure to check the results page to see how you did!');
    window.location.href="index.html";
});