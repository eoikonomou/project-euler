// Longest Collatz sequence

/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem),
it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

function nextStepOfCollatzeSequence(n) {
  if (n % 2 === 0) {
    return n / 2;
  }
  return 3 * n + 1;
}

function longestCollatzSequence(limit) {
  const now = Date.now();
  var maxCollatzSequenceStart = 0;
  var maxCollatzSequenceSize = 0;
  var start = 1;
  while (start < limit) {
    const collatzSequence = [start];
    let current = start;
    while (current !== 1) {
      current = nextStepOfCollatzeSequence(current);
      collatzSequence.push(current);
    }
    if (collatzSequence.length > maxCollatzSequenceSize) {
      maxCollatzSequenceSize = collatzSequence.length;
      maxCollatzSequenceStart = start;
    }
    start++;
  }
  console.log(require('../utils/time')(now));
  return maxCollatzSequenceStart;
}

console.log(longestCollatzSequence(1000000)); // 837799
