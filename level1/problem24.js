// Lexicographic permutations

/*
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

function findPermutations(permutation, word, permutations) {
  if (word.length === 0) {
    permutations.push(permutation);
    return permutation;
  }
  for (let i = 0; i < word.length; i++) {
    findPermutations(permutation + word[i], word.substr(0, i) + word.substr(i + 1), permutations);
  }
  return permutations;
}

function getNthPermutation(n, word) {
  const now = Date.now();
  const permutations = findPermutations('', word, []);
  console.log(require('../utils/time')(now));
  return permutations[n - 1];
}

// console.log(findPermutations('', '012', []));
// console.log(getNthPermutation(1000000, '0123456789')); // 2783915460

module.exports = findPermutations;
