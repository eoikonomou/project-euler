// Pandigital products

/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

function findSumOfAllPandigitalNumberProducts(limit) {
  const now = Date.now();
  let products = new Set();
  for (let i = 1; i < Math.sqrt(Math.pow(10, limit + 1)); i++) {
    for (let j = i + 1; j < Math.pow(10, limit + 1); j++) {
      const product = i * j;
      const digits = i.toString().split('').concat(j.toString().split('')).concat(product.toString().split(''));
      if (digits.length > 9) {
        break;
      }
      if (digits.length === 9 && (new Set(digits)).size === 9 && !digits.includes('0')) {
        products.add(product);
      }
    }
  }
  const sum = Array.from(products).reduce((p, c) => p + c, 0);
  console.log(require('../utils/time')(now));
  return sum;
}

console.log(findSumOfAllPandigitalNumberProducts(9)); // 45228
