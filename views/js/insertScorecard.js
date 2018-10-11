var form = document.getElementById('insert_scorecard_form');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

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
            "home1": document.getElementById('home_1_option').value,
            "away1": document.getElementById('away_1_option').value,
            "home2": document.getElementById('home_2_option').value,
            "away2": document.getElementById('away_2_option').value,
            "home3": document.getElementById('home_3_option').value,
            "away3": document.getElementById('away_3_option').value,
            "home4": document.getElementById('home_4_option').value,
            "away4": document.getElementById('away_4_option').value,
            "home5": document.getElementById('home_5_option').value,
            "away5": document.getElementById('away_5_option').value,
            "home6": document.getElementById('home_6_option').value,
            "away6": document.getElementById('away_6_option').value
        }
    }

    $.ajax(settings).done();

    alert("Scorecard inserted");
});

document.getElementById("logout").addEventListener("click", function(){
    var endPoint = "/api/logout"
    fetch(endPoint, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        if (data.msg ==="successful")
        {
            window.location.href = "index.html";
        }
        
    })
})
