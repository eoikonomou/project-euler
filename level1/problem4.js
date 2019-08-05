// Largest palindrome product

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(number) {
  if (typeof number === 'string') {
    return number === number.split('').reverse().join('');
  }
  return number.toString() === number.toString().split('').reverse().join('');
}

function findAllPalindromeProducts(digits) {
  const smallestNumber = Number('1'.padEnd(digits, '0'));
  const largestNumber = Number('9'.padEnd(digits, '9'));
  const products = [];
  for (let i = smallestNumber; i <= largestNumber; i++) {
    for (let j = i; j <= largestNumber; j++) {
      if (isPalindrome(i * j))
        products.push(i * j);
    }
  }
  return products;
}

function largestPalindromeProduct(digits) {
  return Math.max(...findAllPalindromeProducts(digits));
}

// console.log(largestPalindromeProduct(2)); // 9009
// console.log(largestPalindromeProduct(3)); //906609

module.exports = isPalindrome;
