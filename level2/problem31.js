// Coin sums

/*
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/

const poundFractions = [1, 2, 5, 10, 20, 50, 100, 200];

function findNumberOfDifferentWaysToCreatePounds(pounds) {
  const now = Date.now();
  const ways = Array(pounds + 1).fill(0);
  ways[0] = 1;

  for (let i = 0; i < poundFractions.length; i++) {
    for (let j = poundFractions[i]; j <= pounds; j++) {
      ways[j] += ways[j - poundFractions[i]];
    }
  }
  console.log(require('../utils/time')(now));
  return ways[ways.length - 1];
}

console.log(findNumberOfDifferentWaysToCreatePounds(200)); // 73682
