const {
  isPrime
} = require('../level1/problem7');
// Truncatable primes

/*
The number 3797 has an interesting property.
Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7.
Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

function findSumOfTruncatablePrimes() {
  const now = Date.now();
  let sum = 0;
  let truncatablePrimes = [];
  let number = 11;
  while (truncatablePrimes.length < 11) {
    if (isPrime(number)) {
      const numberString = number.toString();
      let isTruncatablePrime = true;
      for (let i = 0; i < numberString.length; i++) {
        if (!isPrime(Number(numberString.substr(0, i))) || !isPrime(Number(numberString.substr(i, numberString.length)))) {
          isTruncatablePrime = false;
          break;
        }
      }
      if (isTruncatablePrime) {
        sum += number;
        truncatablePrimes.push(number);
      }
    }
    number += 2;
  }
  console.log(require('../utils/time')(now));
  console.log(truncatablePrimes);
  return sum;
}

console.log(findSumOfTruncatablePrimes()); // 748317
