// Smallest Multiple

/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
function smallestMultiple(start, end) {
  const startTime = Date.now();
  const divisors = [];
  for (let i = start; i <= end; i++) {
    divisors.push(i);
  }

  let result = divisors[divisors.length - 1];
  while (divisors.length > 0) {
    if (divisors.every(divisor => result % divisor === 0)) {
      console.log(`Solved in ${((Date.now() - startTime) / 1000).toFixed(2)}s`);
      return result;
    }
    if (result % 2 > 0) {
      result++;
    } else {
      result += end;
    }
  }
}

// console.log(smallestMultiple(1, 10)); //2520
console.log(smallestMultiple(1, 20));