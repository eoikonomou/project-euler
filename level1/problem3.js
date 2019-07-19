// Largest prime factor

/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function largestPrimeFactor(number) {
  const result = new Set();
  while (number % 2 === 0) {
    number /= 2;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      number /= i;
      result.add(i);
    }
  }
  if (number > 2) {
    result.add(number);
  }
  return Math.max(...result);
}

console.log(largestPrimeFactor(600851475143));
