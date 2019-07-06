var redCount = 0;
var yellowCount = 0;
var blueCount = 0;
var greenCount = 0;

const redScoreCount = document.getElementById('redScore');
const yellowScoreCount = document.getElementById('yellowScore');
const blueScoreCount = document.getElementById('blueScore');
const greenScoreCount = document.getElementById('greenScore');

const colour_button = document.getElementById('colour');

function colours(red, yellow, blue, green){
    
    var background = document.getElementById('changeColour');
    var number = Math.floor(Math.random() * 4);
    console.log(number);
    
    if (number == 0) {
        redCount++;
        document.getElementById("redScore").innerHTML = redCount;
        background.classList.remove('yellow', 'blue', 'green');
        background.classList.add('red');
    }
    if (number == 1) {
        yellowCount++;
        document.getElementById("yellowScore").innerHTML = yellowCount;
        background.classList.remove('red', 'blue', 'green');
        background.classList.add('yellow');
    }
    if (number == 2) {
        blueCount++;
        document.getElementById("blueScore").innerHTML = blueCount;
        background.classList.remove('red', 'yellow', 'green');
        background.classList.add('blue');
    }
    if (number == 3) {
        greenCount++;
        document.getElementById("greenScore").innerHTML = greenCount;
        background.classList.remove('red', 'yellow', 'blue');
        background.classList.add('green');
    }
    
}

function overallRating(fullStar5){
    
    var x = document.forms["stars"]["fundingStar"].value;
    var y = document.forms["stars"]["mentoringStar"].value;
    var z = document.forms["stars"]["otherStar"].value;
    var o = 1;
    //((x + y + z) / 3);
    console.log("You have given X a rating of " + x + " for funding.");
    console.log("You have given X a rating of " + y + " for mentoring.");
    console.log("You have given X a rating of " + z + " for other.");
    
    if (o < 4.75) {
        console.log("o is less that 4.75");
        document.getElementById(fullStar5).classList.add('disappear');
    }
}