var form = document.getElementById('scorecard_results_form');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
console.info("test");
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://localhost:3000/api/insertScoreCardResults",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            "Postman-Token": "19e76192-be2d-4bb5-985d-aab883b08756"
        },
        "data": {
            "date": document.getElementById('date').value,
            "home1": document.getElementById('home_1_option').value,
            "home1Score": document.getElementById('home_1_score').value,
            "away1": document.getElementById('away_1_option').value,
            "away1Score": document.getElementById('away_1_score').value,
            "home2": document.getElementById('home_2_option').value,
            "home2Score": document.getElementById('home_2_score').value,
            "away2": document.getElementById('away_2_option').value,
            "away2Score": document.getElementById('away_2_score').value,
            "home3": document.getElementById('home_3_option').value,
            "home3Score": document.getElementById('home_3_score').value,
            "away3": document.getElementById('away_3_option').value,
            "away3Score": document.getElementById('away_3_score').value,
            "home4": document.getElementById('home_4_option').value,
            "home4Score": document.getElementById('home_4_score').value,
            "away4": document.getElementById('away_4_option').value,
            "away4Score": document.getElementById('away_4_score').value,
            "home5": document.getElementById('home_5_option').value,
            "home5Score": document.getElementById('home_5_score').value,
            "away5": document.getElementById('away_5_option').value,
            "away5Score": document.getElementById('away_5_score').value,
            "home6": document.getElementById('home_6_option').value,
            "home6Score": document.getElementById('home_6_score').value,
            "away6": document.getElementById('away_6_option').value,
            "away6Score": document.getElementById('away_6_score').value,
            "firstScorerMinutes": document.getElementById('first_scorer_minutes').value
        } 
    }

    $.ajax(settings).done();
});

