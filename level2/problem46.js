// Goldbach's other conjecture

/*
It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

// n = Math.sqrt(diff/2)

function findDiff(number, diff, primes) {
  if (diff > number) {
    return null;
  }
  while (
    !primes.includes(number - diff)
  ) {
    diff++;
  }
  const closestPrimeIndex = primes.indexOf(number - diff);
  if (Math.sqrt(diff / 2) !== Math.ceil(Math.sqrt(diff / 2))) {
    return findDiff(number, closestPrimeIndex === 0 ? number + 1 : number - primes[closestPrimeIndex - 1], primes);
  } else {
    return diff;
  }
}

function getSmallestOddComposite(limit) {
  const now = Date.now();
  const primes = [2];
  console.log('populating primes...');
  for (let i = 3; i < limit; i += 2) {
    if (require('../level1/problem7').isPrime(i)) {
      primes.push(i);
    }
  }
  console.log('finding odd number that justifies hypothesis...');
  let conjecture = true;
  let n = 33;
  while (conjecture === true) {
    n += 2;
    let diff = findDiff(n, 0, primes);
    if (diff === null) {
      conjecture = false;
    }
  }
  console.log(require('../utils/time')(now));
  return conjecture ? 'Not found' : n;
}

console.log(getSmallestOddComposite(10000));
