// Non-abundant sums

/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number.
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.
By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.
However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers
is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

function getAbundantNumbers(limit) {
  const abundantNumbers = [];
  for (let i = 1; i <= limit; i++) {
    let properDivisorSum = 1;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        properDivisorSum += j;
      }
    }
    if (properDivisorSum > i) {
      abundantNumbers.push(i);
    }
  }
  return abundantNumbers;
}

function getAbundantNumberSums(abundantNumbers) {
  const sums = new Set();
  for (let i = 0; i < abundantNumbers.length; i++) {
    for (let j = 0; j < abundantNumbers.length; j++) {
      sums.add(abundantNumbers[i] + abundantNumbers[j]);
    }
  }
  return Array.from(sums);
}

function sumOfNonAbundantProducts() {
  const now = Date.now();
  const limit = 28123;
  const abundantNumbers = getAbundantNumbers(limit);
  const abundantNumberSums = getAbundantNumberSums(abundantNumbers);
  let result = 0
  for (let number = 1; number < limit; number++) {
    if (!abundantNumberSums.includes(number)) {
      result += number;
    }
  }
  console.log(require('../utils/time')(now));
  return result;
}

console.log(sumOfNonAbundantProducts()); // 4179871 -> 2.76s
