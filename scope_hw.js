// MVP
// Episode 1

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// PREDICTED OUTPUT #1 - The murderer is Miss Scarlet.
// The [verdict] const variable (through the [declareMureder] function) 
// can access the value 'Miss Scarlet' within the [scenario] object.


// Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// PREDICTED OUTPUT #2 - SyntaxError
// The const variable [murderer] cannot be redefined.
// Hence, the [verdict] const variable (through the [declareMurderer] function)
// cannot access the new string of the [changeMurderer] function 
// neither its calling can become effective. 

// Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// PREDICTED OUTPUT #3 - First Verdict: The murderer is Mrs. Peacock.
//                       Second Verdict: The murderer is Profesor Plum.
// The const variable [firstVerdict] can access the scope of the block of 
// the [declareMurderer] function and prints the reassigned value of [murderer].
// The const variable [secondVerdict] can access the global let variable [murderer].

// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// PREDICTED OUTPUT #4 - The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
//                       Suspect three is Mrs. Peacock.
// The const variable [suspects] (through the [declareAllSuspects] function)
// can access the redefined let variable [suspectThree], printing the new name.
// The second console.log can access the global let variable [suspectThree].

// Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// PREDICTED OUTPUT #5 - The weapon is the Revolver.
// The const variable [verdict] (through the [declareWeapon] function)
// can access the reassigned value of the object [scenario]
// made effective with the function [changeWeapon]

// Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// PREDICTED OUTPUT #6 - The murderer is Mrs.White.
// The const variable [verdict] (through the [declareMurderer] function)
// can access the reassigned values of [murderer] within [changeMurderer]
// because of scope pollution and lack of variable keywords.
// First gets globally defined as 'Mr. Green' and secondly as 'Mrs. White'.