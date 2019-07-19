const bigInt = require('big-integer');
// Power digit sum

/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

function powerDigitSum(exponent) {
  const now = Date.now();
  let number = bigInt(2).pow(bigInt(exponent));
  const sum = number.toString().split('').reduce((p, c) => p + Number(c), 0);
  console.log(require('../utils/time')(now));
  return sum;
}

// console.log(powerDigitSum(15)); // 26
console.log(powerDigitSum(1000)); // 1366
