const bigInt = require('big-integer');
// Amicable numbers

/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

function calculateSumOfProperDivisors(number) {
  let sumOfProperDivisors = bigInt(0);
  for (let i = 1; i <= number / 2; i++) {
    if (number.mod(i).equals(bigInt(0))) {
      sumOfProperDivisors = sumOfProperDivisors.plus(i);
    }
  }
  return sumOfProperDivisors;
}

function sumOfAmicableNumbers(limit) {
  const now = Date.now();
  let dObject = {};
  let amicableNumbers = new Set();
  for (let i = 1; i < limit; i++) {
    const sumOfProperDivisors = calculateSumOfProperDivisors(bigInt(i));
    dObject[i] = sumOfProperDivisors;
    if (dObject[sumOfProperDivisors] && dObject[sumOfProperDivisors].equals(i) && bigInt(i).neq(sumOfProperDivisors)) {
      amicableNumbers.add(i);
      amicableNumbers.add(sumOfProperDivisors);
    }
  }
  console.log(require('../utils/time')(now));
  return Array.from(amicableNumbers).reduce((p, c) => p + c, 0);
}

// console.log(sumOfAmicableNumbers(285)); // 572
console.log(sumOfAmicableNumbers(10000)); // 31626
