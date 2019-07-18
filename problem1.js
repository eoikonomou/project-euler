// Multiples of 3 and 5

/*
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6 and 9. The sum of these multiples is 23.
  Find the sum of all multiples of 3 or 5 below 1000.
*/

function sumMultiplesOf3Or5(limit) {
  const multiplesOf3 = [];
  const multiplesOf5 = [];
  const multiplesOf3And5 = new Set();
  for (let i = 3; i < limit; i += 3) {
    multiplesOf3.push(i);
    if (i % 5 === 0) {
      multiplesOf3And5.add(i);
    }
  }
  for (let i = 5; i < limit; i += 5) {
    multiplesOf5.push(i);
    if (i % 3 === 0) {
      multiplesOf3And5.add(i);
    }
  }
  return multiplesOf3.concat(multiplesOf5).reduce((p, c) => p + c, 0) - Array.from(multiplesOf3And5).reduce((p, c) => p + c, 0);
}

// console.log(sumMultiplesOf3Or5(10)); // 23
console.log(sumMultiplesOf3Or5(1000)); // 233168
