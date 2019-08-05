const isPalindrome = require('../level1/problem4');
// Double-base palindromes

/*
The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

function convertToBinary(number) {
  return number.toString(2);
}

function getSumOfDoubleBasePalindromes(limit) {
  const now = Date.now();
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    if (isPalindrome(i) && isPalindrome(convertToBinary(i))) {
      sum += i;
    }
  }
  console.log(require('../utils/time')(now));
  return sum;
}

console.log(getSumOfDoubleBasePalindromes(1000000)); // 872187
