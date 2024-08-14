/**
 * Problem 56: Powerful Digit Sum
 *
 * A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.
 *
 * Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?
 */
function problem56() {
    let max = 0;
    for (let a = 1; a < 100; a++) {
        for (let b = 1; b < 100; b++) {
            max = Math.max([...(BigInt(a) ** BigInt(b)).toString()].reduce((acc, cur) => acc + parseInt(cur), 0), max);
        }
    }
    return max;
}

console.time('Problem 56');
console.log(problem56());
console.timeEnd('Problem 56');
