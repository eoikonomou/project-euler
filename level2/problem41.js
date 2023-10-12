const isPrime = require('../level1/problem7').isPrime();
const findPermutations = require('../level1/problem24');
// Pandigital prime

/*
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?
*/

function findMaxPandigitalPrime() {
    const now = Date.now();
    let n = 3;
    let maxPandigitalPrime = 0;
    while (n < 10) {
        let numberString = '';
        for (let i = 1; i < n; i++) {
            numberString += i;
        }

        findPermutations('', numberString, []).forEach((num) => {
            const number = Number(num);
            if (isPrime(number) && number > maxPandigitalPrime) {
                maxPandigitalPrime = number;
            }
        });
        n++;
    }
    console.log(require('../utils/time')(now));
    return maxPandigitalPrime;
}

console.log(findMaxPandigitalPrime()); // 7652413
