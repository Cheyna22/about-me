'use strict';

alert('Let\'s play a guessing game about Cheyna!');

// do i like tomatoes
var likeTomatoes = prompt('Do you think she like tomatos?').toLowerCase();
if (likeTomatoes === 'yes') {
  alert('Correct! I love tomatoes with salt!');
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
} else if (visitedAus === 'n') {
  alert('Correct, I have not been to Australia!');
} else {
  alert('That\'s wrong! I have not been to Australia.');
}
console.log('Been to australia? The user answered: ' + visitedAus);