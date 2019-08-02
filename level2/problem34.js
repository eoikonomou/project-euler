const factorial = require('../level1/problem20');
// Digit factorials

/*
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/

const factorials = [];
for (let i = 0; i < 10; i++) {
  factorials.push(factorial(i));
}

function getSumOfDigitFactorials(number) {
  return number.toString().split('').map(digit => factorials[Number(digit)]).reduce((p, c) => p + c, 0);
}

function getSumOfCuriousNumbers(limit) {
  const now = Date.now();
  let sum = 0;
  for (let i = 10; i <= limit; i++) {
    if (getSumOfDigitFactorials(i) === i) {
      sum += i;
    }
  }
  console.log(require('../utils/time')(now));
  return sum;
}

console.log(getSumOfCuriousNumbers(200000)); // 40730
