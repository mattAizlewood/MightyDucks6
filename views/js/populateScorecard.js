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

            if (scorecardData[0].isUserLoggedIn){
                document.getElementById("login").style.display = "none";
                document.getElementById("register").style.display = "none";
                document.getElementById("logout").style.display = "block";
            }

            if (window.location.href == 'http://localhost:3000/index.html' || window.location.href == 'http://localhost:3000') {
                //Round
                document.getElementById('current_week').innerHTML = "Round: " + scorecardData[0].roundId

                //Versus
                document.getElementById('versus_1').src = "../images/Versus.png"
                document.getElementById('versus_2').src = "../images/Versus.png"
                document.getElementById('versus_3').src = "../images/Versus.png"
                document.getElementById('versus_4').src = "../images/Versus.png"
                document.getElementById('versus_5').src = "../images/Versus.png"
                document.getElementById('versus_6').src = "../images/Versus.png"
            }

            //Match 1
            document.getElementById('home_1').src = "../images/" + scorecardData[0].roundInfo.match1.homeTeam + ".png"
            document.getElementById('away_1').src = "../images/" + scorecardData[0].roundInfo.match1.awayTeam + ".png"

            // //Match 2
            document.getElementById('home_2').src = "../images/" + scorecardData[0].roundInfo.match2.homeTeam + ".png"
            document.getElementById('away_2').src = "../images/" + scorecardData[0].roundInfo.match2.awayTeam + ".png"

            // //Match 3
            document.getElementById('home_3').src = "../images/" + scorecardData[0].roundInfo.match3.homeTeam + ".png"
            document.getElementById('away_3').src = "../images/" + scorecardData[0].roundInfo.match3.awayTeam + ".png"

            // //Match 4
            document.getElementById('home_4').src = "../images/" + scorecardData[0].roundInfo.match4.homeTeam + ".png"
            document.getElementById('away_4').src = "../images/" + scorecardData[0].roundInfo.match4.awayTeam + ".png"

            // //Match 5
            document.getElementById('home_5').src = "../images/" + scorecardData[0].roundInfo.match5.homeTeam + ".png"
            document.getElementById('away_5').src = "../images/" + scorecardData[0].roundInfo.match5.awayTeam + ".png"

            // //Match 6
            document.getElementById('home_6').src = "../images/" + scorecardData[0].roundInfo.match6.homeTeam + ".png"
            document.getElementById('away_6').src = "../images/" + scorecardData[0].roundInfo.match6.awayTeam + ".png"
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
})();