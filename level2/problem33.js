const gcd = require('../level1/problem5');
const {
  isPrime
} = require('../level1/problem7');
// Digit cancelling fractions

/*
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct,
is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
*/

function getNonTrivialCuriousFractionCommonDigit(numerator, denominator) {
  if (numerator !== denominator) {
    const numeratorDigits = numerator.toString().split('');
    const denominatorDigits = denominator.toString().split('');
    for (let i = 0; i < numeratorDigits.length; i++) {
      for (let j = 0; j < denominatorDigits.length; j++) {
        if (numeratorDigits[i] === denominatorDigits[j] && numeratorDigits[i] !== '0') {
          return numeratorDigits[i];
        }
      }
    }
  }
  return null;
}

function getLowestCommonTerms(numerator, denominator) {
  while (true) {
    const dem = gcd(numerator, denominator);
    if ([1, null].includes(dem)) {
      break;
    }
    numerator /= dem;
    denominator /= dem;
  }
  return {
    numerator,
    denominator
  };
}

function getDenominator() {
  const now = Date.now();
  const fractions = [];
  for (let denominator = 12; denominator < 100; denominator++) {
    if (denominator % 10 === 0) continue;
    for (let numerator = 11; numerator < denominator; numerator++) {
      if (numerator % 10 === 0) continue;
      const commonDigit = getNonTrivialCuriousFractionCommonDigit(numerator, denominator);
      if (commonDigit !== null) {
        const newNumerator = Number(numerator.toString().replace(commonDigit, ''));
        const newDenominator = Number(denominator.toString().replace(commonDigit, ''));
        if ((numerator / denominator) === (newNumerator / newDenominator)) {
          fractions.push({
            numerator,
            denominator
          });
        }
      }
    }
  }
  let numerator = fractions.reduce((p, c) => p * c.numerator, 1);
  let denominator = fractions.reduce((p, c) => p * c.denominator, 1);
  let fraction = getLowestCommonTerms(numerator, denominator);
  console.log(require('../utils/time')(now));
  return fraction.denominator;
}

console.log(getDenominator()); // 100
