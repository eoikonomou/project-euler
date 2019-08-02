const {
  isPrime
} = require('../level1/problem7');
const fs = require('fs');
// Circular primes

/*
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

const jsonArray = [];

function findRotations(number) {
  const rotations = new Set();
  rotations.add(number);
  if (number > 9) {
    const numberString = number.toString();
    for (let i = 0; i < numberString.length; i++) {
      rotations.add(Number(
        numberString.substr(i+1, numberString.length) + numberString.substr(0, i + 1)
      ));
    }
}
  return Array.from(rotations);
}

function isCircularPrime(prime) {
  // Check if there is any even digit
  const digits = prime.toString().split('');
  if (digits.length > 1 && digits.some((digit, index) => (Number(digit) % 2 === 0 || Number(digit) % 5 === 0) && [digits.length - 2, digits.length - 1].includes(index))) {
    return false;
  }
  return !findRotations(prime).some(number => !isPrime(Number(number)));
}

function findCircularPrimes(limit) {
  const circularPrimes = [2];
  for (let i = 3; i < limit; i += 2) {
    if (isCircularPrime(i)) {
      circularPrimes.push(i);
    }
  }
  return circularPrimes;
}

function countCircularPrimes(limit) {
  const now = Date.now();
  const circularPrimes = findCircularPrimes(limit);
  const count = circularPrimes.length;
  console.log(require('../utils/time')(now));
  return count;
}
// console.log(findRotations(197)); // 197, 971, and 719

// console.log(countCircularPrimes(100)); // 13

console.log(countCircularPrimes(1000000)); // 55
