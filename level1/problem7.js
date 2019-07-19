// 10001st prime

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

function isPrime(number) {
  if (number < 4) {
    return true;
  }
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function nextPrime(number) {
  if (number === 2) {
    return 3;
  }
  number += 2;
  while (!isPrime(number)) {
    number += 2;
  }
  return number;
}

function findNthPrime(n) {
  const now = Date.now();
  let prime = 2;
  let count = 1;
  while (count < n) {
    prime = nextPrime(prime);
    count++;
  }
  console.log(`Solved in ${((Date.now() - now)/1000).toFixed(2)}s`);
  return prime;
}

// console.log(findNthPrime(6)); // 13
console.log(findNthPrime(10001)); // 104743
