const bigInt = require('big-integer');
// Self powers

/*
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/

function findLastTenDigitsOfNumber(exponent) {
  const now = Date.now();
  let sum = bigInt(0);
  for (let i = 1; i <= exponent; i++) {
    sum = sum.add(bigInt(i).pow(bigInt(i)));
  }
  const result = sum.toString().substr(sum.toString().length - 10);
  console.log(require('../utils/time')(now));
  return result;
}

// console.log(findLastTenDigitsOfNumber(10)); // 0405071317
console.log(findLastTenDigitsOfNumber(1000)); // 9110846700
