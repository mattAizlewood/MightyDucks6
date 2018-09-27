(function(){
    var user = null;
    var app;

    let endPoint = "/api/getAllRounds";
    fetch(endPoint, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(myData){
        app = new Vue({
            el: '#rounds',
            data: {
                selected: myData.length -1 ,
                rounds : myData
            },
            methods: {
                dropDownChanged: function () {
                    setRoundResults(this.$data.selected);

                    if (user){
                        setUserPredictions(this.$data.selected, user._id);
                    }
                }
            }
          })
        setRoundResults(myData.length -1);
    })



    var myForm = document.getElementById('frmLogin');
    myForm.addEventListener("submit", function(ev){
        ev.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let formData = {
            "email" : email,
            "password" : password,
        };

        let endPoint = "/api/getUser";
        fetch(endPoint, {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(myData){
            user = myData;
            var roundDropDown = document.getElementById("roundDropdown");
            setUserPredictions(roundDropDown.selectedIndex, user._id);
        })
    })
  
})();


function setRoundResults(roundId){
    fetch('/api/getRoundResults', {
        method: "post",
        body: JSON.stringify({"roundId": roundId}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(myData){
        
        if(myData != null){
            document.getElementById("home_team_1_aScore").value = myData.roundInfo.match1.homeTeam.score;
            document.getElementById("away_team_1_aScore").value = myData.roundInfo.match1.awayTeam.score;
            document.getElementById("home_team_2_aScore").value = myData.roundInfo.match2.homeTeam.score;
            document.getElementById("away_team_2_aScore").value = myData.roundInfo.match2.awayTeam.score;
            document.getElementById("home_team_3_aScore").value = myData.roundInfo.match3.homeTeam.score;
            document.getElementById("away_team_3_aScore").value = myData.roundInfo.match3.awayTeam.score;
            document.getElementById("home_team_4_aScore").value = myData.roundInfo.match4.homeTeam.score;
            document.getElementById("away_team_4_aScore").value = myData.roundInfo.match4.awayTeam.score;
            document.getElementById("home_team_5_aScore").value = myData.roundInfo.match5.homeTeam.score;
            document.getElementById("away_team_5_aScore").value = myData.roundInfo.match5.awayTeam.score;
            document.getElementById("home_team_6_aScore").value = myData.roundInfo.match6.homeTeam.score;
            document.getElementById("away_team_6_aScore").value = myData.roundInfo.match6.awayTeam.score;


            document.getElementById("team_image_1").src = "../images/" + myData.roundInfo.match1.homeTeam.name + ".png";
            document.getElementById("team_image_2").src = "../images/" + myData.roundInfo.match1.awayTeam.name + ".png";

            document.getElementById("team_image_3").src = "../images/" + myData.roundInfo.match2.homeTeam.name + ".png";
            document.getElementById("team_image_4").src = "../images/" + myData.roundInfo.match2.awayTeam.name + ".png";

            document.getElementById("team_image_5").src = "../images/" + myData.roundInfo.match3.homeTeam.name + ".png";
            document.getElementById("team_image_6").src = "../images/" + myData.roundInfo.match3.awayTeam.name + ".png";

            document.getElementById("team_image_7").src = "../images/" + myData.roundInfo.match4.homeTeam.name + ".png";
            document.getElementById("team_image_8").src = "../images/" + myData.roundInfo.match4.awayTeam.name + ".png";

            document.getElementById("team_image_9").src = "../images/" + myData.roundInfo.match5.homeTeam.name + ".png";
            document.getElementById("team_image_10").src = "../images/" + myData.roundInfo.match5.awayTeam.name + ".png";

            document.getElementById("team_image_11").src = "../images/" + myData.roundInfo.match6.homeTeam.name + ".png";
            document.getElementById("team_image_12").src = "../images/" + myData.roundInfo.match6.awayTeam.name + ".png";

            document.getElementById("first_player_1_to_score").value = myData.roundInfo.firstScorerMinutes;

        }

        console.dir(myData);
    })
}


function setUserPredictions(roundId, userId){
    console.info(roundId);
    fetch('/api/getUserPredictions', {
        method: "post",
        body: JSON.stringify({"roundId": roundId, "userId": userId}), 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(myData){
        
        if(myData != null){
            document.getElementById("home_team_1_pScore").value = myData.roundPredictions.match1.home;
            document.getElementById("away_team_1_pScore").value = myData.roundPredictions.match1.away;
            document.getElementById("home_team_2_pScore").value = myData.roundPredictions.match2.home;
            document.getElementById("away_team_2_pScore").value = myData.roundPredictions.match2.away;
            document.getElementById("home_team_3_pScore").value = myData.roundPredictions.match3.home;
            document.getElementById("away_team_3_pScore").value = myData.roundPredictions.match3.away;
            document.getElementById("home_team_4_pScore").value = myData.roundPredictions.match4.home;
            document.getElementById("away_team_4_pScore").value = myData.roundPredictions.match4.away;
            document.getElementById("home_team_5_pScore").value = myData.roundPredictions.match5.home;
            document.getElementById("away_team_5_pScore").value = myData.roundPredictions.match5.away;
            document.getElementById("home_team_6_pScore").value = myData.roundPredictions.match6.home;
            document.getElementById("away_team_6_pScore").value = myData.roundPredictions.match6.away;
        }
        else{
            document.getElementById("home_team_1_pScore").value = 0;
            document.getElementById("away_team_1_pScore").value = 0;
            document.getElementById("home_team_2_pScore").value = 0;
            document.getElementById("away_team_2_pScore").value = 0;
            document.getElementById("home_team_3_pScore").value = 0;
            document.getElementById("away_team_3_pScore").value = 0;
            document.getElementById("home_team_4_pScore").value = 0;
            document.getElementById("away_team_4_pScore").value = 0;
            document.getElementById("home_team_5_pScore").value = 0;
            document.getElementById("away_team_5_pScore").value = 0;
            document.getElementById("home_team_6_pScore").value = 0;
            document.getElementById("away_team_6_pScore").value = 0;
        }
    })
}

