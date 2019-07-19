// Number letter counts

/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
The use of "and" when writing out numbers is in compliance with British usage.
*/

function translateNumber(number) {
  const suffix = ['hundred', 'thousand'];
  const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const twoDigitGroups = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  var num = '';
  for (let i = 0; i < number.toString().length; i++) {
    const currentDigit = number.toString()[i];
    if (currentDigit > 0) {
      if (number.toString().length - i > 2) {
        num += `${num.length > 0 ? ' ' : ''}${numbers[currentDigit]} ${suffix[number.toString().length - 1 - i - 2]}`;
      } else {
        const currentNumber = number.toString().substr(i);
        if (numbers[Number(currentNumber)]) {
          num += `${num.length > 0 ? ' and ' : ''}${numbers[Number(currentNumber)]}`;
        } else {
          num += `${num.length > 0 ? ' and ' : ''}${twoDigitGroups[Number(currentNumber[0]) - 2]}-${numbers[Number(currentNumber[1])]}`;
        }
        break;
      }
    }
  }
  return num;
}

function numberLetterCount(number) {
  var sum = 0;
  const translatedNumber = translateNumber(number);
  translatedNumber.split('').forEach((character) => {
    if (character.match(new RegExp(/[a-zA-Z]/))) {
      sum += 1;
    }
  });
  return sum;
}

function numberLetterCounts(min, max) {
  const now = Date.now();
  var sum = 0;
  for (let i = min; i <= max; i++) {
    sum += numberLetterCount(i);
  }
  console.log(require('../utils/time')(now));
  return sum;
}

console.log(numberLetterCounts(1, 5)); // 19
console.log(numberLetterCounts(1, 1000)); // 21124
