const nextPrime = require('./problem7').nextPrime;

// Summation of primes

/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

function sumOfPrimes(limit) {
  const now = Date.now();
  let sumOfPrimes = 2;
  let prime = 2;
  while (prime < limit) {
    prime = nextPrime(prime);
    if (prime > limit) {
      const solutionTime = Date.now() - now;
      console.log(`Solved in ${solutionTime < 1000 ? `${solutionTime}ms` : `${(solutionTime/1000).toFixed(2)}s`}`);
      return sumOfPrimes;
    }
    sumOfPrimes += prime;
  }
}

// console.log(sumOfPrimes(10)); // 17
console.log(sumOfPrimes(2000000)); // 142913828922
