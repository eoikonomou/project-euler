// Reciprocal cycles

/*
A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/
function getPeriodLength(divisor) {
    const quotient = [];
    const previous = {};
    let remainder = 10,
        i = 0;
    while (remainder) {
        var division = (remainder / divisor) | 0;
        quotient.push(division);
        remainder = (remainder - division * divisor) * 10;
        if (previous[division + " " + remainder]) break;
        previous[division + " " + remainder] = i;
        i++;
    }
    if (remainder) return i - previous[division + " " + remainder];
    return 0;
}

function reciprocalCycles(limit) {
    const now = Date.now();
    let max = 0,
        maxD;
    for (let d = 2; d < limit; d++) {
        const periodLength = getPeriodLength(d);
        if (periodLength > max) {
            max = periodLength;
            maxD = d;
        }
    }
    console.log(require('../utils/time')(now));
    return maxD;
}

console.log(reciprocalCycles(1000)); // 983
