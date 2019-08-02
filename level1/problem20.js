const bigInt = require('big-integer');
// Factorial digit sum

/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/
function factorial(num) {
  if ([0, 1].includes(num)) {
    return 1;
  }
  return bigInt(num).multiply(bigInt(factorial(num - 1)));
}

function factorialDigitSum(num) {
  const now = Date.now();
  const number = factorial(num);
  const sum = number.toString().split('').reduce((p, c) => p + Number(c), 0);
  console.log(require('../utils/time')(now));
  return sum;
}

// console.log(factorialDigitSum(10)); // 27
// console.log(factorialDigitSum(100)); // 648

module.exports = factorial;
