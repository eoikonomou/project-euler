const bigInt = require('big-integer');
// Number spiral diagonals

/*
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

function getSumOfThePartsOfTheDiagonals(arraySize) {
  if (arraySize === 1) {
    return bigInt(1);
  }
  const upperRight = bigInt(arraySize).pow(bigInt(2));
  const upperLeft = upperRight.minus(bigInt(arraySize - 1));
  const lowerLeft = upperLeft.minus(bigInt(arraySize - 1));
  const lowerRight = lowerLeft.minus(bigInt(arraySize - 1));

  return upperRight.add(upperLeft).add(lowerLeft).add(lowerRight).add(getSumOfThePartsOfTheDiagonals(arraySize - 2));
}

function getSumOfDiagonals(arraySize) {
  const now = Date.now();
  const sum = getSumOfThePartsOfTheDiagonals(arraySize).toJSNumber();
  console.log(require('../utils/time')(now));
  return sum;
}

console.log(getSumOfDiagonals(1001)); // 669171001
