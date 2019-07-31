const bigInt = require('big-integer');
const isPrime = require('../level1/problem7').isPrime;
// Quadratic primes

/*
Euler discovered the remarkable quadratic formula:

n2+n+41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39.
However, when n=40,402+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41 is clearly divisible by 41.

The incredible formula n2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n2+an+b, where |a|<1000 and |b|≤1000

where |n| is the modulus/absolute value of n
e.g. |11|=11 and |−4|=4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.
*/

function quadraticFunction(a, b, n) {
  return bigInt(n)
    .pow(bigInt(2))
    .add(bigInt(a).multiply(bigInt(n)))
    .add(bigInt(b));
}

function findProductOfCoefficientsWithMaxNumberOfPrimes(aLimit, bLimit) {
  const now = Date.now();
  var maxConsecutivePrimesCount = 0;
  var coefficients = {
    a: 0,
    b: 0
  };
  for (let a = -aLimit + 1; a < aLimit; a += 2) {
    for (let b = 0; b <= bLimit; b += 1) {
      for (i = 0; i < 2; i++) {
        const sign = i === 0 ? 1 : -1;
        const aBalancer = b % 2 === 0 ? -1 : 0; // In order for the first element of the function to be odd and prime b + a must be even
        let n = 0;
        while (isPrime(Math.abs(quadraticFunction(a + aBalancer, sign * b, n).toJSNumber()))) {
          n++;
        }
        if (n > maxConsecutivePrimesCount) {
          coefficients = {
            a: a + aBalancer,
            b: sign * b
          };
          maxConsecutivePrimesCount = n;
        }
      }
    }
  }
  console.log(require('../utils/time')(now));
  return coefficients.a * coefficients.b;
}

console.log(findProductOfCoefficientsWithMaxNumberOfPrimes(1000, 1000)); // -59231
