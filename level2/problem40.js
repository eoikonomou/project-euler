// Champernowne's constant

/*
An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

function getDigit(decimal) {
  const fraction = Number('0.' + decimal.toString().substr(decimal.toString().indexOf('.') + 1));
  const integer = +decimal.toString().substr(0, decimal.toString().indexOf('.')) + 1;
  for (let numerator = 1; numerator < 10; numerator++) {
    for (let denominator = 2; denominator < 10; denominator++) {
      if ((numerator / denominator).toFixed(4).includes(fraction.toFixed(4))) {
        return Number(integer.toString()[numerator - 1]);
      }
    }
  }
}

function getExpression() {
  const now = Date.now();
  // digits 1 - 9 -> 1 - 9
  // digits 10 - 99 -> 10 - 189
  // digits 100 - 999 -> 190 - 2,889
  // digits 1,000 - 9,999 -> 2,890 - 38,889
  // digits 10,000 - 99,999 -> 38,890 - 488,889
  // digits 100,000 - 999,999 -> 488,890 - 5,888,889
  const d1 = 1;
  const d10 = getDigit((10 - 9) / 2 + 9);
  const d100 = getDigit((100 - 9) / 2 + 9);
  const d1000 = getDigit((1000 - 189) / 3 + 99);
  const d10000 = getDigit((10000 - 2889) / 4 + 999);
  const d100000 = getDigit((100000 - 38889) / 5 + 9999);
  const d1000000 = getDigit((1000000 - 488889) / 6 + 99999);

  console.log(require('../utils/time')(now));
  return d1 * d10 * d100 * d1000 * d10000 * d100000 * d1000000;
}

console.log(getExpression());
