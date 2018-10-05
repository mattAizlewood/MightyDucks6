(function() {    
    var settings = {
      "async": false,
      "crossDomain": true,
      "url": "http://localhost:3000/api/getAllUsersGlobalLeaderboard",
      "method": "GET",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache",
        "Postman-Token": "a3853e89-c502-4d4a-afa3-e2815afeb1e4"
      }
    }
    
    var results = [];
    
    
    results = $.ajax(settings).done(function (response) {
        return response.responseJSON;
    }).responseJSON;
    
    var leaderboardResults = (results) => {
        console.log(results)
        var res = [];
        var i = 0;
        results.forEach(user => {
            res.push(user);
            //console.log(user.userID);
            var settingsForPersona = {
                "async":false,
                "crossDomain": true,
                "url": "http://localhost:3000/api/getUserPersona/" + user.userID,
                "method": "GET",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Cache-Control": "no-cache",
                    "Postman-Token": "8b2170a7-3d8b-4463-a0d5-c85b9b0e3517"
                }
            }
            $.ajax(settingsForPersona).done((response) => {
                if (response.isUserLoggedIn){
                    document.getElementById("login").style.display = "none";
                    document.getElementById("register").style.display = "none";
                    document.getElementById("logout").style.display = "block";
                }
                console.log(response);
                res[i].persona = response.persona;
            });
            i = i+1;
        });
        return res;
    }
    
    leaderboard = leaderboardResults(results);
    var table = document.getElementById('Leaderboards');
    var i = 1;
    leaderboard.forEach((player) => {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var position = document.createTextNode(i.toString());
        td1.appendChild(position);
        var td2 = document.createElement("td");
        var persona = document.createTextNode(player.persona);
        td2.appendChild(persona);
        var td3 = document.createElement("td");
        var score = document.createTextNode(player.score.toString());
        td3.appendChild(score);
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        table.appendChild(tr);
        i = i+1;
    
        
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