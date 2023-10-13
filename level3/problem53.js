/*
 * There are exactly ten ways of selecting three from five, 12345:
 * 123, 124, 125, 134, 135, 145, 234, 235, 245 and 345
 * In combinatorics, we use the notation, (5 3) = 10.
 * In general, (n r) = n! / (r! * (n - r)!), where r <= n.
 * It is not until n = 23, that a value exceeds one-million: (23 10) = 1144066.
 * How many, not necessarily distinct, values of (n r) for 1 <= n <= 100, are greater than one-million?
 */

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    if (n < 3) {
        return n;
    }
    let result = 2;
    for (let i = 3; i <= n; i++) {
        result *= i;
    }
    return result;
}

function findResult(upperLimit) {
    let count = 0;
    for (let n = 1; n <= upperLimit; n++) {
        for (let r = 0; r <= n; r++) {
            count += (factorial(n) / (factorial(r) * factorial(n - r))) > 1000000 ? 1 : 0;
        }
    }
    return count;
}

const now = Date.now();

console.log(findResult(100));

console.log(require('../utils/time')(now));
