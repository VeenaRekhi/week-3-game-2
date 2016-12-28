// JavaScript Document
// Declare and initialize array
    var game =[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
     "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Generate a random number between 0 to 39 and store it in variable "choice"  
    var choice = Math.floor(Math.random()*26);

// Get the word from word array(game) based on random number stored
// in choice and put the word in variable answer.
    var answer = game[choice];

// Store the length of selected word in variable "myLength".
    var myLetter = answer.length;

// Declare variable "display" as an array of length of selected word.
    var display = [myLetter];

// Declare variable "win" and set to myLength to put check if user
// got all the letters in the chosen word.
    var wins = myLetter;
    var losses = myLetter;

// Create variable "attemptsLeft" and set it to 10 as the max no. of attempts.
    var attemptsLeft = 10;

// Create a variable output to pass the output back to the "HTML" file.
    var output = "";

// Create a variable "userLetter" to store the letter pressed by user.
    var userLetter = "";

// Create a variable "usedLetter" to store the letters used so far.
    var usedLetters = "";

// Create a variable "lives" to track no of lives left.
    var lives = 6;

// Create a variable "resetGame" to track when to start a new game
    var resetGame = 1;

// When the user presses a key, it will run the following function...
  document.onkeyup = function(event) {


 //alert("hello");
// To reset the game, set the usedLetters=0, if win, then Lives=6, if lose then,Lives=-1.
//After user have used 6 lives send an alert message to the user to start the game again.
if (resetGame == 1)
{   
  myFunction();      
}
else
{
// Determine which key was pressed, make it lowercase, and set it to the userLetter variable.
  var userLetter = String.fromCharCode(event.keyCode).toUpperCase();
  output = "";
  usedLetters = usedLetters + " " + userLetter;
    document.getElementById("LETTER").innerHTML = output;
    output = "";
    
    
  for (var c = 0; c < answer.length; c++)
    {
        // alert(letter[c]);
        if (answer[c] == userLetter)
        {
            display[c] = userLetter + " ";
            win --;
        }
    output = output + display[c];
  }

  document.getElementById("LETTER").innerHTML = output;
    output = "";
 

  document.getElementById("usedLetters").innerHTML = usedLetters;

  document.getElementById("display").innerHTML = myLetter;

  document.getElementById("lives").innerHTML = lives;

  if (win < 1) 
  {
  document.getElementById("wins").innerHTML = wins++;
  resetGame = 1;
  }
   else if (attemptsLeft < 1)
   {
  document.getElementById("losses").innerHTML = losses++;
  lives --;
  resetGame = 1;
  }

  else
  {
  document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left";  
  attemptsLeft --;
}
}
if (lives == 0)  {
  myFunction();
  lives = 6;
}
}
// When the user presses a key, it will run the following function to restart the game....



function myFunction() {
    choice = Math.floor(Math.random()*26);
    answer = game[choice];
    myLetter = answer.length;
    display = [myLetter];
    win = myLetter;
    attemptsLeft = 10;
    output = "";
    usedLetters = "";
    
    resetGame = 0;
    for (var i = 0; i < answer.length; i++) {

      display[i] = "_ ";
      output = output + display[i];
    }
      document.getElementById("LETTER").innerHTML = output;
      document.getElementById("display").innerHTML = myLetter;
      document.getElementById("usedLetters").innerHTML = usedLetters;
      document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left";
      attemptsLeft --;
      
}







