const isPrime = require('../level1/problem7').isPrime;
// Consecutive prime sum

/*
The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?
*/

function findPrimeWitMostConsecutivePrimesSum(limit) {
  const now = Date.now();
  const primes = [2];
  let prime = 0;
  let consecutivePrimesCount = 0;
  for (let i = 3; i < limit / 2; i += 2) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  for (let i = 0; i < primes.length; i++) {
    let currentSum = 0;
    let currentCount = 0;
    let currentPrime = 0;
    if (primes.length - i < consecutivePrimesCount) {
      break;
    }
    for (let j = i; j < primes.length; j++) {
      currentSum += primes[j];
      if (currentSum > limit) {
        break;
      }
      if (isPrime(currentSum)) {
        currentCount = j - i + 1;
        currentPrime = currentSum;
        if (currentCount > consecutivePrimesCount) {
          consecutivePrimesCount = currentCount;
          prime = currentPrime;
        }
      }
    }
  }
  console.log(require('../utils/time')(now));
  return {
    prime,
    consecutivePrimesCount,
  };
}

console.log(findPrimeWitMostConsecutivePrimesSum(999999)); // 997651
