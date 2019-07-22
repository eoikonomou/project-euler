const bigInt = require('big-integer');
// 1000-digit Fibonacci number

/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

function fibonacci(number1, number2, index, n) {
  const fib = number1.plus(number2);
  if (fib.toString().length >= n) {
    return index;
  }
  return fibonacci(number2, fib, index + 1, n);
}

function getFibonacciIndexWithNDigits(n) {
  const now = Date.now();
  const index = fibonacci(bigInt(1), bigInt(1), 3, n);
  console.log(require('../utils/time')(now));
  return index;
}

console.log(getFibonacciIndexWithNDigits(1000)); // 4782
