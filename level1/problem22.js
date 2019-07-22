const fs = require('fs');
const bigInt = require('big-integer');
// Names scores

/*
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order.
Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*/
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function nameScore(name, index) {
  return bigInt(name.split('').map(character => alphabet.indexOf(character) + 1).reduce((p, c) => p + c, 0)).multiply(index);
}

function sumNameScores() {
  const now = Date.now();
  const data = fs.readFileSync(__dirname.concat('/helper/names.txt')).toString().split(',');
  let sum = bigInt(0);
  data.sort();
  data.forEach((name, index) => {
    sum = sum.plus(nameScore(name, index + 1));
  });
  console.log(require('../utils/time')(now));
  return sum;
}

// console.log(nameScore('COLIN', 938)); // 49714

console.log(sumNameScores()); //
