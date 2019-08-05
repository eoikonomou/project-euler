// Coded triangle numbers

/*
The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value.
For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.

Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?
*/

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getTriangleNumbers(limit) {
  const triangleNumbers = [];
  let triangleNumber = 0;
  let n = 1;
  while (triangleNumber < limit) {
    triangleNumber = (n * (n + 1)) / 2;
    triangleNumbers.push(triangleNumber);
    n++;
  }
  return triangleNumbers;
}

function getWordValue(word) {
  return word.split('').reduce((p, c) => p + alphabet.indexOf(c.toUpperCase()) + 1, 0);
}

function countCodedTriangleNumbers() {
  const now = Date.now();
  const wordValues = require('fs')
    .readFileSync(require('path').join(__dirname, 'helper/words.txt'))
    .toString()
    .split(',')
    .map(word => getWordValue(word));

  const triangleNumbers = getTriangleNumbers(Math.max(...wordValues));

  const count = wordValues.filter(wv => triangleNumbers.includes(wv)).length;
  console.log(require('../utils/time')(now));
  return count;
}

console.log(countCodedTriangleNumbers()); // 162
