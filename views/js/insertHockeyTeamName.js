let home1Option = document.getElementById('home_1_option').options;
let away1Option = document.getElementById('away_1_option').options;
let home2Option = document.getElementById('home_2_option').options;
let away2Option = document.getElementById('away_2_option').options;
let home3Option = document.getElementById('home_3_option').options;
let away3Option = document.getElementById('away_3_option').options;
let home4Option = document.getElementById('home_4_option').options;
let away4Option = document.getElementById('away_4_option').options;
let home5Option = document.getElementById('home_5_option').options;
let away5Option = document.getElementById('away_5_option').options;
let home6Option = document.getElementById('home_6_option').options;
let away6Option = document.getElementById('away_6_option').options;



let options = [
    { name: "Anaheim Ducks" },
    { name: "Arizona Coyotes" },
    { name: "Boston Bruins" },
    { name: "Buffalo Sabres" },
    { name: "Calgary Flames" },
    { name: "Carolina Hurricanes" },
    { name: "Chicago Blackhawks" },
    { name: "Colorado Avalanche" },
    { name: "Columbus Blue Jackets" },
    { name: "Dallas Stars" },
    { name: "Detroit Red Wings" },
    { name: "Edmonton Oilers" },
    { name: "Florida Panthers" },
    { name: "Los Angeles Kings" },
    { name: "Minnesota Wild" },
    { name: "Montreal Canadiens" },
    { name: "Nashville Predators" },
    { name: "New Jersey Devils" },
    { name: "New York Islanders" },
    { name: "New York Rangers" },
    { name: "Ottawa Senators" },
    { name: "Philadelphia Flyers" },
    { name: "Pittsburgh Penguins" },
    { name: "San Jose Sharks" },
    { name: "St. Louis Blues" },
    { name: "Tampa Bay Lightning" },
    { name: "Toronto Maple Leafs" },
    { name: "Vancouver Canucks" },
    { name: "Vegas Golden Knights" },
    { name: "Washington Capitals" },
    { name: "Winnipeg Jets" }
];

options.forEach(
    option => home1Option.add(
        new Option(option.name)
    )
);

options.forEach(
    option => away1Option.add(
        new Option(option.name)
    )
);

options.forEach(
    option => home2Option.add(
        new Option(option.name)
    )
);

options.forEach(
    option => away2Option.add(
        new Option(option.name)
    )
);

options.forEach(
    option => home3Option.add(
        new Option(option.name)
    )
);

options.forEach(
    option => away3Option.add(
        new Option(option.name)
    )
);

options.forEach(
    option => home4Option.add(
        new Option(option.name)
    )
);

options.forEach(
    option => away4Option.add(
        new Option(option.name)
    )
);

options.forEach(
    option => home5Option.add(
        new Option(option.name)
    )
);

options.forEach(
    option => away5Option.add(
        new Option(option.name)
    )
);

options.forEach(
    option => home6Option.add(
        new Option(option.name)
    )
);

options.forEach(
    option => away6Option.add(
        new Option(option.name)
    )
);

//Set Drop Down to empty
document.getElementById('home_1_option').selectedIndex = -1;
document.getElementById('away_1_option').selectedIndex = -1;
document.getElementById('home_2_option').selectedIndex = -1;
document.getElementById('away_2_option').selectedIndex = -1;
document.getElementById('home_3_option').selectedIndex = -1;
document.getElementById('away_3_option').selectedIndex = -1;
document.getElementById('home_4_option').selectedIndex = -1;
document.getElementById('away_4_option').selectedIndex = -1;
document.getElementById('home_5_option').selectedIndex = -1;
document.getElementById('away_5_option').selectedIndex = -1;
document.getElementById('home_6_option').selectedIndex = -1;
document.getElementById('away_6_option').selectedIndex = -1;