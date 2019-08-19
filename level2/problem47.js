// Distinct primes factors

/*
The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19

Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?
*/

function consecutiveIntegers(maxNumber, consecutive) {
  const now = Date.now();
  let factorCounts = [];
  for (let i = 0; i < maxNumber; i++) {
    factorCounts.push(0);
  }
  let contiguousFours = 0;
  for (let i = 2; i < factorCounts.length; ++i) {
    contiguousFours = factorCounts[i] === consecutive ? contiguousFours + 1 : 0;
    if (contiguousFours === consecutive) {
      console.log(require('../utils/time')(now));
      return i - 3;
    }
    if (factorCounts[i] === 0) // It's Prime
    {
      for (let j = i * 2; j < factorCounts.length; j += i) {
        ++factorCounts[j];
      }
    }
  }
  console.log(require('../utils/time')(now));
  return -1;
}

console.log(consecutiveIntegers(1000000, 4));
