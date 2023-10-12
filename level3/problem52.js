/*
 * It can be seen that the number, 125874, and its double, 251748, contain exactly the same
 * digits, but in a different order.
 * Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x and 6x, contain the same digits.
 */

function findNumber() {
    let number = 100000;
    while (!containsSameDigits(number)) {
        number += 1;
    }
    return number;
}

function containsSameDigits(number) {
    const double = number * 2;
    const sextuplet = number * 6;
    if (
        double.toString().length !== sextuplet.toString().length ||
        !numbersContainSameDigits(double, sextuplet)
    ) {
        return false;
    }
    const triple = number * 3;
    if (
        double.toString().length !== triple.toString().length ||
        !numbersContainSameDigits(double, triple)
    ) {
        return false;
    }
    const quadruple = number * 4;
    if (
        triple.toString().length !== quadruple.toString().length ||
        !numbersContainSameDigits(triple, quadruple)
    ) {
        return false;
    }
    const quintuple = number * 5;
    if (
        quintuple.toString().length !== quadruple.toString().length ||
        !numbersContainSameDigits(quadruple, quintuple)
    ) {
        return false;
    }
    return true;
}

function numbersContainSameDigits(number1, number2) {
    const number1Chars = number1.toString().split('').sort();
    const number2Chars = number2.toString().split('').sort();
    return number1Chars.join('') === number2Chars.join('');
}

const now = Date.now();

console.log(findNumber());

console.log(`Finished in ${Date.now() - now}ms`);
