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
// can access the value 'Miss Scarlet' 
// within the globally defined [scenario] object.


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