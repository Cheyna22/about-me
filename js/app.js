'use strict';

alert('Let\'s play a game!');

var likeTomatoes = prompt('Do you think I like tomatos?').toLowerCase();
if (likeTomatoes === 'yes' || 'y') {
  alert('Correct! I love tomatoes with salt!');
} else {
  alert('Actually, I do love tomatoes!');
}
console.log('The user answered: ' + likeTomatoes);

var myAge = prompt('Do you think that I am 26 years old?').toLowerCase();
if (myAge === 'yes' || 'y') {
  alert('Yes! I am 26 years old!');
} else {
  alert('That is incorrect! I am 26 years old!');
}
console.log('The user answered: ' + myAge);

var favAnimal = prompt('Am I a cat lover?').toLowerCase();
if (favAnimal === 'yes' || 'y') {
  alert('Ooops! I am actuall a dog lover!');
} else {
  alert('You got it, I am NOT a cat lover!');
}
console.log('The user answered: ' + favAnimal);

var bigFear = prompt('Is my biggest fear heights?').toLowerCase();
if (bigFear === 'yes' || 'y') {
  alert('No! I love heights!');
} else {
  alert('Correct! My biggest fear is spiders!');
}
console.log('The user answered: ' + bigFear);

var visitedAus = prompt('Do you think I have ever visited Australia?').toLowerCase();
if (visitedAus === 'yes' || 'y') {
  alert('I actually have NOT been, but I would love to!');
} else {
  alert('Correct, I have not been to Australia!');
}
console.log('The user answered: ' + visitedAus);