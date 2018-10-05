(function() {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://localhost:3000/api/getAllScoreCardResults",
        "method": "GET",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            "Postman-Token": "7343a85f-3ca2-4163-83ef-928db0d74f5e"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        var table = document.getElementById('allResults');
        response.forEach(result => {
            var tableRow = document.createElement('tr');
            var td1 = document.createElement('td');
            var roundNo = document.createTextNode(result.roundId);
            td1.appendChild(roundNo);
            tableRow.appendChild(td1);
            var td2 = document.createElement('td');
            var match1 = document.createTextNode(result.roundInfo.match1.homeTeam.name + " " + result.roundInfo.match1.homeTeam.score
            + ":" + result.roundInfo.match1.awayTeam.score + " " + result.roundInfo.match1.awayTeam.name);
            td2.appendChild(match1);
            tableRow.appendChild(td2);
            var td3 = document.createElement('td');
            var match2 = document.createTextNode(result.roundInfo.match2.homeTeam.name + " " + result.roundInfo.match2.homeTeam.score
            + ":" + result.roundInfo.match2.awayTeam.score + " " + result.roundInfo.match2.awayTeam.name);
            td3.appendChild(match2);
            tableRow.appendChild(td3);
            var td4 = document.createElement('td');
            var match3 = document.createTextNode(result.roundInfo.match3.homeTeam.name + " " + result.roundInfo.match3.homeTeam.score
            + ":" + result.roundInfo.match3.awayTeam.score + " " + result.roundInfo.match3.awayTeam.name);
            td4.appendChild(match3);
            tableRow.appendChild(td4);
            var td5 = document.createElement('td');
            var match4 = document.createTextNode(result.roundInfo.match4.homeTeam.name + " " + result.roundInfo.match4.homeTeam.score
            + ":" + result.roundInfo.match4.awayTeam.score + " " + result.roundInfo.match4.awayTeam.name);
            td5.appendChild(match4);
            tableRow.appendChild(td5);
            var td6 = document.createElement('td');
            var match5 = document.createTextNode(result.roundInfo.match5.homeTeam.name + " " + result.roundInfo.match5.homeTeam.score
            + ":" + result.roundInfo.match5.awayTeam.score + " " + result.roundInfo.match5.awayTeam.name);
            td6.appendChild(match5);
            tableRow.appendChild(td6);
            var td7 = document.createElement('td');
            var match6 = document.createTextNode(result.roundInfo.match6.homeTeam.name + " " + result.roundInfo.match6.homeTeam.score
            + ":" + result.roundInfo.match6.awayTeam.score + " " + result.roundInfo.match6.awayTeam.name);
            td7.appendChild(match6);
            tableRow.appendChild(td7);
            var td8 = document.createElement('td');
            var firstScore = document.createTextNode(result.roundInfo.firstScorerMinutes);
            td8.appendChild(firstScore);
            tableRow.appendChild(td8);
            var td9 = document.createElement('td');
            var myButt = document.createElement('button');
            var buttText = document.createTextNode('DELETE');
            myButt.id = result._id;
            td9.appendChild(myButt);
            myButt.appendChild(buttText);
            tableRow.appendChild(td9);


            table.appendChild(tableRow);

            $('#'+result._id).click(function() {
                var settingsForDelete = {
                    "async": false,
                    "crossDomain": true,
                    "url": "http://localhost:3000/api/deleteScoreCardResult",
                    "method": "DELETE",
                    "headers": {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Cache-Control": "no-cache",
                        "Postman-Token": "e474a33a-a065-4ba6-a20b-fe4428bb34b2"
                    },
                    "data": {
                     "id": result._id
                    }
                }

                $.ajax(settingsForDelete).done(function (response) {
                  console.log(response);
                  
                });
                $(this).parent().parent().remove();
                
                var settingsForCalculating = {
                    "async": true,
                    "crossDomain": true,
                    "url": "http://localhost:3000/api/calculateScoreForLeaderboard",
                    "method": "GET",
                    "headers": {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Cache-Control": "no-cache",
                        "Postman-Token": "bd5f395e-e0bd-4d92-8622-f617ba618316"
                     }
                }

                $.ajax(settingsForCalculating).done();

            });

        });
    });
})();