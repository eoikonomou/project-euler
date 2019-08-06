// Prime permutations

/*
The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways:
(i) each of the three terms are prime, and,
(ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property,
but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?
*/

function arePermutations(number1, number2) {
  let commonDigits = '';
  const number1Digits = number1.toString().split('');
  const number2Digits = number2.toString().split('');
  number1Digits.forEach(digit => {
    const index = number2Digits.indexOf(digit);
    if (index > -1) {
      commonDigits += number2Digits.splice(index, 1)
    }
  });
  return commonDigits.length === number1.toString().length;
}

function findSequenceTerms() {
  const now = Date.now();
  let result = null;
  primes = [];
  for (let i = 1001; i < 10000; i += 2) {
    if (require('../level1/problem7').isPrime(i)) {
      primes.push(i);
    }
  }
  primes.splice(primes.indexOf(1487), 1);
  primes.splice(primes.indexOf(4817), 1);
  primes.splice(primes.indexOf(8147), 1);
  let i = 0;
  while (result === null) {
    for (let diff = i; diff > 0; diff--) {
      if (arePermutations(primes[i], primes[i - diff])) {
        const lowerDifference = primes[i] - primes[i - diff];
        const upperPrime = primes.find(prime => prime - primes[i] === lowerDifference);
        if (upperPrime && arePermutations(primes[i], upperPrime)) {
          result = `${primes[i-diff]}${primes[i]}${upperPrime}`;
          break;
        }
      }
    }
    i++;
  }
  console.log(require('../utils/time')(now));
  return result;
}

console.log(findSequenceTerms()); // 1049 1499 1949
