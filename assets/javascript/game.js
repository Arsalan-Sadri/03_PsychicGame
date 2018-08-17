// Creating variables to hold user guesses, and the number of wins, losses, guesses left.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess;
var userGuessArr = [];
var computerGuess;
var computerGuessArr = [];

// Generating a string of letters that computer will pick from 
var computerChoices = "abcdefghijklmnopqrstuvwxyz";

// A function to insert new updates into the page
function updateContent() {
    var newContent =
        "<p>Wins: " + wins + "</p>" +
        "<p>Loses " + losses + "</p>" +
        "<p>Guesses left: " + guessesLeft + "</p>" +
        "<p>Computer guess so far: " + computerGuessArr + "</p>" +
        "<p>Your guesses so far: " + userGuessArr + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.getElementById("emptyDiv").innerHTML = newContent;
} // End of updateContent

// The content that has to be shown on startup
document.body.onload = function () {
    updateContent();
}

// A function to compare user input against computer choice and update results accordingly
function compare() {

    // If user input matches computer choice 
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
    } // End of if
    // If they do not match 
    else {
        guessesLeft--;
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            userGuessArr = [];
            computerGuessArr = [];
        }
    } // End of else
} // End of compare function

// Event handler to respond to user input  
document.body.onkeyup = function (event) {

    // Determines which key was pressed and have it stored
    userGuess = event.key;
    userGuessArr.push(userGuess);

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    computerGuess = computerChoices.charAt(Math.floor(Math.random() * computerChoices.length));
    computerGuessArr.push(computerGuess);

    // Comapring and updating scores
    compare();

    // Updating the web page
    updateContent();

} //End of event handler