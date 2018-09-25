
var button = document.getElementById('insert_scorecard');

button.addEventListener('click', (ev) => {
    //ev.preventDefault();

    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://localhost:3000/api/insertScoreCard",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            "Postman-Token": "19e76192-be2d-4bb5-985d-aab883b08756"
        },
        "data": {
            "date": document.getElementById('date').value,
            "home1": document.getElementById('team_1').value,
            "away1": document.getElementById('team_2').value,
            "home2": document.getElementById('team_3').value,
            "away2": document.getElementById('team_4').value,
            "home3": document.getElementById('team_5').value,
            "away3": document.getElementById('team_6').value,
            "home4": document.getElementById('team_7').value,
            "away4": document.getElementById('team_8').value,
            "home5": document.getElementById('team_9').value,
            "away5": document.getElementById('team_10').value,
            "home6": document.getElementById('team_11').value,
            "away6": document.getElementById('team_12').value
        }
    }

    $.ajax(settings).done();
});
