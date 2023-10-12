// 10001st prime

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

function isPrime() {
    const primes = new Set();
    return function (number) {
        if (primes.has(number)) {
            return true;
        }
        if (number === 1) {
            return false;
        }
        if (number < 4) {
            primes.add(number);
            return true;
        }
        if (number % 2 === 0) {
            return false;
        }
        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i === 0) {
                return false;
            }
        }
        primes.add(number);
        return true;
    }
}

function nextPrime(number) {
    if (number === 1) {
        return 2;
    }

    if (number === 2) {
        return 3;
    }
    number += 2;
    while (!isPrime(number)) {
        number += 2;
    }
    return number;
}

function findNthPrime(n) {
    const now = Date.now();
    let prime = 2;
    let count = 1;
    while (count < n) {
        prime = nextPrime(prime);
        count++;
    }
    console.log(`Solved in ${((Date.now() - now) / 1000).toFixed(2)}s`);
    return prime;
}

// console.log(findNthPrime(6)); // 13
// console.log(findNthPrime(10001)); // 104743

module.exports = {
    isPrime,
    nextPrime,
};
