'use strict';
var correctA = ("Good job! That is correct!");
var wrongA = ("Sorry, that is incorrect!");

var points = 0;
var numGuesses = 0;

//1st alert
alert('Let\'s play a guessing game about Cheyna!');

// do i like tomatoes
var likeTomatoes = prompt('Do you think she likes tomatos?').toLowerCase();
if (likeTomatoes === 'yes') {
  alert('Correct! I love tomatoes with salt!');
  points = points + 1;
} else if (likeTomatoes === 'y') {
  alert('Correct! I love tomatoes with salt!');
} else {
  alert('Actually, I do love tomatoes!');
}
console.log('Like tomatoes? The user answered: ' + likeTomatoes);

// am I 26?
var myAge = prompt('Do you think that she 26 years old?').toLowerCase();
if (myAge === 'yes') {
  alert('Correct! I am 26 years old!');
  points = points + 1;
} else if (myAge === 'y') {
  alert('Correct! I am 26 years old!');
} else {
  alert('That is incorrect! I am 26 years old!');
}
console.log('Am I 26? The user answered: ' + myAge);

// favorite animal questions
var favAnimal = prompt('Is she a cat lover?').toLowerCase();
if (favAnimal === 'no') {
  alert('You got it, I am NOT a cat lover!');
  points = points + 1;
} else if (favAnimal === 'n') {
  alert('You got it, I am NOT a cat lover!');
} else {
  alert('Ooops! I am actually a dog lover!');
}
console.log('Animal lover? The user answered: ' + favAnimal);


// is heights biggest fear
var bigFear = prompt('Is her biggest fear heights?').toLowerCase();
if (bigFear === 'no') {
  alert('Correct! My biggest fear is spiders!');
  points = points + 1;
} else if (bigFear === 'n') {
  alert('Correct! My biggest fear is spiders!');
} else {
  alert('Sorry, my biggest fear is spiders!');
}
console.log('Biggest fear heights? The user answered: ' + bigFear);


// have i been to australia
var visitedAus = prompt('Has she ever been to Australia?').toLowerCase();
if (visitedAus === 'no') {
  alert('Correct, I have not been to Australia!');
  points = points + 1;
} else if (visitedAus === 'n') {
  alert('Correct, I have not been to Australia!');
} else {
  alert('That\'s wrong! I have not been to Australia.');
}
console.log('Been to australia? The user answered: ' + visitedAus);



for (var i = 0; i < 4; i++) {
  var numDogs = parseInt(prompt('We know that Cheyna is a dog lover.  You have 4 guesses to tell me how many dogs do you think she has?'));
  numGuesses = numGuesses + 1;
  console.log('total guesses '+ numGuesses);
    if (numDogs === 2) {
      alert(correctA);
      console.log(numDogs + 'correct');
      points = points + 1;
      break;
    } else {
      //alert(wrongA);
      if (numDogs <= 1) {
        console.log('number of guesses less than or equal to 1 ' + numGuesses);
        if (numGuesses === 4) {
           alert('Uh-Oh! You ran out of guesses, better luck next time!');
           break;
        } else {
          alert('That\'s too low! Guess again.');
        }
      } else {
        if (numGuesses === 4) {
          alert('Uh-oh! You ran out of guesses, better luck next time!');
          break;
        }
        console.log('user guessed too high ' + numDogs);
       alert('That was too high, try again!');
      }
    }
}

var visitedStates = ['wyoming', 'california', 'oregon', 'north dakota', 'utah', 'montana'];
var stateGuessCounter = 0;



for (var i = 0; i < 6; i++) {
  var stateGuess = prompt("What states do you think Cheyna has been to?").toLowerCase();  
  stateGuessCounter = stateGuessCounter + 1;
  console.log(stateGuess);
  console.log(visitedStates.indexOf(stateGuess));
  console.log(stateGuessCounter);
  if (visitedStates.indexOf(stateGuess) >= 0) {
    points = points + 1;
    alert('That is correct!');
    break;
  } else {
    alert('Sorry! That is incorrect!');
    if (stateGuessCounter === 6) {
      alert('Uh-oh! You have no more guesses! Here are the correct possible answers: ' + visitedStates[0] + ', ' + visitedStates[1].toUpperCase + ', ' + visitedStates[2] + ', ' + visitedStates[3] + ', ' + visitedStates[4] + ', or ' + visitedStates[5] + '.');
      break;
    }
  }
}


//total points after game
if (points === 1) {
  alert('Total Points: ' + points);
  console.log('user has ' + points + ' point');
} else {
  alert('Total Points: ' + points);
  console.log('user has ' + points + ' points');
}