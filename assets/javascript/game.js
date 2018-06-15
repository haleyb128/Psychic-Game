//variables 

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// var correct = 0;
// var wrong = 0;
var guesses = 20;
var wins = 0;
var losses = 0;
var lettersGuessed = [];

var answer = "";
// $("#lettersGuessed")
function round(){
answer = letters[Math.floor(Math.random() * letters.length)];
var winsCounter = document.getElementById("wins");
    winsCounter.innerHTML = wins;
var lossCounter = document.getElementById("losses");
    lossCounter.innerHTML = losses;
var remaining = document.getElementById("guessesLeft");
    remaining.textContent = guesses;
var attempted = document.getElementById("lettersGuessed");
    attempted.textContent = lettersGuessed;
}
//user input
document.onkeyup = function(event) {
    var guess = event.key;
    if (guess == answer){
        // wins++;
        alert("You're a psychic superstar!");
        winReset();
    }
    else{
        lettersGuessed.push(guess);
        guesses--;
        var i = document.getElementById("lettersGuessed");
        i.textContent = lettersGuessed;
        var l = document.getElementById("guessesLeft");
        l.textContent = guesses;
        
        if(guesses == 0){
        alert("I didn't think it was possible, but YOU LOST!");
        loseReset();
        }
    }
    
    

}
function winReset(){
    wins ++;
    guesses = 20;
    lettersGuessed = [];
    round();
}

function loseReset(){
    losses ++;
    guesses = 20;
    lettersGuessed = [];
    round();
}


