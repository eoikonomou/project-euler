// Sum square difference

/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function sumSquareDifference(limit) {
  const now = Date.now();
  let sumOfSquares = 0;
  let squareOfSum = 0;
  for (let i = 1; i <= limit; i++) {
    sumOfSquares += Math.pow(i, 2);
    squareOfSum += i;
  }
  console.log(`Solved in ${((Date.now() - now)/1000).toFixed(2)}s`);
  return Math.pow(squareOfSum, 2) - sumOfSquares;
}

// console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(100)); // 25164150
