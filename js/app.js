'use strict';

alert('Let\'s play a game about me!');

var likeTomatoes = prompt('Do you think I like tomatos?').toLowerCase();
if (likeTomatoes === 'yes') {
  alert('Correct! I love tomatoes with salt!');
} else {
  alert('Actually, I do love tomatoes!');
}
console.log('Like tomatoes? The user answered: ' + likeTomatoes);

var myAge = prompt('Do you think that I am 26 years old?').toLowerCase();
if (myAge === 'yes') {
  alert('Correct! I am 26 years old!');
} else {
  alert('That is incorrect! I am 26 years old!');
}
console.log('Am I 26? The user answered: ' + myAge);

var favAnimal = prompt('Am I a cat lover?').toLowerCase();
if (favAnimal === 'no') {
  alert('You got it, I am NOT a cat lover!');
} else {
  alert('Ooops! I am actually a dog lover!');
}
console.log('Animal lover? The user answered: ' + favAnimal);

var bigFear = prompt('Is my biggest fear heights?').toLowerCase();
if (bigFear === 'no') {
  alert('Correct! My biggest fear is spiders!');
} else {
  alert('Sorry, my biggest fear is spiders!');
}
console.log('Biggest fear heights? The user answered: ' + bigFear);

var visitedAus = prompt('Have I been to Australia?').toLowerCase();
if (visitedAus === 'no') {
  alert('Correct, I have not been to Australia!');
} else {
  alert('That\'s wrong! I have not been to Australia.');
}
console.log('Been to australia? The user answered: ' + visitedAus);