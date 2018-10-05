(function() {
    var settings = {
         "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/getAllScoreCards",
        "method": "GET",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            "Postman-Token": "c862fc3b-5725-4fc3-86e3-c417250bde2b"
         }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        var table = document.getElementById('allScoreCards');
        response.forEach(scorecard => {
            var tableRow = document.createElement('tr');
            var td1 = document.createElement('td');
            var roundNum = document.createTextNode(scorecard.roundId);
            td1.appendChild(roundNum);
            var td2 = document.createElement('td');
            var match1 = document.createTextNode(scorecard.roundInfo.match1.homeTeam + ' vs ' + scorecard.roundInfo.match1.awayTeam);
            td2.appendChild(match1)
            var td3 = document.createElement('td');
            var match2 = document.createTextNode(scorecard.roundInfo.match2.homeTeam + ' vs ' + scorecard.roundInfo.match2.awayTeam);
            td3.appendChild(match2);
            var td4 = document.createElement('td');
            var match3 = document.createTextNode(scorecard.roundInfo.match3.homeTeam + ' vs ' + scorecard.roundInfo.match3.awayTeam);
            td4.appendChild(match3);
            var td5 = document.createElement('td');
            var match4 = document.createTextNode(scorecard.roundInfo.match4.homeTeam + ' vs ' + scorecard.roundInfo.match4.awayTeam);
            td5.appendChild(match4);
            var td6 = document.createElement('td');
            var match5 = document.createTextNode(scorecard.roundInfo.match5.homeTeam + ' vs ' + scorecard.roundInfo.match5.awayTeam);
            td6.appendChild(match5);
            var td7 = document.createElement('td');
            var match6 = document.createTextNode(scorecard.roundInfo.match6.homeTeam + ' vs ' + scorecard.roundInfo.match6.awayTeam);
            td7.appendChild(match6);
            tableRow.appendChild(td1);
            tableRow.appendChild(td2);
            tableRow.appendChild(td3);
            tableRow.appendChild(td4);
            tableRow.appendChild(td5);
            tableRow.appendChild(td6);
            tableRow.appendChild(td7);
            
            var td8 = document.createElement('td');
            var delButt = document.createElement('button');
            var delText = document.createTextNode('DELETE');
            delButt.id = scorecard._id;
            delButt.appendChild(delText);
            td8.appendChild(delButt);
            tableRow.appendChild(td8);

            table.appendChild(tableRow);

            $('#' + scorecard._id).click(function() {
                var settingsForDel = {
                    "async": true,
                    "crossDomain": true,
                    "url": "http://localhost:3000/api/deleteScoreCard",
                    "method": "DELETE",
                    "headers": {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Cache-Control": "no-cache",
                        "Postman-Token": "e317dddf-7dc6-4a22-bc58-5583a1aff919"
                    },
                    "data": {
                        "id": scorecard._id
                         }
                    }

                $.ajax(settingsForDel).done(function (response) {
                     console.log(response);
                });

                $(this).parent().parent().remove();

            });
            
        });
    });
})();