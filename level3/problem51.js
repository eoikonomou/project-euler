/*
 * By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values:
 * 13, 23, 43, 53, 73, and 83, are all prime.
 * By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example
 * having seven primes among the ten generated numbers, yielding the family:
 * 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently, 56003, being the first member of this family,
 * is the smallest prime with this property.
 * Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits)
 * with the same digit, is part of an eight prime value family.
*/

const isPrime = require('../level1/problem7').isPrime();

function generateFamily(numberString, indices) {
    const family = [];
    const numArray = numberString.split('');
    for (let i = indices[0] === 0 ? 1 : 0; i < 10; i++) {
        const numArrayCopy = [...numArray];
        indices.forEach(index => {
            numArrayCopy[index] = i;
        })
        family.push(parseInt(numArrayCopy.join('')));
    }
    return family.filter(member => isPrime(member));
}

function findMinWithFamilyByDigits(digits) {
    const subsets = [];
    for (let i = 0; i < digits - 2; i++) {
        for (let j = i + 1; j < digits - 1; j++) {
            for (let z = j + 1; z < digits; z++) {
                subsets.push([i, j, z]);
            }
        }
    }
    const primeNumberCandidates = new Set();
    for (let i = Math.pow(10, digits - 4); i < Math.pow(10, digits - 3); i++) {
        if (i % 3 !== 0) {
            primeNumberCandidates.add(i);
        }
    }
    for (const primeNumber of primeNumberCandidates) {
        const primeNumberString = primeNumber.toString();
        for (const subset of subsets) {
            const primeNumberArray = Array(digits).fill(0);
            let index = 0;
            for (let i = 0; i < digits; i++) {
                if (subset.includes(i)) {
                    primeNumberArray[i] = '1';
                } else {
                    primeNumberArray[i] = primeNumberString[index];
                    index++;
                }
            }
            if (generateFamily(primeNumberArray.join(''), subset).length > 7) {
                return primeNumberArray.join('');
            }
        }
    }
    return null;
}

function findMinWithFamily() {
    for (let i = 4; i < 10; i++) {
        const foundNumber = findMinWithFamilyByDigits(i);
        if (foundNumber) {
            return foundNumber;
        }
    }
    return 'Not found';
}

const now = Date.now();

console.log(findMinWithFamily(6));

console.log(require('../utils/time')(now));
