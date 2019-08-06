// Distinct primes factors

/*
The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?
*/

function findFirstOf4() {
  const now = Date.now();
  const primes = [2];
  console.log('populating primes...');
  for (let i = 3; i < 10000; i += 2) {
    if (require('../level1/problem7').isPrime(i)) {
      primes.push(i);
    }
  }
  let number = 1;
  let consecutiveIntegers = [];
  while (consecutiveIntegers.length === 0) {

  }
}
