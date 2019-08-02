// Smallest Multiple

/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
}

function smallestMultiple(start, end) {
  const startTime = Date.now();
  const divisors = [];
  for (let i = start; i <= end; i++) {
    divisors.push(i);
  }
  let lcm = divisors[0];
  for (let i = 1; i < end; i++) {
    lcm = divisors[i] * lcm / gcd(divisors[i], lcm);
  }
  console.log(`Solved in ${((Date.now() - startTime) / 1000).toFixed(2)}s`);
  return lcm;
}

// console.log(smallestMultiple(1, 10)); //2520
// console.log(smallestMultiple(1, 20)); // 232792560

module.exports = gcd;
