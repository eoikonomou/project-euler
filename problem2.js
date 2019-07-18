// Even Fibonacci numbers

/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
function fibonacci(num1, num2, numbers, limit) {
  const next = num1 + num2;
  if (next > limit) {
    return numbers;
  }
  if (next % 2 === 0) {
    numbers.push(next);
  }
  return fibonacci(num2, next, numbers, limit);
}
function evenFibonacciNumbers(limit) {
  return fibonacci(1, 2, [2], limit);
}

console.log(evenFibonacciNumbers(4000000).reduce((p, c) => p + c, 0));